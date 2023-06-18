import { BsHeart } from 'react-icons/bs'
import { AiOutlinePlus } from 'react-icons/ai'
import './styles.css'

function Pruduct(props) {
    return (
        <div className='product-content'>
            <div className='product'>
                <img src={props.src} />
                <button className='favorite'>
                    <span>
                        <BsHeart size={24}/>
                    </span>
                </button>

                <div className='btn-footer'>
                    <button className='price'>
                        <span>
                            <p id='sifra'>R$</p>
                            <p>{props.value}</p>
                        </span>
                    </button>

                    <button className='add'>
                        <span>
                            <AiOutlinePlus />
                        </span>
                    </button>
                </div>
            </div>

            <div className='product-info'>
                <h3>{props.title}</h3>
                <p>{props.info}</p>
            </div>
        </div>
    )
}

export default Pruduct