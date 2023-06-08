import Image from "next/image";
import imgportada1 from "../images/menu/americana.png"
const Portada = () => {

    return ( 
    <header className="w-full flex bg-gray-50 py-32">
        <div className="w-1/12 flex items-center justify-end">
            <a href=""><i class="fa-solid fa-chevron-left text-3xl text-red-500"></i></a>
        </div>
        <div className="w-10/12 flex justify-center items-center">
                <div className="w-1/3 h-fit">
                    <h1 className="text-3xl pb-2 leading-loose">producto <span className="font-semibold">premium </span><br /> <span className="text-6xl font-semibold">PEPERONNI</span></h1>
                    <p className="text-gray-400 italic my-3">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Provident debitis nihil incidunt quisquam ab reiciendis consequuntur iure.
                    </p>
                    <button className="bg-orange-400 text-white px-5 py-3 " >!SOLICITA AQUÍ¡ <i class="fa-solid fa-chevron-right text-xs"></i> </button>
                </div>
                <div className="w-1/2">
                    <Image className="w-full" src={imgportada1} width={800} height={800}/>
                </div>
        </div>
        <div className="w-1/12 flex items-center">
            <a href=""><i class="fa-solid fa-chevron-right text-3xl  text-red-500"></i></a>
        </div>
        
    </header> );
}
 
export default Portada;