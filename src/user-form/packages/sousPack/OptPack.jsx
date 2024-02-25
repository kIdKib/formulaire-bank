import { Navigate, useLocation, useNavigate } from "react-router-dom";
import data from "./PackDetails"
import { useEffect, useState } from "react";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa6";


const OptPack = () => {

    let h = useNavigate()

    const location = useLocation()
    let loactionData = location.state

    const [etat, setEtat] = useState()
    const [sub, setSub] = useState(false)

    const [fuseData, setfuseData] = useState()

    console.log(location.state);

    
    const lien = window.location.href.split('/')
    let pack2 = lien.slice(-2)
    pack2 = pack2[0]
    
    const transformArray = Object.entries(data)

    let dataOut
    let dataOutInclFullTab

    let handleOnSubmit = (title) => {
        console.log(title);
        setfuseData([...location.state, title])
    }

    useEffect(() => {
        if (fuseData !== undefined) setSub(true)
    },[fuseData])

    for (let i = 0; i < transformArray.length; i++) {
       
        if (transformArray[i].find((pack2) => pack2 === transformArray[i][0]) ) {

            dataOut = transformArray[i]

            dataOutInclFullTab = Object.entries(dataOut[1].optionnel);

            break
        }
    }
    console.log(fuseData);
    return ( <div className="mt-14">
        {sub && <Navigate state={fuseData} to='/user/convention' />}

        <div className="h-[67vh] overflow-scroll scroll">
            {dataOutInclFullTab.map((tab) => {
                
                return(
                    <div className="mb-10">
                        <h1 style={{color:"#FF3C00", fontSize:"1.5rem"}}>{tab[0]}</h1>
                        <ul>
                            {tab[1].map(content => <li className="list-disc ml-8">{content}</li>)}
                        </ul>
                    </div>
                )
            })}
        </div>
        <div className="flex justify-between">
            <button className= {`flex items-center`} onClick={() => h(-1)}>
                <div className= {`flex justify-center items-center text-4xl text-white bg-black mr-2 rounded-full border w-16 h-16 text-white-200 bg-slate-200' `} ><FaAngleLeft/></div>
                <span className={`text-xl`} >RETOUR</span>
            </button>
            <button onClick={() => handleOnSubmit('OptPack')} className="flex items-center ">
                <span className="text-xl text-orange-600">JE SOUSCRIS</span>
                <div className={`flex justify-center items-center text-4xl text-white bg-orange-600 ml-2 rounded-full border w-16 h-16`}><FaAngleRight/></div>
            </button>
        </div>
    </div> );
}
 
export default OptPack;