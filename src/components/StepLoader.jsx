
const StepLoader = ({texte, niv}) => {
    return ( <div>
        <h1 className="text-2xl font-medium mb-1">{texte}</h1>
        <div className="w-full bg-gray-200">
            <div className={`border-2 border-orange-500 w-[${niv}%]`}></div>
        </div>
        
    </div> );
}
 
export default StepLoader;