function Slider(props) {
    return (
        <div className='max-w-full flex flex-nowrap mt-4 snap-mandatory scroll-smooth overflow-x-auto snap-x snap-start'>
            {props.children}
        </div>
    )
}

export default Slider