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
            
            <div className='mt-4 ml-4'>
                <h2 className='font-bold text-2xl'>Nossas Lojas</h2>

                <Slider>
                    {
                        lojas.map(store => {
                            return (
                                <Store path={store.image} name={store.name}/>
                            )  
                        })
                    }

                    <button className="w-20 flex flex-col items-center rounded-lg p-2 focus:bg-zinc-200 snap-start">
                        <div className="w-16 h-16 rounded-full border-2 border-black flex items-center justify-center">
                            <AiOutlineMenu size={32} />
                        </div>

                        <h2 className="text-center font-normal mt-1.5">Todas as Lojas</h2>
                    </button>
                </Slider>
            </div>

            {
                lojas.map(store => {
                    return (
                        <div className='mt-4 ml-4'>
                            <h2 className='font-bold text-2xl'>{store.name}</h2>

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