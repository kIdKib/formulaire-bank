import { useState } from "react";
import { Link, Outlet, useLocation } from "react-router-dom";

const Mineur = () => {

    const [line, setLine] = useState('include')

    let handleOnClick = () => {
        const lien = window.location.href.split('/')
        setLine(lien.slice(-1))
    }

    //GERE TOUTE LA PARTIE DE RECEPTION DES ANCIENNES DONNNÉE ET DES NOUVELLE DONNÉE
    const location = useLocation()
    let loactionData = location.state
    //GERE TOUTE LA PARTIE DE RECEPTION DES ANCIENNES DONNNÉE ET DES NOUVELLE DONNÉE

    return ( <div>
        <div className="w-full py-4 bg-black text-white flex flex-col justify-center items-center">
            <p className="text-2xl ">Pack Mineur</p>
            <span>Gratuit</span>
        </div>
        <div className="px-4 w-full">
            <nav className="my-3 w-full flex">
                <div onClick={handleOnClick} className="w-[50%] text-center">
                    <Link state={loactionData} to="include">Inclus dans le package</Link>
                    {line == 'include' ? <div style={{border:"solid 3px orange", width:"100%"}}></div> : ""}
                </div>
                <div onClick={handleOnClick} className="w-[50%] text-center">
                    <Link state={loactionData} to="optionel">Produits optionnels</Link>
                    {line == 'optionel' ? <div style={{border:"solid 3px orange", width:"100%"}}></div> : ""}

                </div>
            </nav>

            <Outlet />
        </div>
    </div> );
}
 
export default Mineur;