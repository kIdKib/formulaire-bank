import { useEffect, useState } from "react";
import StepLoader from "../components/StepLoader";

import { useForm } from 'react-hook-form'

import CountriesList from "./Component/CountryList"
import FootBut from "../components/FootBut";
import { Navigate, useLocation } from "react-router-dom";

const UsForm3 = () => {

    const {register, handleSubmit, formState, getValues, watch} = useForm()

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

    return ( <div className="w-1/3 px-4 border">

        {sub && <Navigate state={fuseData} to='/user/form4' />}

        <StepLoader texte={'Titulaire du compte'} niv={60} />
        <div>
            <h2 className="text-xl text-orange-400 my-2">Contacts & Filiation</h2>
            <form onSubmit={handleSubmit(onSubmit)}>

                <div className="h-[75vh] overflow-scroll scroll">

                    <div className="flex flex-col">
                        <label htmlFor="e-mail">Adresse électronique</label>
                        <input className="bg-white border px-2 py-2 rounded-md mb-3" type="email" id="e-mail" {...register("e-mail",{required: true})} placeholder="Entrer votre adresse email" />
                    </div>    

                    <div className="flex flex-col">
                        <label htmlFor="tel_bureau">Téléphone Bureau</label>
                        <input className="bg-white border px-2 py-2 rounded-md mb-3" type="tel"  id="tel_bureau" {...register("tel_bureau",{required: true})} placeholder="Entrer le numéro de téléphone" />
                    </div>

                    <div className="flex flex-col">
                        <label htmlFor="tel_domicile">Téléphone Domicile</label>
                        <input className="bg-white border px-2 py-2 rounded-md mb-3" type="text" id="tel_domicile" {...register("tel_domicile",{required: true})} placeholder="Entrer le numéro de téléphone" />
                    </div>

                    <div className="flex flex-col">
                        <label htmlFor="tel_mobile">Téléphone Mobile</label>
                        <input className="bg-white border px-2 py-2 rounded-md mb-3" type="text" id="tel_mobile" {...register("tel_mobile",{required: true})} placeholder="Entrer le numéro de téléphone" />
                    </div>


                    <div className="flex flex-col">
                        <label htmlFor="situa_matrimoniale" className="">Situation matrimoniale</label>
                        <select name="" id="situa_matrimoniale" className="bg-white border px-2 py-2 rounded-md mb-3" {...register("situa_matrimoniale",{required: true})}>
                            <option value="" disabled selected hidden>Choississez un statut</option>
                            <option value="Célibataire">Célibataire</option>
                            <option value="Marié">Marié</option>
                            <option value="Concubinage">Concubinage</option>
                        </select>
                    </div>

                    <div className="flex flex-col">
                        <label htmlFor="conjoint">Conjoint</label>
                        <input className="bg-white border px-2 py-2 rounded-md mb-1" type="text" id="conjoint_nom" {...register("conjoint_nom",{required: true})} placeholder="Nom du conjoint" />
                        <input className="bg-white border px-2 py-2 rounded-md mb-3" type="text" id="conjoint_prenom" {...register("conjoint_prenom",{required: true})} placeholder="Prénom(s) du conjoint" />
                    </div>

                    <div className="flex flex-col">
                        <label htmlFor="pere">Pére</label>
                        <input className="bg-white border px-2 py-2 rounded-md mb-1" type="text" id="pere_nom" {...register("pere_nom",{required: true})} placeholder="Nom du père" />
                        <input className="bg-white border px-2 py-2 rounded-md mb-3" type="text" id="pere_prenom" {...register("pere_prenom",{required: true})} placeholder="Prénom(s) du père" />
                    </div>

                    <div className="flex flex-col">
                        <label htmlFor="mere">Mère</label>
                        <input className="bg-white border px-2 py-2 rounded-md mb-1" type="text" id="mere_nom" {...register("mere_nom",{required: true})} placeholder="Nom du mére" />
                        <input className="bg-white border px-2 py-2 rounded-md mb-3" type="text" id="mere_prenom" {...register("mere_prenom",{required: true})} placeholder="Prénom(s) du mére" />
                    </div>

                </div>

                <FootBut/>
            </form>
            
        </div>
    </div> );
}
 
export default UsForm3;