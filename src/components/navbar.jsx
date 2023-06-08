import Link from "next/link";
import Image from "next/image";
import logo from "../images/logo.png"

const Navbar = () => {
    return (
        <div className="flex justify-between px-6 h-24 bg-gray-50 ">
            <div className="w-fit  flex flex-wrap items-center">
                <div className="w-32">
                    <Link href='/'><Image className="w-full" src={logo} alt="Logo pizza"
                            width={100}
                            height={100}
                            ></Image></Link>
                    
                </div>
                <nav className="flex text-gray-400 w-96 justify-around">
                    <Link href='/servicio'>SERVICIO</Link>
                    <Link href='/equipo'>EQUIPO</Link>
                    <Link href='/contacto'>CONTACTO</Link>
                </nav>
            </div>
            <div className="flex items-center justify-around w-44 text-gray-500">
                    <a href="#"><i class="fa-brands fa-facebook"></i></a>
                    <a href="#"><i class="fa-brands fa-whatsapp"></i></a>
                    <a href="#"><i class="fa-brands fa-instagram"></i></a>
                    <a href="#"><i class="fa-brands fa-youtube"></i></a>
            </div>
            
        </div>

      );
}
 
export default Navbar;