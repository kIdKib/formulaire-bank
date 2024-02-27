import { FaAngleRight, FaAngleLeft } from "react-icons/fa6";
import { Link, useNavigate } from "react-router-dom";

const FootBut = ({disabled, first= 'RETOUR', second= "SUIVANT"}) => {

    let h = useNavigate()
    return ( <div className="flex justify-between">

        <button className= {`flex items-center`} onClick={() => h(-1)} disabled={disabled ? true : false }>
            <div className= {`flex justify-center items-center text-4xl text-white  mr-2 rounded-full border w-16 h-16 ${disabled ? 'text-white-200 bg-gray-500' : "bg-black"}`} ><FaAngleLeft/></div>
            <span className={`text-xl ${disabled ? 'text-gray-500' : ""}`} >{first}</span>
        </button>
        <button className="flex items-center ">
            <span className="text-xl text-orange-600">{second}</span>
            <div className={`flex justify-center items-center text-4xl text-white bg-orange-600 ml-2 rounded-full border w-16 h-16`}><FaAngleRight/></div>
        </button>
    </div> );
}
 
export default FootBut;