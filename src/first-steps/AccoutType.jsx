import { useEffect, useState } from "react";
import { Navigate, useLocation } from "react-router-dom";
import Header from "./component/Header";

import immeuble from '../img/immeuble.jpeg'
import personnel from '../img/personnel.png'



const AccountType = () => {

    //GERE TOUTE LA PARTIE DE RECEPTION DES ANCIENNES DONNNÉE ET DES NOUVELLE DONNÉE
    const location = useLocation()
    const loactionData = location.state
    

    const [etat, setEtat] = useState()
    const [sub, setSub] = useState(false)
    const [selectionner, setSelectionner] = useState()

    const [fuseData, setfuseData] = useState()

    const handleClick = (data) => {
        setEtat(data)
        setSelectionner(data[0])
    }

    useEffect(() => {
        if (etat !== undefined) {
            let etatTab = etat
            
            if (etatTab !== undefined) setfuseData([loactionData,etat])
        }

    }, [etat])

    const handleSubmit = () => {
        if (fuseData !== undefined) setSub(true)
    }
    //GERE TOUTE LA PARTIE DE RECEPTION DES ANCIENNES DONNNÉE ET DES NOUVELLE DONNÉE

    return ( <div className="border">

        {sub && <Navigate state={fuseData} to={`/${etat}/form1`} />}

        <Header/>

        <div className="flex mt-5 w-full flex-col">
            <div onClick={() => handleClick(['user'])} className={`w-2/3 self-end flex justify-center items-center relative my-8 h-[90px] cursor-pointer ${selectionner == 'user' ? 'border-orange-900 border-4' : ''}`}>
                <img src={personnel} alt="" className="absolute h-full w-full object-cover"/>
                <div className={`h-full w-full absolute bg-black ${selectionner=='user' ? 'opacity-90' : 'opacity-60' }`}></div>
                <p className="relative text-white text-2xl">Compte<br/> Particulier</p>
            </div>  
            <div onClick={() => handleClick(['company'])} className={`w-2/3 self-start flex justify-center items-center relative my-8 h-[90px] cursor-pointer ${selectionner == 'company' ? 'border-orange-900 border-4' : ''}`}>
                <img src={immeuble} alt="" className="absolute h-full w-full object-cover"/>
                <div className={`h-full w-full absolute bg-black ${selectionner=='company' ? 'opacity-90' : 'opacity-60' }`}></div>
                <p className="relative text-white text-2xl">Compte<br/>Entreprise</p>
            </div>   
        </div>

        <div className="w-full mt-[22vh] flex justify-center">
            <button onClick={ (e) => handleSubmit(e)} className="bg-orange-900 w-[95%] text-white py-3 hover:shadow-2xl">Je confirme mon choix</button>
        </div>
    </div> );
}
 
export default AccountType;