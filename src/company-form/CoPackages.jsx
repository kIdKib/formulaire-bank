import { useEffect, useState } from "react";
import StepLoader from "../components/StepLoader";

import { Navigate, Outlet, useLocation, useNavigate } from "react-router-dom";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa6";

import immeuble from '../img/immeuble.jpeg'
import payement from '../img/payement.jpg'
import personnel from '../img/personnel.png'
import teamwork from '../img/teamwork.jpg'

const CoPackages = () => {

    let h = useNavigate()

    //GERE TOUTE LA PARTIE DE RECEPTION DES ANCIENNES DONNNÉE ET DES NOUVELLE DONNÉE
    let tabData = []
    const location = useLocation()
    let loactionData = Object.entries(location.state)   


    const [etat, setEtat] = useState()
    const [sub, setSub] = useState(false)
    const [selectionner, setSelectionner] = useState()


    const [fuseData, setfuseData] = useState()

    const handleOnClick = (data) => {
        setEtat(data)
        setSelectionner(data[0])

    }

    useEffect(() => {
        if (etat !== undefined) {
            let etatTab = Object.entries(etat)

            for (let i = 0; i < location.state.length; i++) {
                
                if (i > 1) {
                    let data = [location.state[i][0], location.state[i][1] ] 
                    tabData.push(data)
                } else {
                    let data = [location.state[i][0]] 
                    tabData.push(data)
                }
            }

            if (etatTab !== undefined && tabData !== undefined) setfuseData([...tabData,...etatTab])
        }
    }, [etat])



    
    const handleOnSubmit = () => {
        if (fuseData !== undefined) setSub(true)
    }
    //GERE TOUTE LA PARTIE DE RECEPTION DES ANCIENNES DONNNÉE ET DES NOUVELLE DONNÉE

    return ( <div className="w-1/3 border">

        {sub && <Navigate state={fuseData} to={`/company/packages/${etat[0]}`} />}

        <div className="px-4">
            <StepLoader texte={'Packages disponible'} niv={80} />
            <p className="my-5">
                Sélectionnez un package pour découvrir les produits
                et services associés 
            </p>    
        </div>

        <div className="flex mt-5 w-full flex-col">
            <div onClick={() => handleOnClick(['grdEntreprise'])} className={`w-2/3 self-end flex justify-center items-center relative my-8 h-[90px] cursor-pointer ${selectionner == 'grdEntreprise' ? 'border-orange-900 border-4' : ''}`}>
                <img src={immeuble} alt="" className="absolute h-full w-full object-cover"/>
                <div className={`h-full w-full absolute bg-black ${selectionner == 'grdEntreprise' ? 'opacity-90' : 'opacity-50'}`}></div>
                <p className="relative text-white">Grandes entreprises</p>
            </div>  
            <div onClick={() => handleOnClick(['PME_TPE'])} className={`w-2/3 self-start flex justify-center items-center relative my-8 h-[90px] cursor-pointer ${selectionner == 'PME_TPE' ? 'border-orange-900 border-4' : ''}`}>
                <img src={payement} alt="" className="absolute h-full w-full object-cover"/>
                <div className={`h-full w-full absolute bg-black ${selectionner == 'PME_TPE' ? 'opacity-90' : 'opacity-50'}`}></div>
                <p className="relative text-white">PME/TPE</p>
            </div>  
            <div onClick={() => handleOnClick(['Professionnel'])} className={`w-2/3 self-end flex justify-center items-center relative my-8 h-[90px] cursor-pointer ${selectionner == 'Professionnel' ? 'border-orange-900 border-4' : ''}`}>
                <img src={personnel} alt="" className="absolute h-full w-full object-cover"/>
                <div className={`h-full w-full absolute bg-black ${selectionner == 'Professionnel' ? 'opacity-90' : 'opacity-50'}`}></div>
                <p className="relative text-white">Professionnel</p>
            </div>  
            <div onClick={() => handleOnClick(['AssoMutuelle'])} className={`w-2/3 self-start flex justify-center items-center relative my-8 h-[90px] cursor-pointer ${selectionner == 'AssoMutuelle' ? 'border-orange-900 border-4' : ''}`}>
                <img src={teamwork} alt="" className="absolute h-full w-full object-cover"/>
                <div className={`h-full w-full absolute bg-black ${selectionner == 'AssoMutuelle' ? 'opacity-90' : 'opacity-50'}`}></div>
                <p className="relative text-white">Associations / Mutuelles</p>
            </div>  
        </div>

        <div className="flex justify-between px-4">
            <button className= {`flex items-center`} onClick={() => h(-1)}>
                <div className= {`flex justify-center items-center text-4xl text-white bg-black mr-2 rounded-full border w-16 h-16 text-white-200 bg-slate-200' `} ><FaAngleLeft/></div>
                <span className={`text-2xl`} >RETOUR</span>
            </button>
            <button onClick={handleOnSubmit} className="flex items-center ">
                <span className="text-2xl text-orange-600">Je passe</span>
                <div className={`flex justify-center items-center text-4xl text-white bg-orange-600 ml-2 rounded-full border w-16 h-16`}><FaAngleRight/></div>
            </button>
        </div>
        <Outlet />
    </div> );
}
 
export default CoPackages;