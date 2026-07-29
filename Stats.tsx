import {
Users,
Clock3,
ShieldCheck,
Star
} from "lucide-react";

const stats=[

{
title:"1000+",
desc:"Customer",
icon:Users
},

{
title:"24/7",
desc:"Online",
icon:Clock3
},

{
title:"100%",
desc:"Trusted",
icon:ShieldCheck
},

{
title:"5★",
desc:"Rating",
icon:Star
}

]

export default function Stats(){

return(

<section>

<div className="max-w-7xl mx-auto px-6">

<div className="grid md:grid-cols-4 gap-6">

{

stats.map((item,index)=>(

<div

key={index}

className="card text-center p-8"

>

<item.icon

size={45}

className="mx-auto text-cyan-400"

/>

<h2 className="text-4xl font-bold mt-5">

{item.title}

</h2>

<p className="text-gray-400 mt-2">

{item.desc}

</p>

</div>

))

}

</div>

</div>

</section>

)

}