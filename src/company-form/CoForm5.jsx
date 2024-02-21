import { useEffect, useState } from "react";
import StepLoader from "../components/StepLoader";

import { useForm } from 'react-hook-form'

import CountriesList from "./Component/CountryList"
import FootBut from "../components/FootBut";
import { Navigate, useLocation } from "react-router-dom";

const CoForm5 = () => {

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
                let data = [location.state[i][0], location.state[i][1] ]
                tabData.push(data)
            }

            if (etatTab !== undefined && tabData !== undefined) setfuseData([...tabData,...etatTab])
        }

    }, [etat])

    useEffect(() => {
        if (fuseData !== undefined) setSub(true)
    }, [fuseData])
    //GERE TOUTE LA PARTIE DE RECEPTION DES ANCIENNES DONNNÉE ET DES NOUVELLE DONNÉE


    return ( <div className="w-1/3 px-4 border">

        {sub && <Navigate state={fuseData} to='/company/form6' />}

        <StepLoader texte={'Titulaire du compte'} niv={1} />
        <div>
            <h2 className="text-xl text-orange-400 my-2">Composition actionnariat</h2>
            <form onSubmit={handleSubmit(onSubmit)}>

                <div className="h-[75vh] overflow-scroll scroll">
                    <div className="flex flex-col">
                        <label htmlFor="Identite_rais_sociale">Identité / Raison sociale</label>
                        <input className="bg-white border px-2 py-2 rounded-md mb-3" type="text" id="Identite_rais_sociale" {...register("Identite_rais_sociale",{required: true})} placeholder="Entrer la Raison sociale" />
                    </div>   

                    <div className="flex flex-col">
                        <label htmlFor="capital_detenu">% capital détenu</label>
                        <input className="bg-white border px-2 py-2 rounded-md mb-3" type="text" id="capital_detenu" {...register("capital_detenu",{required: true})} placeholder="Entrer le pourcentage (en chiffre)" />
                    </div>   


                    <div className="flex flex-col">
                        <label htmlFor="Pays_Nationalité" className="">Pays / Nationalité</label>
                        <select name="" id="Pays_Nationalité" className="bg-white border px-2 py-2 rounded-md mb-3" {...register("Pays_Nationalité",{required: true})}>
                            <option value="Particulier">Particulier</option>
                            <option value="Particulier">Particulier</option>
                            <option value="Particulier">Particulier</option>
                        </select>
                    </div>
                    
                    <div className="flex flex-col">
                        <label htmlFor="Adresse">Adresse</label>
                        <input className="bg-white border px-2 py-2 rounded-md mb-3" type="text" id="Adresse" {...register("Adresse",{required: true})} placeholder="Indiquer l'adresse correspondante" />
                    </div>   

                    <div className="flex flex-col">
                        <label htmlFor="Bénéficiaire_ultime">Bénéficiaire ultime</label>
                        <input className="bg-white border px-2 py-2 rounded-md mb-3" type="text" id="Bénéficiaire_ultime" {...register("Bénéficiaire_ultime",{required: true})} placeholder="Entrer le nom du Bénéficiaire ultime" />
                    </div>   
                    
                </div>

                <FootBut disabled={true} dataForm={etat}/>
            </form>
            
        </div>
    </div> );
}
 
export default CoForm5;