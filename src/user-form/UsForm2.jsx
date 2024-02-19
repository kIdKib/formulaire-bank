import { useEffect, useState } from "react";
import StepLoader from "../components/StepLoader";

import { useForm } from 'react-hook-form'

import CountriesList from "./Component/CountryList"
import FootBut from "../components/FootBut";
import { Navigate, useLocation } from "react-router-dom";

const UsForm2 = () => {

    const {register, handleSubmit, formState, getValues, watch} = useForm()

    //GERE TOUTE LA PARTIE DE RECEPTION DES ANCIENNES DONNNÉE ET DES NOUVELLE DONNÉE
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
            
            if (etatTab !== undefined) setfuseData([...loactionData,...etatTab])
        }
    }, [etat])

    useEffect(() => {
        if (fuseData !== undefined) setSub(true)
    }, [fuseData])
    //GERE TOUTE LA PARTIE DE RECEPTION DES ANCIENNES DONNNÉE ET DES NOUVELLE DONNÉE


    return ( <div className="w-1/3 px-4 border">

        {sub && <Navigate state={fuseData} to='/user/form3' />}

        <StepLoader texte={'Titulaire du compte'} niv={1} />
        <div>
            <h2 className="text-xl text-orange-400 my-2">Identification & Adresses</h2>
            <form onSubmit={handleSubmit(onSubmit)}>

                <div className="h-[75vh] overflow-scroll scroll">

                    <div className="flex flex-col">
                        <label htmlFor="pays-naissance">Nationalité</label>
                        <select name="nationnalite" id="nationnalite" className="bg-white border px-2 py-2 rounded-md mb-3" {...register("nationnalite",{required: true})}>
                            <option value="" selected disabled hidden>Préciser votre nationnalité</option>
                            {CountriesList.map( (pays) => 
                                <option key={pays.code} value={pays.name}>{pays.name}</option>
                            )}
                        </select>
                    </div>

                    <div className="flex flex-col">
                        <label htmlFor="piece-id" className="">Pièce d'Identification</label>
                        <select name="" id="piece-id" className="bg-white border px-2 py-2 rounded-md mb-3" {...register("piece-id",{required: true})}>
                            <option value="" disabled selected hidden>Choississez votre pièce</option>
                            <option value="Particulier">Particulier</option>
                            <option value="Particulier">Particulier</option>
                            <option value="Particulier">Particulier</option>
                        </select>
                    </div>

                    <div className="flex flex-col">
                        <label htmlFor="num_piece">Numéro de la pièce</label>
                        <input className="bg-white border px-2 py-2 rounded-md mb-3" type="text" id="num_piece" {...register("num_piece",{required: true})} placeholder="Entrer le numéro de votre pièce" />
                    </div>    

                    <div className="flex flex-col">
                        <label htmlFor="date_etablissement">Date d'établissement</label>
                        <input className="bg-white border px-2 py-2 rounded-md mb-3" type="text" id="date_etablissement" {...register("date_etablissement",{required: true})} placeholder="dd/mm/yyyy" />
                    </div>

                    <div className="flex flex-col">
                        <label htmlFor="leu_etablissement">Lieu d'établissement</label>
                        <input className="bg-white border px-2 py-2 rounded-md mb-3" type="text" id="leu_etablissement" {...register("leu_etablissement",{required: true})} placeholder="Entrer lieu d'établissement " />
                    </div>

                    <div className="flex flex-col">
                        <label htmlFor="validite">Validité</label>
                        <input className="bg-white border px-2 py-2 rounded-md mb-3" type="text" id="validite" {...register("validite",{required: true})} placeholder="dd/mm/yyyy" />
                    </div>

                    <div className="flex flex-col">
                        <label htmlFor="adresse_postale">Adresse postale</label>
                        <input className="bg-white border px-2 py-2 rounded-md mb-3" type="text" id="adresse_postale" {...register("adresse_postale",{required: true})} placeholder="Entrer votre adresse postale" />
                    </div>

                    <div className="flex flex-col">
                        <label htmlFor="localisation_géo">Localisation géographique</label>
                        <input className="bg-white border px-2 py-2 rounded-md mb-3" type="text" id="localisation_géo" {...register("localisation_géo",{required: true})} placeholder="Indiqueer votre adresse géographique" />
                    </div>

                </div>

                <FootBut dataForm={etat}/>
            </form>
            
        </div>
    </div> );
}
 
export default UsForm2;