import {Mail,Phone} from "lucide-react";

export default function Footer(){

return(

<footer className="border-t border-cyan-500/20 py-12 mt-20">

<div className="max-w-7xl mx-auto px-6">

<h2 className="text-3xl font-bold text-cyan-400">

RidzyXD Official Store

</h2>

<div className="mt-5 space-y-3">

<div className="flex gap-2">

<Phone/>

0895392338445

</div>

<div className="flex gap-2">

<Mail/>

ridzyofficial338@gmail.com

</div>

</div>

<p className="text-gray-500 mt-8">

©2026 RidzyXD Official Store

</p>

</div>

</footer>

)

}