import { useEffect, useState } from "react";
import StepLoader from "../components/StepLoader";

import { useForm } from 'react-hook-form'

import CountriesList from "./Component/CountryList"
import FootBut from "../components/FootBut";
import { Navigate, useLocation } from "react-router-dom";

const CoForm3 = () => {

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

        {sub && <Navigate state={fuseData} to='/company/form4' />}
l
        <StepLoader texte={'Personne désignée'} niv={1} />
        <button onClick={() => history(-1)}> Go back</button>

        <div>
            <h2 className="text-xl text-orange-400 my-2">Informations personnelles</h2>
            <form onSubmit={handleSubmit(onSubmit)}>

                <div className="h-[75vh] overflow-scroll scroll">
                    
                    <div className="flex flex-col">
                        <label htmlFor="nom_perso_desgn">Nom</label>
                        <input className="bg-white border px-2 py-2 rounded-md mb-3" type="text" id="nom_perso_desgn" {...register("nom_perso_desgn",{required: true})} placeholder="Entrer votre nom de la personne désgné" />
                    </div>    

                    <div className="flex flex-col">
                        <label htmlFor="prenom">Prenom(s)</label>
                        <input className="bg-white border px-2 py-2 rounded-md mb-3" type="text" id="prenom" {...register("prenom",{required: true})} placeholder="Entrer les prénoms" />
                    </div>
                    
                    <div className="flex flex-col">
                        <label htmlFor="Numéro_téléphone">Numéro de téléphone</label>
                        <input className="bg-white border px-2 py-2 rounded-md mb-3" type="text" id="Numéro_téléphone" {...register("Numéro_téléphone",{required: true})} placeholder="Entrer le Numéro de téléphone" />
                    </div>

                    <div className="flex flex-col">
                        <label htmlFor="Fonction_perso_desgn">Fonction</label>
                        <input className="bg-white border px-2 py-2 rounded-md mb-3" type="text" id="Fonction_perso_desgn" {...register("Fonction_perso_desgn",{required: true})} placeholder="Fonction de la personne désignée" />
                    </div>
                    
                </div>

                <FootBut dataForm={etat}/>
            </form>
            
        </div>
    </div> );
}
 
export default CoForm3;