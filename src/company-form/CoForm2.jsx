import { useEffect, useState } from "react";
import StepLoader from "../components/StepLoader";

import { useForm } from 'react-hook-form'

import CountriesList from "./Component/CountryList"
import FootBut from "../components/FootBut";
import { Navigate, useLocation } from "react-router-dom";

const CoForm2 = () => {

    const {register, handleSubmit} = useForm()

    //GERE TOUTE LA PARTIE DE RECEPTION DES ANCIENNES DONNNÉE ET DES NOUVELLE DONNÉE
    let tabData =[]

    const location = useLocation()
    const loactionData = Object.entries(location.state)
    console.log(location.state);

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


    return ( <div className="w-1/3 px-4 border">

        {sub && <Navigate state={fuseData} to='/company/form3' />}

        <StepLoader texte={'Groupe ou société d’appartenance'} niv={1} />
        <div>
            <h2 className="text-xl text-orange-400 my-2">Informations personnelles</h2>
            <form onSubmit={handleSubmit(onSubmit)}>

                <div className="h-[75vh] overflow-scroll scroll">
                    <div className="flex flex-col">
                        <label htmlFor="Société_tête_gr" className="">Société de tête ou groupe d’appartenance</label>
                        <select name="" id="Société_tête_gr" className="bg-white border px-2 py-2 rounded-md mb-3" {...register("type_compte",{required: true})}>
                            <option value="" disabled selected hidden>Choississez votre groupe d’appartenance</option>
                            <option value="Particulier">Particulier</option>
                            <option value="Particulier">Particulier</option>
                            <option value="Particulier">Particulier</option>
                        </select>
                    </div>

                    <div className="flex flex-col">
                        <label htmlFor="Numéro_groupe">Numéro du groupe</label>
                        <input className="bg-white border px-2 py-2 rounded-md mb-3" type="text" id="Numéro_groupe" {...register("Numéro_groupe",{required: true})} placeholder="Entrer le Numéro du groupe" />
                    </div> 

                    <div className="flex flex-col">
                        <label htmlFor="Code_BCT">Code BCT du groupe</label>
                        <input className="bg-white border px-2 py-2 rounded-md mb-3" type="text" id="Code_BCT" {...register("Code_BCT",{required: true})} placeholder="Entrer le Code BCT du groupe" />
                    </div>   

                    <div className="flex flex-col">
                        <label htmlFor="Siège_social">Siège social du groupe</label>
                        <input className="bg-white border px-2 py-2 rounded-md mb-3" type="text" id="Siège_social" {...register("Siège_social",{required: true})} placeholder="Entrer le Siège social du groupe" />
                    </div>

                    <div className="flex flex-col">
                        <label htmlFor="birthday_group">Date de création du groupe</label>
                        <input className="bg-white border px-2 py-2 rounded-md mb-3" type="text" id="birthday_group" {...register("birthday_group",{required: true})} placeholder="dd/mm/yyyy" />
                    </div>

                    <div className="flex flex-col">
                        <label htmlFor="Adresse_postale">Adresse postale</label>
                        <input className="bg-white border px-2 py-2 rounded-md mb-3" type="text" id="Adresse_postale" {...register("Adresse_postale",{required: true})} placeholder="Entrer votre Adresse postale" />
                    </div>

                    <div className="flex flex-col">
                        <label htmlFor="Localisation_géographique">Localisation géographique</label>
                        <input className="bg-white border px-2 py-2 rounded-md mb-3" type="text" id="Localisation_géographique" {...register("Localisation_géographique",{required: true})} placeholder="Entrer votre Localisation géographique" />
                    </div>

                    <div className="flex flex-col">
                        <label htmlFor="Adresse_électronique">Adresse électronique</label>
                        <input className="bg-white border px-2 py-2 rounded-md mb-3" type="text" id="Adresse_électronique" {...register("Adresse_électronique",{required: true})} placeholder="Entrer votre Adresse électronique" />
                    </div>

                    <div className="flex flex-col">
                        <label htmlFor="Numéro_téléphone">Numéro de téléphone</label>
                        <input className="bg-white border px-2 py-2 rounded-md mb-3" type="text" id="Numéro_téléphone" {...register("Numéro_téléphone",{required: true})} placeholder="Entrer votre Numéro de téléphone" />
                    </div>

                    <div className="flex flex-col">
                        <label htmlFor="Nom_gérant">Nom du gérant</label>
                        <input className="bg-white border px-2 py-2 rounded-md mb-3" type="text" id="Nom_gérant" {...register("Nom_gérant",{required: true})} placeholder="Entrer votre Nom du gérant" />
                    </div>

                </div>

                <FootBut dataForm={etat}/>
            </form>
            
        </div>
    </div> );
}
 
export default CoForm2;