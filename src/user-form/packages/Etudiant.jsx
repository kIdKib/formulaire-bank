import { useEffect, useState } from "react";
import { Link, Navigate, Outlet, useLocation } from "react-router-dom";

const Etudiant= () => {

    //GERE TOUTE LA PARTIE DE RECEPTION DES ANCIENNES DONNNÉE ET DES NOUVELLE DONNÉE
    const location = useLocation()
    let loactionData = location.state
    console.log(location)

    const [etat, setEtat] = useState()

    const [fuseData, setfuseData] = useState()


    console.log(loactionData);


    //GERE TOUTE LA PARTIE DE RECEPTION DES ANCIENNES DONNNÉE ET DES NOUVELLE DONNÉE

    
    return ( <div>

        <div className="w-full py-4 bg-black text-white flex flex-col justify-center items-center">
            <p className="text-2xl ">Pack Etudiant</p>
            <span>25 000 FCFA/mois</span>
        </div>
        <div className="px-4 w-full">
            <nav className="my-3 w-full flex">
                <div className="w-[50%] text-center">
                    <Link state={loactionData}  to="include">Inclus dans le package</Link>
                </div>
                <div className="w-[50%] text-center">
                    <Link state={loactionData} to="optionel">Produits optionnels</Link>
                </div>
            </nav>

            <Outlet/>
        </div>
    </div> );
}
 
export default Etudiant