function Store(props) {
    return (
        <button className="w-20 flex flex-col items-center rounded-lg p-2 focus:bg-zinc-200 snap-start">
            <div className="w-16 h-16 rounded-full border-2 border-black flex items-center justify-center">
                <img 
                    src={props.path}
                    alt={props.alt}
                    className="w-14 h-14 rounded-full object-cover"
                />
            </div>

            <h2 className="text-center font-normal mt-1.5">{props.name}</h2>
        </button>
    )
}

export default Store