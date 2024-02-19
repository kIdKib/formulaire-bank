import { FaAngleRight, FaAngleLeft } from "react-icons/fa6";

const FootBut = ({disabled, first= 'RETOUR', second= "SUIVANT"}) => {

    return ( <div className="flex justify-between">
        <button className= {`flex items-center`} disabled={disabled ? true : false }>
            <div className= {`flex justify-center items-center text-4xl text-white bg-black mr-2 rounded-full border w-16 h-16 ${disabled ? 'text-white-200 bg-slate-200' : ""}`} ><FaAngleLeft/></div>
            <span className={`text-xl ${disabled ? 'text-gray-300' : ""}`} >{first}</span>
        </button>
        <button className="flex items-center ">
            <span className="text-xl text-orange-600">{second}</span>
            <div className={`flex justify-center items-center text-4xl text-white bg-orange-600 ml-2 rounded-full border w-16 h-16`}><FaAngleRight/></div>
        </button>
    </div> );
}
 
export default FootBut;