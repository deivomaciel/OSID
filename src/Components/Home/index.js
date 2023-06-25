import Header from '../Header'
import Store from '../Store'
import Product from '../Product'
import Slider from '../Slider'
import { AiOutlineMenu } from 'react-icons/ai'
import lojas from '../../api/storesProvider'

function Home() {
    return (
        <div className='w-screen h-screen'>
            <Header />
            
            <div className='mt-4'>
                <h2 className='text-md ml-8'>Nossas Lojas</h2>
                <Slider>
                    {
                        lojas.map(store => {
                            return (
                                <Store path={store.image} name={store.name}/>
                            )  
                        })
                    }

                    <button className="flex w-28 h-24 flex p-2 transition ease-in-out hover:scale-110 hover:shadow-md duration-300 shrink-0 flex-col justify-center items-center rounded-lg focus:bg-zinc-200 border-2">
                        <div className="w-12 h-12 rounded-full border-2 border-black flex items-center justify-center">
                            <AiOutlineMenu size={32} />
                        </div>

                        <h2 className="text-center text-xs font-normal mt-1.5">Todas as Lojas</h2>
                    </button>
                </Slider>
            </div>

            {
                lojas.map(store => {
                    return (
                        <div className='mt-4'>
                            <h2 className='text-md ml-8'>{store.name}</h2>
                            <Slider>
                                {
                                    store.products && (
                                        store['products'].map(protudo => {
                                            return (
                                                <Product src={protudo.photo} value={protudo.value} title={protudo.product} info={protudo.desc}/>
                                            )
                                        })
                                    )
                                }
                            </Slider>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default Home