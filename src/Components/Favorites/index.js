import { MdArrowBackIosNew } from 'react-icons/md'
import { BsFillHeartFill } from 'react-icons/bs'
import Product from '../Product'
import Produto2 from '../../assets/product2.jpeg'
import Produto3 from '../../assets/produto3.jpeg'
import Produto7 from '../../assets/produto7.jpeg'
import './styles.css'

function Favorite() {
    return (
        <div>
            <header className='title-header'>
                <a href='/' id='back'>
                    <span>
                        <MdArrowBackIosNew size={24}/>
                    </span>
                </a>
            </header>

            <div className='favorite-title'>
                <h1>Favoritos</h1>

                <span>
                    <BsFillHeartFill size={24} fill='#FB0000' />
                </span>
            </div>

            <div className='show-itens'>
                <h3> Itens favoritos:</h3>

                <div className='grid-container'>
                    <div className='itens-container'>
                        <Product
                            info='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
                            src={Produto2}
                            title='Chaveiro Dulce'
                            class={'fav'} 
                            favInfo='fav-info'
                        />

                        <Product 
                            info='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.' 
                            src={Produto3} 
                            title='Capuccino' 
                            class={'fav'}
                            favInfo='fav-info'
                        />
                        <Product 
                            info='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.' 
                            src={Produto7} 
                            title='Cookie' 
                            class={'fav'}
                            favInfo='fav-info'
                        />
                    </div>
                </div>
            </div>
        </div>
    )
 }

 export default Favorite