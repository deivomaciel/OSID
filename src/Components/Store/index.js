function Store(props) {
    return (
        <button className=" w-28 h-24 p-2 border-2 transition ease-in-out hover:scale-110 hover:shadow-md duration-300 flex shrink-0 flex-col snap-start justify-center items-center rounded-lg">
            <div className="w-12 h-12 rounded-full border-2 border-black flex items-center justify-center">
                <img 
                    src={props.path}
                    alt={props.alt}
                    className="w-10 h-10 rounded-full object-cover"
                />
            </div>

            <h2 className="text-center text-xs mt-1.5">{props.name}</h2>
        </button>
    )
}

export default Store