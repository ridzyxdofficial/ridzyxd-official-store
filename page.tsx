import { Phone, Mail, MessageCircle } from "lucide-react";

export const metadata = {
  title: "Contact | RidzyXD Official Store",
};

export default function ContactPage() {
  return (
    <main className="min-h-screen px-6 py-24">

      <div className="max-w-6xl mx-auto">

        <h1 className="title">
          Contact
        </h1>

        <div className="grid md:grid-cols-2 gap-6 mt-10">

          <div className="card p-8">

            <Phone className="text-cyan-400"/>

            <h2 className="text-2xl font-bold mt-4">
              WhatsApp
            </h2>

            <p className="mt-2">
              0895392338445
            </p>

            <a
              href="https://wa.me/62895392338445"
              className="btn btn-primary inline-block mt-6"
            >
              Chat Sekarang
            </a>

          </div>

          <div className="card p-8">

            <Mail className="text-cyan-400"/>

            <h2 className="text-2xl font-bold mt-4">
              Email
            </h2>

            <p className="mt-2">
              ridzyofficial338@gmail.com
            </p>

            <MessageCircle className="mt-6 text-green-500"/>

            <p className="text-gray-400 mt-3">
              Fast Response 24 Jam
            </p>

          </div>

        </div>

      </div>

    </main>
  );
}