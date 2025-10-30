import type { Metadata } from 'next';
import type {
  FontFamily,
  FontsResponse,
  PageProps,
  SearchParams,
} from '@/models/fontFamilie';
import { GET } from '@/app/api/families';
import Link from 'next/link';
import CardFontComponent from './components/cards/font';
import PaginationComponent from './components/pagination';

// génération des métadonnées dynamiques pour chaque page
export async function generateMetadata({
  searchParams,
}: PageProps): Promise<Metadata> {
  const page = await getPage(searchParams);
  return {
    title: `Home - Page ${page}`,
    description: 'Page d’accueil de la liste des polices',
  };
}

// fonction pour obtenir le numéro de page à partir des paramètres de recherche
async function getPage(searchParams: SearchParams) {
  const pageParam = (await searchParams)?.page;
  const page = Number(pageParam ?? 1);
  return Number.isNaN(page) || page < 1 ? 1 : page;
}

// fonction pour récupérer les données des polices depuis l'API
async function fetchData(searchParams: SearchParams) {
  const endpoint = 'https://fonts.ninja/api/families';
  const page = await getPage(searchParams);
  const res = await GET(new Request(`${endpoint}?page=${page}`));
  const data: FontsResponse = await res.json();
  return { page, data };
}

export default async function HomePage({ searchParams }: PageProps) {
  const { page, data } = await fetchData(searchParams);

  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 -mx-1">
        {data.families.map((item: FontFamily) => (
          <div key={item.idFont}>
            <Link href={`/font/${item.idFont}`} passHref>
              <CardFontComponent item={item} />
            </Link>
          </div>
        ))}
      </div>

      <PaginationComponent page={page} />
    </div>
  );
}
