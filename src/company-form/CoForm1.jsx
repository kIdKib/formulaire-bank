import { useEffect, useState } from "react";
import StepLoader from "../components/StepLoader";

import { useForm } from 'react-hook-form'

import CountriesList from "./Component/CountryList"
import FootBut from "../components/FootBut";
import { Navigate } from "react-router-dom";

const CoForm1 = () => {

    const {register, handleSubmit, formState, getValues, watch} = useForm()

    const [etat, setEtat] = useState()
    const [sub, setSub] = useState(false)

    const onSubmit = (data) => {
        setEtat(data)
    }

    useEffect(() => {
        if (etat !== undefined) {
            setSub(true)
        }
        
    }, [etat])

    return ( <div className="w-1/3 px-4 border">

        {sub && <Navigate state={etat} to='/company/form2' />}

        <StepLoader texte={'Titulaire du compte'} niv={1} />
        <div>
            <h2 className="text-xl text-orange-400 my-2">Informations personnelles</h2>
            <form onSubmit={handleSubmit(onSubmit)}>

                <div className="h-[75vh] overflow-scroll scroll">
                <div className="flex flex-col">
                        <label htmlFor="type-de-compte" className="">Type de compte</label>
                        <select name="" id="Type-de-compte" className="bg-white border px-2 py-2 rounded-md mb-3" {...register("type_compte",{required: true})}>
                            <option value="Particulier">Particulier</option>
                            <option value="Particulier">Particulier</option>
                            <option value="Particulier">Particulier</option>
                        </select>
                    </div>

                    <div className="flex flex-col">
                        <label htmlFor="Raison sociale">Raison sociale</label>
                        <input className="bg-white border px-2 py-2 rounded-md mb-3" type="text" id="Raison_sociale" {...register("Raison_sociale",{required: true})} placeholder="Entrer Raison sociale" />
                    </div>

                    <div className="flex flex-col">
                        <label htmlFor="Sigle">Sigle</label>
                        <input className="bg-white border px-2 py-2 rounded-md mb-3" type="text" id="Sigle" {...register("Sigle",{required: true})} placeholder="Entrer Sigle" />
                    </div>

                    <div className="flex flex-col">
                        <label htmlFor="Forme_juridique" className="">Forme juridique</label>
                        <select name="" id="Forme_juridique" className="bg-white border px-2 py-2 rounded-md mb-3" {...register("Forme_juridique",{required: true})}>
                            <option value="Particulier">Particulier</option>
                            <option value="Particulier">Particulier</option>
                            <option value="Particulier">Particulier</option>
                        </select>
                    </div>

                    <div className="flex flex-col">
                        <label htmlFor="registre_commerce">N° registre de commerce</label>
                        <input className="bg-white border px-2 py-2 rounded-md mb-3" type="text" id="registre_commerce" {...register("registre_commerce",{required: true})} placeholder="Entrer N° registre de commerce" />
                    </div>

                    <div className="flex flex-col">
                        <label htmlFor="déclaration_BIC">Accord pour déclaration au BIC</label>
                        <select name="" id="déclaration_BIC" className="bg-white border px-2 py-2 rounded-md mb-3" {...register("déclaration_BIC",{required: true})}>
                            <option value="" disabled selected hidden>Choississez</option>
                            <option value="Particulier">Particulier</option>
                            <option value="Particulier">Particulier</option>
                            <option value="Particulier">Particulier</option>
                        </select>
                    </div>

                    <div className="flex flex-col">
                        <label htmlFor="Date_création">Date de création</label>
                        <input className="bg-white border px-2 py-2 rounded-md mb-3" type="text" id="Date_création" {...register("Date_création",{required: true})} placeholder="dd/mm/yyyy" />
                    </div>

                    <div className="flex flex-col">
                        <label htmlFor="Lieu_création">Lieu de création</label>
                        <input className="bg-white border px-2 py-2 rounded-md mb-3" type="text" id="Lieu_création" {...register("Lieu_création",{required: true})} placeholder="Indiquer le lieu de création de la société" />
                    </div>

                    <div className="flex flex-col">
                        <label htmlFor="compte_contribuable">N° compte contribuable</label>
                        <input className="bg-white border px-2 py-2 rounded-md mb-3" type="text" id="compte_contribuable" {...register("compte_contribuable",{required: true})} placeholder="Entrer votre N° compte contribuable" />
                    </div>

                    <div className="flex flex-col">
                        <label htmlFor="Secteur_d’activités">Secteur d’activités</label>
                        <input className="bg-white border px-2 py-2 rounded-md mb-3" type="text" id="Secteur_d’activités" {...register("Secteur_d’activités",{required: true})} placeholder="Indiquer votre Secteur d’activités" />
                    </div>

                    <div className="flex flex-col">
                        <label htmlFor="activités">activités</label>
                        <input className="bg-white border px-2 py-2 rounded-md mb-3" type="text" id="activités" {...register("activités",{required: true})} placeholder="Indiquer votre activités" />
                    </div>

                    <div className="flex flex-col">
                        <label htmlFor="Numéro_téléphone">Numéro de téléphone</label>
                        <input className="bg-white border px-2 py-2 rounded-md mb-3" type="text" id="Numéro_téléphone" {...register("Numéro_téléphone",{required: true})} placeholder="Indiquer votre Numéro de téléphone" />
                    </div>

                    <div className="flex flex-col">
                        <label htmlFor="Accord_transmission_données_IRS">Accord de transmission des données personnelles à IRS</label>
                        <select name="" id="Accord_transmission_données_IRS" className="bg-white border px-2 py-2 rounded-md mb-3" {...register("Accord_transmission_données_IRS",{required: true})}>
                            <option value="" disabled selected hidden>Choississez</option>
                            <option value="Particulier">Particulier</option>
                            <option value="Particulier">Particulier</option>
                            <option value="Particulier">Particulier</option>
                        </select>
                    </div>
                
                    <div className="flex flex-col">
                        <label htmlFor="Trois_four_majeurs">Trois fournisseurs majeurs</label>
                        <input className="bg-white border px-2 py-2 rounded-md mb-3" type="text" id="Trois_four_majeurs" {...register("Trois_four_majeurs",{required: true})} placeholder="Trois fournisseurs majeurs" />
                    </div>
                </div>

                <FootBut disabled={true} dataForm={etat}/>
            </form>
            
        </div>
    </div> );
}
 
export default CoForm1;