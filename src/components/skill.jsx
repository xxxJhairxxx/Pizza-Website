const Skill = ({dato}) => {
    const {title,description}=dato;
    return ( <div className="w-80 flex justify-center flex-wrap cursor-pointer">
        <div className="w-28 h-28 m-auto border-double border-4 rounded-full flex justify-center items-center hover:bg-red-500 hover-herencia ease-in duration-200 ">
            <i className="fas fa-clock text-5xl text-red-500 extends ease-in duration-200"></i>
        </div>
        <div className="w-11/12">
            <h1 className="font-semibold">{title}</h1>
            <p className="text-gray-400 italic">{description}</p>
        </div>
    </div> );
}
 
export default Skill;