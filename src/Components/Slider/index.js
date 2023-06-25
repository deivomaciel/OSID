import './styles.css'

function Slider(props) {
    return (
        <div className='max-w-full flex flex-nowrap pt-2 mt-4 pb-4 gap-2 snap-mandatory scroll-smooth overflow-x-auto slider'>
            {props.children}
        </div>
    )
}

export default Slider