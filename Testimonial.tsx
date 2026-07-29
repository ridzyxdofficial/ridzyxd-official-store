export default function Testimonial() {

const reviews=[

{
name:"Andi",
text:"Pelayanannya cepat, recommended!"
},

{
name:"Rizki",
text:"Panel lancar, admin ramah."
},

{
name:"Fajar",
text:"Top up masuk kurang dari 1 menit."
}

]

return(

<section>

<div className="max-w-7xl mx-auto px-6">

<h2 className="title text-center">

Testimoni

</h2>

<p className="subtitle text-center">

Apa kata pelanggan kami.

</p>

<div className="grid md:grid-cols-3 gap-6 mt-10">

{

reviews.map((item,index)=>(

<div

key={index}

className="card p-6"

>

⭐⭐⭐⭐⭐

<h3 className="text-xl font-bold mt-4">

{item.name}

</h3>

<p className="text-gray-400 mt-3">

"{item.text}"

</p>

</div>

))

}

</div>

</div>

</section>

)

}