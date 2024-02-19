import { FaAngleRight } from "react-icons/fa6";
import { useState } from "react";
import { Navigate, Outlet } from "react-router-dom";

import StepLoader from "../components/StepLoader";
import Header from "./component/Header";

import CI from "../img/CI.jpg"
import SN from "../img/SN.png"
import CP from "../img/CP.png"



const Form1 = () => {

    const [etat, setEtat] = useState('')
    const [sub, setSub] = useState(false)

    const handleClick = (value) => {
        setEtat(value) 
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        if (etat) {
            setSub(true)
        }
    }

    return ( <div className="w-1/3">
        
        {sub && <Navigate state={etat} to='/account-type' />}

        <Header />
        <div className="px-4 pt-6 bg-white">
            <StepLoader texte={'Sélectionner un pays'} niv={10} />
            <div className="mt-8">
                <button onClick={() => handleClick('CI')} className="flex items-center w-full border rounded-xl px-4 py-3 my-6 relative">
                    <img src={CI} alt="" className="w-12 h-12 rounded-full"/>
                    <p className="text-2xl font-normal ml-6">Côte d'Ivoire</p>
                    <div className="text-2xl absolute right-3"><FaAngleRight /></div>
                </button>
                <button onClick={() => handleClick('SN')} className="flex items-center w-full border rounded-xl px-4 py-3 my-6 relative">
                    <img src={SN} alt="" className="w-12 h-12 rounded-full"/>
                    <p className="text-2xl font-normal ml-6">Sénégal</p>
                    <div className="text-2xl absolute right-3"><FaAngleRight /></div>
                </button>
                <button onClick={() => handleClick('CV')} className="flex items-center w-full border rounded-xl px-4 py-3 my-6 relative">
                    <img src={CP} alt="" className="w-12 h-12 rounded-full"/>
                    <p className="text-2xl font-normal ml-6">Cap Vert</p>
                    <div className="text-2xl absolute right-3"><FaAngleRight /></div>
                </button>
            </div>
        </div>
        <div className="w-full flex justify-center bg-black">
            <button onClick={ (e) => handleSubmit(e) } className="w-11/12 my-6 bg-orange-600 text-white py-5">Je souhaite continuer</button>
        </div>

        <Outlet />
    </div> );
}

export default Form1;