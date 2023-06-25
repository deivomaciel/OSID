import { AiFillHeart } from "react-icons/ai"
import { BsFillCartFill } from "react-icons/bs"
import { RiCoupon2Fill } from "react-icons/ri"
import { VscSearch } from "react-icons/vsc"
import { CiShoppingCart } from "react-icons/ci"
import { AiOutlineMenu } from "react-icons/ai"
import LogoDulce from '../../assets/logo_dulce.png'

function Header() {
    return (
        <header className='flex shadow-lg h-12 max-w-7xl mx-auto sm:px-6 lg:px-8 w-screen items-center justify-between p-4'>
            <img className='w-9 h-9 hidden sm:block' src={LogoDulce}/>

            <div className="flex justify-center items-center border-2 rounded-md pl-4">
                <span className="opacity-25 mr-2">
                    <VscSearch size={12} />
                </span>
                <input 
                    type='search'
                    placeholder="Pesquisar produto" 
                    className="h-6  text-xs focus:outline-none rounded-md"
                />
            </div>

            <div className="flex justify-center items-center">
                <a className="relative cursor-pointer mr-4">
                    <CiShoppingCart size={32}/>

                    <span className="absolute bottom-0 right-0 w-4 h-4 bg-white flex justify-center items-center rounded-full">
                        <p className="text-xs">0</p>
                    </span>
                </a>

                <a href="#" className="sm:block transition ease-in-out duration-300 py-1.5 px-4 rounded-md bg-main-200 text-base text-white font-normal hover:bg-main-100">
                    Entrar
                </a>
            </div>
        </header>
    )
}

export default Header