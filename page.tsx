const products = [
  "Panel Pterodactyl",
  "Sewa Bot WhatsApp",
  "Jadi Bot WhatsApp",
  "Top Up Game",
  "Nokos WhatsApp",
  "Jasbug WhatsApp",
  "Suntik Sosmed",
  "Aplikasi Premium"
];

export const metadata = {
  title: "Products | RidzyXD Official Store",
};

export default function ProductsPage() {
  return (
    <main className="min-h-screen px-6 py-24">

      <div className="max-w-7xl mx-auto">

        <h1 className="title">
          Semua Produk
        </h1>

        <p className="subtitle">
          Pilih layanan yang kamu butuhkan.
        </p>

        <div className="grid md:grid-cols-4 gap-6 mt-10">

          {products.map((item) => (

            <div
              key={item}
              className="card p-6"
            >

              <h2 className="text-xl font-bold">
                {item}
              </h2>

              <p className="text-gray-400 mt-3">
                Harga akan ditambahkan nanti.
              </p>

              <a
                href="https://wa.me/62895392338445"
                className="btn btn-primary inline-block mt-6"
              >
                Order
              </a>

            </div>

          ))}

        </div>

      </div>

    </main>
  );
}