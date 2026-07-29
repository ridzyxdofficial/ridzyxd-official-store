"use client";

import { motion } from "framer-motion";

export default function Hero() {

return(

<section className="min-h-screen flex items-center justify-center">

<motion.div

initial={{opacity:0,y:50}}

animate={{opacity:1,y:0}}

transition={{duration:.8}}

className="text-center"

>

<h1 className="text-6xl font-bold">

RidzyXD Official Store

</h1>

<p className="text-gray-400 mt-5">

Digital Marketplace Indonesia

</p>

<div className="flex justify-center gap-4 mt-10">

<a

href="https://wa.me/62895392338445"

className="btn btn-primary"

>

Order Sekarang

</a>

<a

href="/products"

className="btn border border-cyan-500"

>

Lihat Produk

</a>

</div>

</motion.div>

</section>

)

}