import { useState } from "react";
import { Navigate, useLocation } from "react-router-dom";
import Header from "./component/Header";


const AccountType = () => {

    const location = useLocation()
    let newDatab = [location.state]

    const [etat, setEtat] = useState('')
    const [sub, setSub] = useState(false)

    const handleClick= (val) => {
        setEtat(val)
    }

    newDatab[1] = etat

    const handleSubmit = (e) => {
        e.preventDefault()
        if (etat) {
            setSub(true)
        }
    }

    console.log(newDaab); // UNE ERREUR EXPRES SUR "NEWDATAB" CAR QUAND LA PAGE LOAD LE NAVIAGTE ELLE RETOURNE LA MÊME PAGE DONC SA CREE UNE SORTE DE BUG QIU RETOURNE LA PAGE A L'INFINI 
                            // A REPARER QUAND J'AURAIS LA PAGE QUI VA SUIVRE
    return ( <div>

        {sub && <Navigate state={newDatab} to='/account-type' />}

        <Header/>
        <div className="px-4 pt-6 bg-white flex flex-col">
            <button onClick={() => handleClick('particulier')} className="mb-8">
                <p>Compte</p>
                <p>Particulier</p>
            </button>
            <button onClick={() => handleClick('entreprise')}>
                <p>Compte</p>
                <p>Entreprise</p>
            </button>
        </div>
        <button onClick={ (e) => handleSubmit(e) }>Je confirme mon choix</button>
    </div> );
}
 
export default AccountType;