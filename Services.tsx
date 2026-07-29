"use client";

import {
Server,
Bot,
Gamepad2,
Smartphone,
Bug,
Sparkles,
ShieldCheck,
BadgeDollarSign
} from "lucide-react";

import { motion } from "framer-motion";

const services = [

{
title:"Panel Pterodactyl",
desc:"Panel private berkualitas tinggi.",
icon:Server
},

{
title:"Sewa Bot",
desc:"Bot WhatsApp online 24 jam.",
icon:Bot
},

{
title:"Jadi Bot",
desc:"Nomor kamu dijadikan bot.",
icon:ShieldCheck
},

{
title:"Top Up Game",
desc:"ML, FF, PUBG, HOK, Valorant.",
icon:Gamepad2
},

{
title:"Nokos WhatsApp",
desc:"Nomor kosong siap pakai.",
icon:Smartphone
},

{
title:"Jasbug",
desc:"Layanan bug WhatsApp.",
icon:Bug
},

{
title:"Suntik Sosmed",
desc:"Followers, Likes & Views.",
icon:Sparkles
},

{
title:"Aplikasi Premium",
desc:"Netflix, Spotify, CapCut dll.",
icon:BadgeDollarSign
}

]

export default function Services(){

return(

<section>

<div className="max-w-7xl mx-auto px-6">

<h2 className="title text-center">

Layanan Kami

</h2>

<p className="subtitle text-center">

Semua kebutuhan digital dalam satu tempat.

</p>

<div className="grid md:grid-cols-4 gap-6 mt-12">

{

services.map((item,index)=>(

<motion.div

key={index}

whileHover={{scale:1.04}}

className="card p-6"

>

<item.icon

size={42}

className="text-cyan-400"

/>

<h3 className="text-2xl font-bold mt-5">

{item.title}

</h3>

<p className="text-gray-400 mt-3">

{item.desc}

</p>

</motion.div>

))

}

</div>

</div>

</section>

)

}