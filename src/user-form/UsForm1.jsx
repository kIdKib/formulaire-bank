import { useEffect, useState } from "react";
import StepLoader from "../components/StepLoader";

import { useForm } from 'react-hook-form'

import CountriesList from "./Component/CountryList"
import FootBut from "../components/FootBut";
import { Navigate } from "react-router-dom";

const UsForm1 = () => {

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

        {sub && <Navigate state={etat} to='/user/form2' />}

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
                        <label htmlFor="civilite">Civilité</label>
                        <select name="" id="civilite" className="bg-white border px-2 py-2 rounded-md mb-3" {...register("civilite",{required: true})}>
                            <option value="" disabled selected hidden>Choississez votre titre</option>
                            <option value="Particulier">Particulier</option>
                            <option value="Particulier">Particulier</option>
                            <option value="Particulier">Particulier</option>
                        </select>
                    </div>
                    <div className="flex flex-col">
                        <label htmlFor="nom">Nom</label>
                        <input className="bg-white border px-2 py-2 rounded-md mb-3" type="text" id="nom" {...register("nom",{required: true})} placeholder="Entrer votre nom de famille" />
                    </div>                
                    <div className="flex flex-col">
                        <label htmlFor="nom-jeune-fille">Nom de jeune de fille</label>
                        <input className="bg-white border px-2 py-2 rounded-md mb-3" type="text" id="nom-jeune-fille" {...register("nom-jeune-fille",{required: true})} placeholder="Entrer votre nom de jeune fille" />
                    </div>
                    <div className="flex flex-col">
                        <label htmlFor="prenom">Prenom</label>
                        <input className="bg-white border px-2 py-2 rounded-md mb-3" type="text" id="prenom" {...register("prenom",{required: true})} placeholder="Entrer vos prénoms" />
                    </div>
                    <div className="flex flex-col">
                        <label htmlFor="birthday">Date de naissance</label>
                        <input className="bg-white border px-2 py-2 rounded-md mb-3" type="text" id="birthday" {...register("birthday",{required: true})} placeholder="dd/mm/yyyy" />
                    </div>
                    <div className="flex flex-col">
                        <label htmlFor="lieu-naissance">Lieu de naissance</label>
                        <input className="bg-white border px-2 py-2 rounded-md mb-3" type="text" id="lieu-naissance" {...register("lieu-naissance",{required: true})} placeholder="Lieu de naissance" />
                    </div>
                    <div className="flex flex-col">
                        <label htmlFor="pays-naissance">Pays de naissance</label>
                        <select name="countries" id="country" className="bg-white border px-2 py-2 rounded-md mb-3" {...register("country",{required: true})}>
                            <option value="" selected disabled hidden>Indiquer votre pays</option>
                        {CountriesList.map( (pays) => 
                            <option key={pays.code} value={pays.name}>{pays.name}</option>
                        )}
                        </select>     
        
                    </div>
                </div>

                <FootBut disabled={true} dataForm={etat}/>
            </form>
            
        </div>
    </div> );
}
 
export default UsForm1;