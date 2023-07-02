import { useState } from "react"
import cartFunctions from "../cartFunctions/cartFunctions"

function CartIten(props) {
    const cart = cartFunctions()
    let [quantity, setQuantity] = useState(props.quantity)

    const productData = {
        title: props.title,
        imagePath: props.src,
        price: props.value,
        desc: props.info,
        quantity: 1
    }
    
    const addProduct = () => {
        cart.add(productData)
        setQuantity(quantity + 1)
    }

    const removeProduct = () => {
        cart.remove(productData)
        setQuantity(quantity - 1)
    }

    return (
        <div className="rounded-lg shadow-md flex sm:justify-start items-center">
            <div className="w-24 rounded-lg h-24 sm:w-32 sm:h-32 flex-none bg-zinc-200">
                <img 
                    className="rounded-l-lg w-full h-full object-cover" 
                    src={props.path} 
                    alt={props.title}
                />
            </div>

            <div className="flex items-center ml-4 sm:ml-8">
                <div className="border-r w-36 md:w-48 pr-4 border-black flex flex-col justify-center">
                    <h3 className="text-xs lg:text-base font-bold">{props.title}</h3>

                    <div className="flex w-28  lg:w-36 h-10 mt-2">
                        <button 
                            className="border-2 rounded-l-full w-full transition ease-in-out duration-300 hover:bg-zinc-200"
                            onClick={() => removeProduct()}
                        >
                            -
                        </button>
                        <p className="border-y-2 w-full flex items-center justify-center">
                            {quantity}
                        </p>
                        <button 
                            className="border-2 w-full rounded-r-full transition ease-in-out duration-300 hover:bg-zinc-200"
                            onClick={() => addProduct()}
                        >
                            +
                        </button>
                    </div>
                </div>

                <div className="ml-2">
                    <p className="text-xs lg:text-sm">{quantity} x R${props.price}</p>
                    <p className="text-2xl lg:text-4xl font-bold">R${quantity * props.price}</p>
                </div>
            </div>
        </div>
    )
}

export default CartIten