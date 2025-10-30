import Link from 'next/link';

export default function NotFoundPage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <h1 className="text-7xl font-extrabold text-red-400 drop-shadow-lg mb-4">
        404
      </h1>

      <p className="text-xl text-center text-gray-700 dark:text-white mb-8">
        Il semble que cette page n’existe pas
      </p>

      <Link href="/">
        <button
          type="button"
          aria-label="Returner à l’accueil"
          className="text-white bg-red-400 hover:bg-red-500 rounded-xl text-sm cursor-pointer px-5 py-2"
        >
          Retour à l’accueil
        </button>
      </Link>
    </div>
  );
}
