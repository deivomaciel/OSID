import Product from '../Product/index'
import './styles.css'
import { VscSearch } from 'react-icons/vsc'
import { AiFillHeart } from 'react-icons/ai'
import { AiOutlineMenu } from 'react-icons/ai'
import { BsFillCartFill } from 'react-icons/bs'
import { RiCoupon2Fill } from 'react-icons/ri'
import LogoDulce from '../../assets/logo_dulce.png'
import DulceCafe from '../../assets/dulce_cafe.png'
import Doacao  from '../../assets/doacao.jpeg'
import Osid from '../../assets/osid.png'
import DulceNatura from '../../assets/dulce_natura.png'
import DulceSabor from '../../assets/dulce_sabor.png'
import Produto1 from '../../assets/produto1.png'
import Produto2 from '../../assets/product2.jpeg'
import Produto3 from '../../assets/produto3.jpeg'
import Produto4 from '../../assets/produto4.jpeg'
import Produto5 from '../../assets/produto5.jpeg'
import Produto6 from '../../assets/produto6.jpeg'
import Produto7 from '../../assets/produto7.jpeg'
import Produto8 from '../../assets/produto8.jpeg'

function Home() {
    const lojas = [
        {
            name: 'Dulce Café',
            produtos: [
                {   value: 30,
                    photo: Produto1,
                    produto: 'Torta de chocolate',
                    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
                },
                {   value: 8,
                    photo: Produto2,
                    produto: 'Capuccino',
                    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
                }
            ]
        },
        {
            name: 'Loja Irmã Dulce',
            produtos: [
                {   value: 10,
                    photo: Produto3,
                    produto: 'Chaveiro Dulce',
                    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
                },
                {   value: 43,
                    photo: Produto4,
                    produto: 'Caneca Coração',
                    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
                }
            ]
        },
        {
            name: 'Dulce Natura',
            produtos: [
                {   value: 13,
                    photo: Produto5,
                    produto: 'Panetone',
                    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
                },
                {   value: 8,
                    photo: Produto6,
                    produto: 'Pão Hamburguer',
                    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
                }
            ]
        },
        {
            name: 'Dulce Sabor',
            produtos: [
                {   value: 12,
                    photo: Produto7,
                    produto: 'Coockie',
                    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
                },
                {   value: 10,
                    photo: Produto8,
                    produto: 'Broa',
                    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
                }
            ]
        },
    ]

    return (
        <div>
            <header className='home-header'>
                <div className='header-container'>
                    <img src={LogoDulce} alt="Logo Irmã Dulce"/>
                    <div className='input-container'>
                        <div className='input-things'>
                            <span>
                                <VscSearch size={16}/>
                            </span>

                            <div className='buttons'>
                                <a href='/coupon'>
                                    <span>
                                        <RiCoupon2Fill fill='#777777' size={16}/>
                                    </span>
                                </a>

                                <a href='favorite'>
                                    <span>
                                        <AiFillHeart fill='#777777' size={16}/>
                                    </span>
                                </a>

                                <a href='car'>
                                    <span>
                                        <BsFillCartFill fill='#777777' size={16}/>
                                    </span>
                                </a>
                            </div>
                        </div>
                        <di className='input-container'>
                            <input type='search' />
                        </di>
                    </div>
                </div>
            </header>

            <main className='lojas'>
                <h2>Nossas Lojas</h2>

                <div className='lojas-container'>
                    <div className='lojas-btn-container'>
                        <button className='loja-btn'>
                            <span className='btn-logo'>
                                <img src={DulceCafe} />
                            </span>
                          </button>

                        <p>Dulce Café</p>
                    </div>

                    <div className='lojas-btn-container'>
                        <button className='loja-btn'>
                            <span className='btn-logo'>
                                <img src={Osid} />
                            </span>
                        </button>

                        <p>Obras Sociais</p>
                    </div>

                    <div className='lojas-btn-container'>
                        <button className='loja-btn'>
                            <span className='btn-logo'>
                                <img src={DulceNatura} />
                            </span>
                        </button>

                        <p>Dulce Natura</p>
                    </div>

                    <div className='lojas-btn-container'>
                        <button className='loja-btn'>
                            <span className='btn-logo'>
                                <img src={DulceSabor} />
                            </span>
                        </button>

                        <p>Dulce Sabor</p>
                    </div>

                    <div className='lojas-btn-container'>
                        <button id='all' className='loja-btn'>
                            <span>
                                <img src={Doacao}/>
                            </span>
                        </button>

                        <p>Todas</p>
                    </div>

                    <div className='lojas-btn-container'>
                        <button id='all' className='loja-btn'>
                            <span>
                                <AiOutlineMenu size={24}/>
                            </span>
                        </button>

                        <p>Todas</p>
                    </div>
                </div>
            </main>

            {
                lojas.map(loja => {
                    return (
                        <aside className='dulce-cafe'>
                            <h1>{loja.name}</h1>
                            
                            <div className='product-container'>
                                {
                                    loja.produtos.map(protudo => {
                                        return (
                                            <Product src={protudo.photo} value={protudo.value} title={protudo.produto} info={protudo.desc}/>
                                        )
                                    })
                                }
                            </div>
                        </aside>
                    )
                })
            }
        </div>
    )
}

export default Home