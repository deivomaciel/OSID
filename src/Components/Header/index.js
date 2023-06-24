import { AiFillHeart } from "react-icons/ai"
import { BsFillCartFill } from "react-icons/bs"
import { RiCoupon2Fill } from "react-icons/ri"
import { VscSearch } from "react-icons/vsc"
import LogoDulce from '../../assets/logo_dulce.png'

function Header() {
    return (
        <header className='flex w-50 items-center justify-between p-4'>
            <img className='w-20 h-20' src={LogoDulce}/>
            <input 
                type='search'
                placeholder="Pesquisar produto" 
                className="h-10 rounded-full p-2 pl-4 shadow-lg focus:ring-2 focus:outline-none focus-ring-blue-500"
            />
        </header>
    )
}

export default Header