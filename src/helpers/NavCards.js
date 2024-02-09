import Image from "next/image";


const cards = [
  {
    id: 1, card: <Image src={"/testimonials/mes1.png"} className="object-cover rounded-lg" sizes='100vw' width={800}
      height={800} alt="messsage" />
  },
  {
    id: 2, card: <Image src={"/testimonials/mes2.png"} className="object-cover rounded-lg" sizes='100vw' width={800}
      height={800} alt="messsage" />
  },
  {
    id: 3, card: <Image src={"/testimonials/mes3.png"} className="object-cover rounded-lg" sizes='100vw' width={800}
      height={800} alt="messsage" />
  },
  {
    id: 4, card: <Image src={"/testimonials/mes4.png"} className="object-cover rounded-lg" sizes='100vw' width={800}
      height={800} alt="messsage" />
  },

]
export default cards;