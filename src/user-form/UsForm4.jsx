import { useEffect, useState } from "react";
import StepLoader from "../components/StepLoader";

import { useForm } from 'react-hook-form'

import FootBut from "../components/FootBut";
import { Navigate, useLocation } from "react-router-dom";

const UsForm4 = () => {

    const {register, handleSubmit, formState, getValues, watch} = useForm()

    //GERE TOUTE LA PARTIE DE RECEPTION DES ANCIENNES DONNNÉE ET DES NOUVELLE DONNÉE
    const location = useLocation()
    const loactionData = Object.entries(location.state)
    console.log(loactionData)

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

        {sub && <Navigate state={fuseData} to='/user/packages' />}

        <StepLoader texte={'Titulaire du compte'} niv={1} />
        <div>
            <h2 className="text-xl text-orange-400 my-2">Revenus & Signaletique employeur</h2>
            <form onSubmit={handleSubmit(onSubmit)}>

                <div className="h-[75vh] overflow-scroll scroll">

                    <div className="flex flex-col">
                        <label htmlFor="fonction">Fonction</label>
                        <input className="bg-white border px-2 py-2 rounded-md mb-3" type="text" id="fonction" {...register("fonction",{required: true})} placeholder="Indiquer votre profession" />
                    </div>

                    <div className="flex flex-col">
                        <label htmlFor="statut_salar" className="">Statut salarial</label>
                        <select name="" id="statut_salar" className="bg-white border px-2 py-2 rounded-md mb-3" {...register("statut_salar",{required: true})}>
                            <option value="" disabled selected hidden>Choississez un statut</option>
                            <option value="Particulier">Particulier</option>
                            <option value="Particulier">Particulier</option>
                            <option value="Particulier">Particulier</option>
                        </select>
                    </div>

                    <div className="flex flex-col">
                        <label htmlFor="salaire">Salaire</label>
                        <input className="bg-white border px-2 py-2 rounded-md mb-3" type="text" id="salaire" {...register("salaire",{required: true})} placeholder="Entrer votre salaire (en chiffre)" />
                    </div>

                    <div className="flex flex-col">
                        <label htmlFor="loyer">Loyer</label>
                        <input className="bg-white border px-2 py-2 rounded-md mb-3" type="text" id="loyer" {...register("loyer",{required: true})} placeholder="Entrer le loyer mensuel (en chiffre)" />
                    </div>

                    <div className="flex flex-col">
                        <label htmlFor="pesion_retraite">Pension de retraite</label>
                        <input className="bg-white border px-2 py-2 rounded-md mb-3" type="text" id="pesion_retraite" {...register("pesion_retraite",{required: true})} placeholder="Entrer votre pesion retraite (en chiffre)" />
                    </div>

                    <div className="flex flex-col">
                        <label htmlFor="autres_revenu">Autres revenus</label>
                        <input className="bg-white border px-2 py-2 rounded-md mb-3" type="text" id="autres_revenu" {...register("autres_revenu",{required: true})} placeholder="Entrer vos autres reveuns (en chiffre)" />
                    </div>

                    <div className="flex flex-col">
                        <label htmlFor="employeur">Employeur</label>
                        <input className="bg-white border px-2 py-2 rounded-md mb-3" type="text" id="employeur" {...register("employeur",{required: true})} placeholder="Nom de l'employeur ou raison sociale" />
                    </div>

                    <div className="flex flex-col">
                        <label htmlFor="adr_employeur">Adresse postale employeur</label>
                        <input className="bg-white border px-2 py-2 rounded-md mb-3" type="text" id="adr_employeur" {...register("adr_employeur",{required: true})} placeholder="Adresse postale de l'employeur" />
                    </div>

                    <div className="flex flex-col">
                        <label htmlFor="adr_post_amployeur">Adresse géographique de l'employeur</label>
                        <input className="bg-white border px-2 py-2 rounded-md mb-3" type="text" id="adr_post_amployeur" {...register("adr_post_amployeur",{required: true})} placeholder="Adresse géographique de l'employeur" />
                    </div>

                    <div className="flex flex-col">
                        <label htmlFor="tel_employeur">Numéro de téléphone de l'employeur</label>
                        <input className="bg-white border px-2 py-2 rounded-md mb-3" type="text" id="tel_employeur" {...register("tel_employeur",{required: true})} placeholder="Numéro de téléphone de l'employeur" />
                    </div>

                    <div className="flex flex-col">
                        <label htmlFor="pays_resi_employeur">Pays de résidence employeur</label>
                        <input className="bg-white border px-2 py-2 rounded-md mb-3" type="text" id="pays_resi_employeur" {...register("pays_resi_employeur",{required: true})} placeholder="Pays de residence de l'employeur" />
                    </div>

                    <div className="flex flex-col">
                        <label htmlFor="secteur_employeur">Secteur d'activité employeur</label>
                        <input className="bg-white border px-2 py-2 rounded-md mb-3" type="text" id="secteur_employeur" {...register("secteur_employeur",{required: true})} placeholder="Secteur d'activité de l'employeur" />
                    </div>

                </div>

                <FootBut/>
            </form>
            
        </div>
    </div> );
}
 
export default UsForm4;