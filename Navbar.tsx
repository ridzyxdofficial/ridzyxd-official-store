"use client";

import Link from "next/link";

export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-xl bg-black/40 border-b border-cyan-500/20">

      <div className="max-w-7xl mx-auto h-16 px-6 flex items-center justify-between">

        <Link
          href="/"
          className="text-cyan-400 font-bold text-2xl"
        >
          RidzyXD
        </Link>

        <nav className="hidden md:flex gap-8">

          <Link href="/">Home</Link>

          <Link href="/products">
            Products
          </Link>

          <Link href="/about">
            About
          </Link>

          <Link href="/contact">
            Contact
          </Link>

        </nav>

      </div>

    </header>
  );
}