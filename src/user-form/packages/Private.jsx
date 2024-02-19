import { Link, Outlet } from "react-router-dom";

const Private = () => {
    return ( <div>
        <div className="w-full py-4 bg-black text-white flex flex-col justify-center items-center">
            <p className="text-2xl ">Pack Private</p>
            <span>25 000 FCFA/mois</span>
        </div>
        <div className="px-4 w-full">
            <nav className="my-3 w-full flex">
                <div className="w-[50%] text-center">
                    <Link state={"bonjour"} to="include">Inclus dans le package</Link>
                </div>
                <div className="w-[50%] text-center">
                    <Link to="optionel">Produits optionnels</Link>
                </div>
            </nav>
            
            <Outlet />
        </div>
    </div> );
}
 
export default Private;