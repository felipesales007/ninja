interface PaginationProps {
  page?: number;
  lastPage?: number;
  baseHref?: string;
}

export default function PaginationComponent({
  page = 1,
  lastPage = 3,
  baseHref = '/',
}: PaginationProps) {
  // fonction de verrouillage pour limiter les numéros de page dans une plage valide
  const clamp = (v: number, min: number, max: number) =>
    Math.min(Math.max(min, Math.floor(v)), max);

  // calcul des valeurs de pagination
  const total = Math.max(1, Math.floor(lastPage));
  const current = clamp(page, 1, total);
  const prevPage = Math.max(1, current - 1);
  const nextPage = Math.min(total, current + 1);
  const pages = Array.from({ length: total }, (_, i) => i + 1);

  // fonction pour construire les liens de pagination
  const buildHref = (p: number) => {
    const sep = baseHref.includes('?') ? '&' : '?';
    return `${baseHref}${sep}page=${p}`;
  };

  // icônes de flèche pour la navigation
  const ArrowLeftIcon = (
    <svg
      className="w-3.5 h-3.5 me-2 rtl:rotate-180"
      aria-hidden="true"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 14 10"
    >
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M13 5H1m0 0 4 4M1 5l4-4"
      />
    </svg>
  );

  const ArrowRightIcon = (
    <svg
      className="w-3.5 h-3.5 ms-2 rtl:rotate-180"
      aria-hidden="true"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 14 10"
    >
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M1 5h12m0 0L9 1m4 4L9 9"
      />
    </svg>
  );

  return (
    <nav
      aria-label="Pagination"
      className="flex items-center justify-start text-zinc-500 mt-4"
    >
      {/* page précédente */}
      {current === 1 ? (
        <button
          disabled
          aria-label="Page précédente"
          aria-disabled
          className="p-2 opacity-50 pointer-events-none cursor-not-allowed"
        >
          {ArrowLeftIcon}
        </button>
      ) : (
        <a
          href={buildHref(prevPage)}
          className="p-2 hover:text-black dark:hover:text-white transition"
          aria-label="Page précédente"
        >
          {ArrowLeftIcon}
        </a>
      )}

      {/* page actuelle, précédente et suivante (numérotées) */}
      <div className="flex items-center gap-4">
        {pages.map((p) => {
          const isCurrent = p === current;
          const baseClasses =
            'w-8 h-8 flex items-center justify-center font-medium transition';
          const activeClasses = 'rounded-xl bg-red-400 text-white';
          const inactiveClasses =
            'rounded-2xl hover:text-black dark:hover:text-white';

          return (
            <a
              key={p}
              href={buildHref(p)}
              className={`${baseClasses} ${
                isCurrent ? activeClasses : inactiveClasses
              }`}
              aria-current={isCurrent ? 'page' : undefined}
            >
              {p}
            </a>
          );
        })}
      </div>

      {/* page suivante */}
      {current === total ? (
        <button
          disabled
          aria-label="Page suivante"
          aria-disabled
          className="p-2 opacity-50 pointer-events-none cursor-not-allowed"
        >
          {ArrowRightIcon}
        </button>
      ) : (
        <a
          href={buildHref(nextPage)}
          className="p-2 hover:text-black dark:hover:text-white transition"
          aria-label="Page suivante"
        >
          {ArrowRightIcon}
        </a>
      )}
    </nav>
  );
}
