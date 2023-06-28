function CartIten(props) {
    return (
        <div className="rounded-lg shadow-md flex justify-between sm:justify-start pr-4 items-center">
            <div className="w-24 h-24 sm:w-32 sm:h-32">
                <img 
                    className="rounded-l-lg w-full h-full object-cover" 
                    src={props.path} 
                    alt={props.title}
                />
            </div>

            <div className="flex items-center justify-center sm:ml-8">
                <div className=" border-r pr-4 border-black flex flex-col justify-center">
                    <h3 className="text-sm lg:text-base font-bold">{props.title}</h3>
                    <div className="flex lg:w-36 h-10 mt-2">
                        <button className="border-2 rounded-l-full w-full transition ease-in-out duration-300 hover:bg-zinc-200">
                            -
                        </button>
                        <span className="border-y-2 w-full flex items-center justify-center">
                            {props.quantity}
                        </span>
                        <button className="border-2 w-full rounded-r-full transition ease-in-out duration-300 hover:bg-zinc-200">
                            +
                        </button>
                    </div>
                </div>

                <div className="ml-4">
                    <p className="text-xs lg:text-sm">{props.quantity} x R${props.price}</p>
                    <p className="text-2xl lg:text-4xl font-bold">R${props.total}</p>
                </div>
            </div>
        </div>
    )
}

export default CartIten