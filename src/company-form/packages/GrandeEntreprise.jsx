const GrandeEntreprise = () => {

    //GERE TOUTE LA PARTIE DE RECEPTION DES ANCIENNES DONNNÉE ET DES NOUVELLE DONNÉE
    let tabData =[]

    const location = useLocation()
    const loactionData = Object.entries(location.state)
    console.log(location.state);

    const [etat, setEtat] = useState()
    const [sub, setSub] = useState(false)

    const [fuseData, setfuseData] = useState()

    const onSubmit = () => {
        setEtat(true)
    }

    useEffect(() => {
        if (etat !== undefined) {
            
            for (let i = 0; i < location.state.length; i++) {
                
                if (i > 1) {
                    let data = [location.state[i][0], location.state[i][1] ] 
                    tabData.push(data)
                } else {
                    let data = [location.state[i][0]] 
                    tabData.push(data)
                }
            }

            if (tabData !== undefined) setfuseData([...tabData])
        }

    }, [etat])

    useEffect(() => {
        if (fuseData !== undefined) setSub(true)
    }, [fuseData])
    //GERE TOUTE LA PARTIE DE RECEPTION DES ANCIENNES DONNNÉE ET DES NOUVELLE DONNÉE



    return ( <div className="w-1/3 border ">
        {sub && <Navigate state={fuseData} to='/company/convention' />}

        <div className="w-full py-4 bg-black text-white flex flex-col justify-center items-center">
            <p className="text-2xl">Package grandes entreprises</p>
        </div>
        <div className="h-[82vh] overflow-scroll scroll">
            <div className="px-4 w-full">
                <div className="mb-2">
                    <h3 className="font-bold mb-2 mt-5">
                        Inclus dans le package
                    </h3>
                    <div style={{border:"3px solid red",width:"10%"}}></div>
                </div>
                <div className="flex justify-center mt-5">
                    <div className="flex w-[98%] mx-auto">
                        <div className="w-1/2">
                            <h3 className="text-orange-900 text-xl">Solutions digitales</h3>
                            <ul className="list-disc ml-8 mt-1">
                                <li>Banque en ligne</li>
                            </ul>
                        </div>
                        <div className="w-1/2">
                            <h3 className="text-orange-900 text-xl">Solutions de compte</h3>
                            <ul className="list-disc ml-8 mt-1">
                                <li>Compte courant</li>
                                <li>2 Chéquier barré (50 feuillets)</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            <div className="px-4 w-full">
                <div className="mb-2">
                    <h3 className="font-bold mb-2 mt-5">
                        Produits optionnels
                    </h3>
                    <div style={{border:"3px solid red",width:"10%"}}></div>
                </div>
                <div className="mt-5">
                    <div className="mb-5">
                        <h3 className="text-orange-900 text-xl">Solutions digitales</h3>
                        <ul className="list-disc ml-8 mt-1">
                            <li>Sms Banking</li>
                        </ul>
                    </div>
                    <div className="mb-5">
                        <h3 className="text-orange-900 text-xl">Solutions monétiques</h3>
                        <ul className="list-disc ml-8 mt-1">
                            <li>Carte Business (19 000 F)</li>
                            <li>Market place</li>
                        </ul>
                    </div>
                    <div className="mb-5">
                        <h3 className="text-orange-900 text-xl">Solutions de cash management</h3>
                        <ul className="list-disc ml-8 mt-1">
                            <li>Plateforme de paiement</li>
                            <li>Terminaux de paiement électronique (TPE)</li>
                        </ul>
                    </div>
                    <div className="mb-5">
                        <h3 className="text-orange-900 text-xl">Solutions d’épargne et d’investissement</h3>
                        <ul className="list-disc ml-8 mt-1">
                            <li>Produit d’investissement</li>
                        </ul>
                    </div>
                    <div className="mb-5">
                        <h3 className="text-orange-900 text-xl">Solutions d’assurance</h3>
                        <ul className="list-disc ml-8 mt-1">
                            <li>Assurance IARD</li>
                            <li>Assurance vie</li>
                        </ul>
                    </div>
                    <div className="mb-5">
                        <h3 className="text-orange-900 text-xl">Solutions à la carte</h3>
                        <ul className="list-disc ml-8 mt-1">
                            <li>La banque chez vous</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
        <div className="flex justify-between mx-5">
            <button className= {`flex items-center`} >
                <div className= {`flex justify-center items-center text-4xl text-white bg-black mr-2 rounded-full border w-16 h-16 text-white-200 bg-slate-200' `} ><FaAngleLeft/></div>
                <span className={`text-xl text-gray-300 `} >RETOUR</span>
            </button>
            <button onClick={onSubmit} className="flex items-center ">
                <span className="text-xl text-orange-600">Je soucris</span>
                <div className={`flex justify-center items-center text-4xl text-white bg-orange-600 ml-2 rounded-full border w-16 h-16`}><FaAngleRight/></div>
            </button>
        </div>

    </div> );
}
 
export default GrandeEntreprise;