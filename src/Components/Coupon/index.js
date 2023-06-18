import { MdArrowBackIosNew } from 'react-icons/md'
import { BsWhatsapp } from 'react-icons/bs'
import { FaTelegramPlane } from 'react-icons/fa'
import { BsInstagram } from 'react-icons/bs'
import CouponIcon from '../../assets/voucher.png'
import BlueCoupon from '../../assets/bluecoupon.png'
import './styles.css'

function Coupon() {
    return (
        <div className="countainer">
            <header className='coupon-header'>
                <a href='/' id='back'>
                    <span>
                        <MdArrowBackIosNew size={24}/>
                    </span>
                </a>
            </header>

            <div className='title-area'>
                <h1>Cupons</h1>
                <img src={CouponIcon} />
            </div>

            <div className='show-coupons'>
                <h3>Cupons disponíveis</h3>

                <div className='coupons-container'>
                    <a href='#' className='coude-coupon'>
                        <p>Ao indicar alguém, você e a pessoa ganham 10% off na primeira compra</p>
                        
                        <div className='code-section'>
                            <div className='shear'>
                                <p>Compartilhe seu código</p>
                                <div className='spans'>
                                    <span>
                                        <BsWhatsapp />
                                    </span>
                                    <span>
                                        <FaTelegramPlane />
                                    </span>
                                    <span>
                                        <BsInstagram />
                                    </span>
                                </div>
                            </div>
                            <div className='code'>
                                <h3>BRASA10</h3>
                            </div>
                        </div>
                    </a>

                    <a href='#' className='coupon'>
                        <div className='coupon-info'>
                            <h3>R$30 para produtos qualificados</h3>
                            <ul>
                                <li>Válido apenas na primeira compra</li>
                                <li>Pedido mínimo de 50 reais</li>
                            </ul>
                        </div>

                        <div className='icon-section'>
                            <img src={BlueCoupon} />
                        </div>
                    </a>

                    <a href='#' className='coupon'>
                        <div className='coupon-info'>
                            <h3>R$5 para produtos da Dulce Café</h3>
                            <ul>
                                <li>Válido pelas próximas 12:43 horas</li>
                                <li>Pedido mínimo de 20 reais</li>
                            </ul>
                        </div>

                        <div className='icon-section'>
                            <img src={BlueCoupon} />
                        </div>
                    </a>

                    <a href='#' className='coupon'>
                        <div className='coupon-info'>
                            <h3>R$8 para produtos da Loja Irmã Dulce</h3>
                            <ul>
                                <li>Válido pelas próximas 4:44 horas</li>
                                <li>Pedido mínimo de 25 reais</li>
                            </ul>
                        </div>

                        <div className='icon-section'>
                            <img src={BlueCoupon} />
                        </div>
                    </a>

                    <a href='#' className='coupon'>
                        <div className='coupon-info'>
                            <h3>R$5 off em todo app</h3>
                            <ul>
                                <li>Válido pelas próximas 0:50 horas</li>
                                <li>Pedido mínimo de 25 reais</li>
                            </ul>
                        </div>

                        <div className='icon-section'>
                            <img src={BlueCoupon} />
                        </div>
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Coupon