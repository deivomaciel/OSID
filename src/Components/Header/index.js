import { AiFillHeart } from "react-icons/ai"
import { VscSearch } from "react-icons/vsc"
import { CiShoppingCart } from "react-icons/ci"
import { IoMdNotificationsOutline } from "react-icons/io"
import { AiOutlineMenu } from "react-icons/ai"
import { FaUserCircle } from "react-icons/fa"
import LogoDulce from '../../assets/logo_dulce.png'
import couponicon from '../../assets/couponicon.svg'
import { useEffect, useState } from "react"

function Header() {
    const [logedUser, setLogedUser] = useState(false)
    const cartItems = JSON.parse(localStorage.getItem('cart')) || []

    const verifyUser = () => {
        const userUID = localStorage.getItem('uid')
        userUID ? setLogedUser(true) : setLogedUser(false)
    }

    const totalQuantity = cartItems.reduce((acc, quantity) => {
        return acc + quantity.quantity
    }, 0)

    useEffect(() => {
        verifyUser()
    }, [])

    return (
        <header className='flex shadow-lg mb-8 h-16 max-w-7xl mx-auto sm:px-6 lg:px-8 w-screen items-center justify-between p-4'>
            <img className='w-9 h-9 hidden sm:block' src={LogoDulce}/>

            <div className="flex ml-8 mr-8 w-full justify-center items-center border-2 rounded-md pl-4">
                <span className="opacity-25 mr-2">
                    <VscSearch size={12} />
                </span>
                <input 
                    type='search'
                    placeholder="Pesquisar produto" 
                    className="md:w-full w-full h-8 text-xs focus:outline-none rounded-md"
                />
            </div>

            <nav className="flex items-center gap-2">
                {
                    logedUser && (
                        <div className="hidden lg:flex items-center gap-4">
                            <a className=" text-sm flex justify-center items-center gap-2 cursor-pointer transition border-main-200 hover:border-b-2 ease-in-out duration-500 p-2">
                                Favoritos
                                <AiFillHeart size={16} fill='red' />
                            </a>

                            <a className="text-sm flex justify-center items-center gap-2 cursor-pointer transition border-main-200 hover:border-b-2 ease-in-out duration-500 p-2">
                                Cupons
                                <img className="" src={couponicon} />
                            </a>

                            <a className="text-sm flex justify-center items-center gap-2 cursor-pointer transition border-main-200 hover:border-b-2 ease-in-out duration-500 p-2">
                                Notificações
                                <IoMdNotificationsOutline size={16} />
                            </a>
                        </div>
                    )
                }

                <a href="/cart" className="text-sm flex justify-center items-center gap-2 relative cursor-pointer transition border-main-200 hover:border-b-2 ease-in-out duration-500 p-2">
                    <p className="hidden md:block">Carrinho</p>
                    <CiShoppingCart size={24}/>

                    {
                        totalQuantity > 0 && (
                            <span className="absolute bottom-2 right-2 right-0 w-4 h-4 bg-white flex justify-center items-center rounded-full bg-red-400">
                                <p className="text-xs">{totalQuantity}</p>
                            </span>
                        )
                    }
                </a>

                {
                    !logedUser ? (
                        <a href="/login" className="sm:block h-10 p-4 transition ease-in-out duration-300 py-1.5 rounded-md bg-main-200 text-base text-white font-normal hover:bg-main-100">
                            Entrar
                        </a>
                    ) : (
                        <button className="w-9 h-9 rounded-full flex justify-center items-center">
                            <FaUserCircle size={32} fill="#ccc"/>
                        </button>
                    )
                }

            </nav>
        </header>
    )
}

export default Header