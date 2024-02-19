import bank from '../../img/bridge.png'

const Header = () => {
    return ( <div className="px-8 py-4 flex flex-col items-center bg-black text-white">
        <div className="flex">
            <div>
                <img src={bank} alt="" className='w-24'/>
            </div>
            <div className='ml-1'>
                <p className='font-bold text-3xl'>BRIDGE BANK</p>
                <p className='font-bold text-[11px]'>GROUP CÔTE D'IVOIRE</p>
            </div>
        </div>

        <div className="flex flex-col items-center mt-8">
            <p>Bienvenue !</p>
            <p>Vous entamez le processus de creatino de votre compte</p>
            <p>Bridge Bank</p>
        </div>
    </div> );
}
 
export default Header;