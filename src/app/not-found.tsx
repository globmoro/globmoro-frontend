import Link from "next/link";

export default function NotFound() {
  return (
    <div className="mx-auto flex min-h-[70vh] max-w-6xl flex-col justify-center px-5 py-28 md:px-8">
      <p className="text-xs uppercase tracking-[0.18em] text-copper">404</p>
      <h1 className="mt-4 text-4xl md:text-5xl">Page introuvable</h1>
      <p className="mt-4 max-w-md text-mist">
        Cette page n’existe pas. Retournez à l’accueil ou consultez le stock.
      </p>
      <div className="mt-8 flex flex-wrap gap-3">
        <Link href="/" className="btn-primary">
          Accueil
        </Link>
        <Link href="/stock" className="btn-ghost">
          Stock
        </Link>
      </div>
    </div>
  );
}
