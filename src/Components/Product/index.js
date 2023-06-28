import { AiFillHeart } from 'react-icons/ai'
import { AiOutlinePlus } from 'react-icons/ai'
import { useState } from 'react'

function Product(props) {
    const [flag, setFlag] = useState(false)

    const addToCart = () => {
        const cartItems = JSON.parse(localStorage.getItem('cart')) || []
        let itemIndex

        const product = {
            title: props.title,
            imagePath: props.src,
            price: props.value,
            desc: props.info,
            quantity: 1
        }

        const existingProduct = cartItems.find((item, index) => {
            itemIndex = index
            return item.title === product.title
        })

        if(existingProduct) {
            existingProduct.quantity += 1
            cartItems[itemIndex] = existingProduct

        } else {
            cartItems.push(product)
        }

        localStorage.setItem('cart', JSON.stringify(cartItems))
    }

    const addProduct = () => {
        setFlag(!flag)
    }

    return (
        <div className='w-48 rounded-xl border-2 relative flex-none snap-start'>
            <div className='h-36 relative bg-zinc-200 rounded-t-xl'>
                <img className='w-full h-full object-cover rounded-tl-xl rounded-tr-xl' src={props.src} />
                
                <button className='absolute top-2 right-4' onClick={() => {addProduct()}}>
                    <span>
                        {
                            !flag ? <AiFillHeart size={24} fill='#ccc' /> : <AiFillHeart size={24} fill='red' />
                        }
                    </span>
                </button>

                <div className='gap-2 p-4 absolute bottom-0 flex justify-between'>
                    <div className='w-10 h-6 rounded-md bg-white flex items-center justify-center'>
                        <span className='flex items-center justify-center'>
                            <p className='text-green-500' id='sifra'>R$</p>
                            <p className='text-xs text-green-500'>{props.value}</p>
                        </span>
                    </div>

                    <button 
                        className='add w-8 h-6 rounded-md flex items-center justify-center bg-white'
                        onClick={() => addToCart()}
                    >
                        <span>
                            <AiOutlinePlus size={12}/>
                        </span>
                    </button>
                </div>
            </div>

            <div className={`w-full p-4 ${props.favInfo}`}>
                <h3 className='font-smibold text-md'>{props.title}</h3>
                <p className='mt-2 text-xs text-justify text-zinc-600'>{props.info}</p>
            </div>
        </div>
    )
}

export default Product