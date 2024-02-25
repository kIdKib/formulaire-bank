import { useEffect, useState } from "react";
import StepLoader from "../components/StepLoader";

import { useForm } from 'react-hook-form'

import CountriesList from "./Component/CountryList"
import FootBut from "../components/FootBut";
import { Navigate, useLocation } from "react-router-dom";

const CoForm6 = () => {
     
    const {register, handleSubmit,} = useForm()

    //GERE TOUTE LA PARTIE DE RECEPTION DES ANCIENNES DONNNÉE ET DES NOUVELLE DONNÉE
    let tabData =[]

    const location = useLocation()
    const loactionData = Object.entries(location.state)

    const [etat, setEtat] = useState()
    const [sub, setSub] = useState(false)

    const [fuseData, setfuseData] = useState()

    const onSubmit = (data) => {
        setEtat(data)
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

    useEffect(() => {
        if (fuseData !== undefined) setSub(true)
    }, [fuseData])
    //GERE TOUTE LA PARTIE DE RECEPTION DES ANCIENNES DONNNÉE ET DES NOUVELLE DONNÉE

    console.log(location.state);

    return ( <div className="w-1/3 px-4 border">

        {sub && <Navigate state={fuseData} to='/company/packages' />}

        <StepLoader texte={'Titulaire du compte'} niv={1} />
        <div>
            <h2 className="text-xl text-orange-400 my-2">Informations dirigeant</h2>
            <form onSubmit={handleSubmit(onSubmit)}>

                <div className="h-[75vh] overflow-scroll scroll">
                    <div className="flex flex-col">
                        <label htmlFor="Civilité" className="">Type de compte</label>
                        <select name="" id="Civilité" className="bg-white border px-2 py-2 rounded-md mb-3" {...register("Civilité",{required: true})}>
                            <option value="" disabled selected hidden>Choississez votre titre</option>
                            <option value="Particulier">Particulier</option>
                            <option value="Particulier">Particulier</option>
                            <option value="Particulier">Particulier</option>
                        </select>
                    </div>

                    <div className="flex flex-col">
                        <label htmlFor="Nom">Nom</label>
                        <input className="bg-white border px-2 py-2 rounded-md mb-3" type="text" id="Nom" {...register("Nom",{required: true})} placeholder="Entrer votre nom de famille" />
                    </div>

                    <div className="flex flex-col">
                        <label htmlFor="Nom_jeune_fille">Nom de jeune fille</label>
                        <input className="bg-white border px-2 py-2 rounded-md mb-3" type="text" id="Nom_jeune_fille" {...register("Nom_jeune_fille",{required: true})} placeholder="Entrer votre Nom de jeune fille" />
                    </div>

                    <div className="flex flex-col">
                        <label htmlFor="prenom">Prénom(s)</label>
                        <input className="bg-white border px-2 py-2 rounded-md mb-3" type="text" id="prenom" {...register("prenom",{required: true})} placeholder="Entrer votre prénoms" />
                    </div>

                    <div className="flex flex-col">
                        <label htmlFor="Date_naissance">Date de naissance</label>
                        <input className="bg-white border px-2 py-2 rounded-md mb-3" type="text" id="Date_naissance" {...register("Date_naissance",{required: true})} placeholder="dd/mm/yyyy" />
                    </div>

                    <div className="flex flex-col">
                        <label htmlFor="Lieu_naissance">Lieu de naissance</label>
                        <input className="bg-white border px-2 py-2 rounded-md mb-3" type="text" id="Lieu_naissance" {...register("Lieu_naissance",{required: true})} placeholder="dd/mm/yyyy" />
                    </div>
                    
                    <div className="flex flex-col">
                        <label htmlFor="Pays_naissance">Pays de naissance</label>
                        <input className="bg-white border px-2 py-2 rounded-md mb-3" type="text" id="Pays_naissance" {...register("Pays_naissance",{required: true})} placeholder="Indiquer votre pays de naissance" />
                    </div>
                    
                    <div className="flex flex-col">
                        <label htmlFor="pays_pays_naissance" className="">Pays de naissance</label>
                        <select name="" id="pays_pays_naissance" className="bg-white border px-2 py-2 rounded-md mb-3" {...register("pays_pays_naissance",{required: true})}>
                            <option value="" disabled selected hidden>Indiquer votre pays de naissance</option>
                            <option value="Particulier">Particulier</option>
                            <option value="Particulier">Particulier</option>
                            <option value="Particulier">Particulier</option>
                        </select>
                    </div>

                    <div className="flex flex-col">
                        <label htmlFor="Nationalité" className="">Nationalité</label>
                        <select name="" id="Nationalité" className="bg-white border px-2 py-2 rounded-md mb-3" {...register("Nationalité",{required: true})}>
                            <option value="" disabled selected hidden>Préciser votre Nationalité</option>
                            <option value="Particulier">Particulier</option>
                            <option value="Particulier">Particulier</option>
                            <option value="Particulier">Particulier</option>
                        </select>
                    </div>

                </div>

                <FootBut dataForm={etat}/>
            </form>
            
        </div>
    </div> );
}
 
export default CoForm6;