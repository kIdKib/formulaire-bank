import { useEffect, useState } from "react";
import StepLoader from "../components/StepLoader";

import { useForm } from 'react-hook-form'

import CountriesList from "./Component/CountryList"
import FootBut from "../components/FootBut";
import { Navigate, useLocation } from "react-router-dom";

const CoForm4 = () => {

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


    return ( <div className="w-1/3 px-4 border">

        {sub && <Navigate state={fuseData} to='/company/form5' />}

        <StepLoader texte={'Informations financières de la société'} niv={50} />
        <div>
            <h2 className="text-xl text-orange-400 my-2">Informations personnelles</h2>
            <form onSubmit={handleSubmit(onSubmit)}>

                <div className="h-[75vh] overflow-scroll scroll">
                    <div className="flex flex-col">
                        <label htmlFor="Capital">Capital</label>
                        <input className="bg-white border px-2 py-2 rounded-md mb-3" type="text" id="Capital" {...register("Capital",{required: true})} placeholder="Entrer le montant du capital (en chiffres)" />
                    </div>

                    <div className="flex flex-col">
                        <label htmlFor="Origine_capital">Origine du patrimoine</label>
                        <input className="bg-white border px-2 py-2 rounded-md mb-3" type="text" id="Origine_capital" {...register("Origine_capital",{required: true})} placeholder="Indiquer l'origine du capital" />
                    </div> 

                    <div className="flex flex-col">
                        <label htmlFor="Société_bourse" className="">Société dotée en bourse</label>
                        <select name="" id="Société_bourse" className="bg-white border px-2 py-2 rounded-md mb-3" {...register("Société_bourse",{required: true})}>
                            <option value="" disabled selected hidden>Choississez</option>
                            <option value="Particulier">Particulier</option>
                            <option value="Particulier">Particulier</option>
                            <option value="Particulier">Particulier</option>
                        </select>
                    </div>

                    <div className="flex flex-col">
                        <label htmlFor="Chiffres_affaires">Chiffres d’affaires</label>
                        <input className="bg-white border px-2 py-2 rounded-md mb-3" type="text" id="Chiffres_affaires" {...register("Chiffres_affaires",{required: true})} placeholder="Indiquer le chiffre d'affaire de la société" />
                    </div>

                    <div className="flex flex-col">
                        <label htmlFor="Type_consultation">Type de consultation</label>
                        <select name="" id="Type_consultation" className="bg-white border px-2 py-2 rounded-md mb-3" {...register("Type_consultation",{required: true})}>
                            <option value="" disabled selected hidden>Choississez</option>
                            <option value="Particulier">Particulier</option>
                            <option value="Particulier">Particulier</option>
                            <option value="Particulier">Particulier</option>
                        </select>
                    </div>
               
                    <div className="flex flex-col">
                        <label htmlFor="Date_dernière_requisition">Date dernière requisition</label>
                        <input className="bg-white border px-2 py-2 rounded-md mb-3" type="date" id="Date_dernière_requisition" {...register("Date_dernière_requisition",{required: true})} placeholder="dd/mm/yyyy" />
                    </div>

                    <div className="flex flex-col">
                        <label htmlFor="Requisition">Requisition</label>
                        <select name="" id="Requisition" className="bg-white border px-2 py-2 rounded-md mb-3" {...register("Requisition",{required: true})}>
                            <option value="" disabled selected hidden>Choississez</option>
                            <option value="Particulier">Particulier</option>
                            <option value="Particulier">Particulier</option>
                            <option value="Particulier">Particulier</option>
                        </select>
                    </div>

                    <div className="flex flex-col">
                        <label htmlFor="Type_transactions">Type de transactions envisagées sur le compte</label>
                        <select name="" id="Type_transactions" className="bg-white border px-2 py-2 rounded-md mb-3" {...register("Type_transactions",{required: true})}>
                            <option value="" disabled selected hidden>Choississez</option>
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
 
export default CoForm4;