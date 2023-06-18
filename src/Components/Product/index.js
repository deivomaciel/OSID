import { AiFillHeart } from 'react-icons/ai'
import { AiOutlinePlus } from 'react-icons/ai'
import './styles.css'
import { useState } from 'react'

function Pruduct(props) {
    const [flag, setFlag] = useState(false)

    const addProduct = () => {
        setFlag(!flag)
    }

    return (
        <div className='product-content'>
            <div className={`product ${props.class}`}>
                <img src={props.src} />
                <button className='favorite' onClick={() => {addProduct()}}>
                    <span>
                        {
                            !flag ? <AiFillHeart size={24} fill='#ccc' /> : <AiFillHeart size={24} fill='red'/>
                        }
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
                            <AiOutlinePlus/>
                        </span>
                    </button>
                </div>
            </div>

            <div className={`product-info ${props.favInfo}`}>
                <h3>{props.title}</h3>
                <p>{props.info}</p>
            </div>
        </div>
    )
}

export default Pruduct