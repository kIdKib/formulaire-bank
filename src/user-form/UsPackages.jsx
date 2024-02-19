import { useEffect, useState } from "react";
import StepLoader from "../components/StepLoader";

import { Navigate, useLocation } from "react-router-dom";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa6";

const UsPackages = () => {

    //GERE TOUTE LA PARTIE DE RECEPTION DES ANCIENNES DONNNÉE ET DES NOUVELLE DONNÉE
    const location = useLocation()
    let loactionData = Object.entries(location.state)   
    console.log(location.state)


    const [etat, setEtat] = useState()
    const [sub, setSub] = useState(false)

    const [fuseData, setfuseData] = useState()

    const handleOnClick = (data) => {
        setEtat(data)
    }

    useEffect(() => {
        if (etat !== undefined) {
            console.log(etat);
            
            setfuseData([...loactionData, etat])
        }
    }, [etat])


    console.log(loactionData);

    console.log(fuseData);
    
    const handleOnSubmit = () => {
        if (fuseData !== undefined) setSub(true)
    }
    //GERE TOUTE LA PARTIE DE RECEPTION DES ANCIENNES DONNNÉE ET DES NOUVELLE DONNÉE

    return ( <div className="w-1/3 px-4 border">

        {sub && <Navigate state={fuseData} to={`/user/packages/${etat}/include`} />}

        <StepLoader texte={'Packages disponible'} niv={1} />
        <p className="my-5">
            Sélectionnez un package pour découvrir les produits
            et services associés 
        </p>

        <div className="flex mt-5 w-full">
            <div className="flex flex-wrap mt-5 border w-max mx-auto mb-5">
                <div onClick={() => handleOnClick('Infinite')} className="w-[48%] mx-auto my-1 border bg-black text-white py-5 flex flex-col justify-center items-center">
                    <h2 className="text-2xl mb-3 text-center">Pack <br /> Infinte</h2>
                    <p className="font-bold">25 000 FCFA/mois</p>
                </div>
                <div onClick={() => handleOnClick('Private')} className="w-[48%] mx-auto my-1 border bg-black text-white py-5 flex flex-col justify-center items-center">
                    <h2 className="text-2xl mb-3 text-center">Pack <br /> Private</h2>
                    <p className="font-bold">10 000 FCFA/mois</p>
                </div>
                <div onClick={() => handleOnClick('Prestige')} className="w-[48%] mx-auto my-1 border bg-black text-white py-5 flex flex-col justify-center items-center">
                    <h2 className="text-2xl mb-3 text-center">Pack <br /> Prestige</h2>
                    <p className="font-bold">8000 FCFA/mois</p>
                </div>
                <div onClick={() => handleOnClick('Bonne Gamme')} className="w-[48%] mx-auto my-1 border bg-black text-white py-5 flex flex-col justify-center items-center">
                    <h2 className="text-2xl mb-3 text-center">Pack <br /> Bonne Gamme</h2>
                    <p className="font-bold">8000 FCFA/mois</p>
                </div>
                <div onClick={() => handleOnClick('Mass Market')} className="w-[48%] mx-auto my-1 border bg-black text-white py-5 flex flex-col justify-center items-center">
                    <h2 className="text-2xl mb-3 text-center">Pack <br /> Mass Market</h2>
                    <p className="font-bold">8000 FCFA/mois</p>
                </div>
                <div onClick={() => handleOnClick('Etudiant')} className="w-[48%] mx-auto my-1 border bg-black text-white py-5 flex flex-col justify-center items-center">
                    <h2 className="text-2xl mb-3 text-center">Pack <br /> Etudiant</h2>
                    <p className="font-bold">Gratuit</p>
                </div>
                <div onClick={() => handleOnClick('Mineur')} className="w-[48%] mx-1 my-1 border bg-black text-white py-5 flex flex-col justify-center items-center">
                    <h2 className="text-2xl mb-3 text-center">Pack <br /> Mineur</h2>
                </div>
            </div>
        </div>

        <div className="flex justify-between">
            <button className= {`flex items-center`} >
                <div className= {`flex justify-center items-center text-4xl text-white bg-black mr-2 rounded-full border w-16 h-16 text-white-200 bg-slate-200' `} ><FaAngleLeft/></div>
                <span className={`text-2xl text-gray-300 `} >RETOUR</span>
            </button>
            <button onClick={handleOnSubmit} className="flex items-center ">
                <span className="text-2xl text-orange-600">Je passe</span>
                <div className={`flex justify-center items-center text-4xl text-white bg-orange-600 ml-2 rounded-full border w-16 h-16`}><FaAngleRight/></div>
            </button>
        </div>
    </div> );
}
 
export default UsPackages;