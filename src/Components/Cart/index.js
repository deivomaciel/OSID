import { MdArrowBackIosNew } from 'react-icons/md'
import CartIcon from '../../assets/cart.png'
import CartIten from '../CartIten'
import Produto3 from '../../assets/produto3.png'
import Produto from '../../assets/produto1.png'
import './mediaQueries.css'

function Cart() {
    const cartItems = JSON.parse(localStorage.getItem('cart')) || []

    return (
        <div>
            <div className='p-4 flex items-center shadow-lg h-16 max-w-7xl mx-auto sm:px-6 lg:px-8 w-screen'>
                <a href='/' className='transition ease-in-out duration-300 p-2 hover:bg-zinc-200 rounded-full flex items-center justify-center'>
                    <MdArrowBackIosNew />
                </a>

                <div className='m-auto flex items-center justify-center'>
                    <h2 className='font-bold'>Meu carrinho</h2>
                    <span>
                        <img className='' src={CartIcon} alt='ícone do carrinho' />
                    </span>
                </div>
            </div>

            <div className='cart-itens p-4 lg:flex justify-between flex-shrink'>
                <div className='w-full mr-6 text-lg'>
                    <h3 className='border-b mb-6'>Itens:</h3>

                    <div className='flex flex-col gap-6'>
                        {
                            cartItems.map(item => {
                                return <CartIten quantity={item.quantity} price={item.price} total={item.price * item.quantity} title={item.title} path={item.imagePath} />
                            })
                        }

                    </div>
                </div>

                <div className='w-auto h-fit shrink-0 border-2 rounded-lg mt-8 px-4 pb-4'>
                    <div>
                        <div className='flex w-full justify-between items-center border-y py-4'>
                            <h3 className='font-semibold' >Possui um cupom de desconto?</h3>
                            <button className='ml-4 border-2 w-12 h-8 rounded-lg transition ease-in-out duration-300 hover:bg-zinc-200'>
                                +
                            </button>
                        </div>
                        <div className='flex w-full justify-between items-center border-y py-4'>
                            <h3 className='font-semibold' >Retire na loja</h3>
                            <input type='checkbox' className='w-6 h-6 pointer' />
                        </div>
                        <div className='flex w-full justify-between items-center border-y py-4'>
                            <h3 className='font-semibold' >Calcular a entrega</h3>
                            <input type='number' className='w-36 rounded-lg border p-2' placeholder='CEP'/>
                        </div>
                    </div>

                    <div className='flex flex-col gap-2'>
                        <div className='flex items-center justify-between'>
                            <p className='text-sm text-zinc-500'>Frete</p>
                            <p className='text-sm text-zinc-500'>R$17</p>
                        </div>
                        <div className='flex items-center justify-between'>
                            <p className='text-sm text-zinc-500'>Desconto</p>
                            <p className='text-sm text-zinc-500'>R$10</p>
                        </div>
                        <div className='flex items-center justify-between'>
                            <p className='font-bold text-lg'>TOTAL</p>
                            <p className='font-bold text-lg'>R$ 163</p>
                        </div>

                        <button className='transition ease-in-out duration-300 hover:bg-main-100 bg-main-200 p-4 text-lg rounded-lg font-bold text-white mt-2'>FINALIZAR COMPRA</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default  Cart