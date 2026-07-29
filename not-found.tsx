import Link from "next/link";

export default function NotFound() {
  return (
    <main className="min-h-screen flex items-center justify-center">

      <div className="text-center">

        <h1 className="text-8xl font-bold">
          404
        </h1>

        <p className="text-gray-400 mt-5">
          Halaman tidak ditemukan.
        </p>

        <Link
          href="/"
          className="btn btn-primary inline-block mt-8"
        >
          Kembali ke Home
        </Link>

      </div>

    </main>
  );
}