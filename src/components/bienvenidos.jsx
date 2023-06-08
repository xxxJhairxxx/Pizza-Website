import Image from 'next/image';
import pizza from '@/images/mitad-mitad.png'
import Skill from '@/components/skill'
const Bienvenidos = () => {
    const dato={title : 'RÁPIDEZ', description :'asasafsfasfasasasa adaldalsdhalsdhlasdhk alsdhklahdshklasc askldaklsjd'}


    return ( 
    <div className='text-center  py-20 w-11/12 mx-auto '>
        <h2 className='text-orange-400 text-2xl'>LA MEJOR PIZZA DEL MUNDO</h2>
        <h1 className='font-black text-4xl my-4'>BIENVENIDOS A WORLD PIZZA</h1>
        <div class="flex flex-wrap w-full py-10 justify-center">
            <div className='flex flex-col justify-around items-center'>
                    <Skill dato={dato} ></Skill>
                    <Skill dato={dato} ></Skill>
            </div>
            <div class="w-96 flex justify-center mx-4">
                <Image className='w-full transition-transform hover:scale-110  duration-500 ease-in-out cursor-pointer' src={pizza} width={400} heigth={400}/>
            </div>
            <div className=' flex flex-col justify-around items-center'>
                    <Skill dato={dato} ></Skill>
                    <Skill dato={dato} ></Skill>
            </div>
        </div>
    </div> );
}
 
export default Bienvenidos;