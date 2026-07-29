"use client";

export default function Error({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  return (
    <main className="min-h-screen flex items-center justify-center bg-[#050816] text-white">
      <div className="text-center">
        <h1 className="text-4xl font-bold">Terjadi Kesalahan</h1>
        <p className="mt-3 text-gray-400">{error.message}</p>

        <button
          onClick={() => reset()}
          className="mt-8 rounded-xl bg-cyan-500 px-6 py-3 font-bold"
        >
          Coba Lagi
        </button>
      </div>
    </main>
  );
}