const faq=[

["Apakah terpercaya?","Ya, kami mengutamakan keamanan pelanggan."],

["Metode pembayaran?","QRIS, DANA, OVO, GoPay & Transfer Bank."],

["Order bagaimana?","Klik tombol WhatsApp lalu kirim pesanan."],

["Apakah buka setiap hari?","Ya, 24 jam."]

]

export default function Faq(){

return(

<section>

<div className="max-w-5xl mx-auto px-6">

<h2 className="title text-center">

FAQ

</h2>

<div className="space-y-5 mt-10">

{

faq.map((item,index)=>(

<div

key={index}

className="card p-6"

>

<h3 className="font-bold text-xl">

{item[0]}

</h3>

<p className="text-gray-400 mt-3">

{item[1]}

</p>

</div>

))

}

</div>

</div>

</section>

)

}