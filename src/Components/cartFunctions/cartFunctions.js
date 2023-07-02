const cart = () => {
    const add = product => {
        const cartItems = JSON.parse(localStorage.getItem('cart')) || []
        let itemIndex
    
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

    const remove = product => {
        const cartItems = JSON.parse(localStorage.getItem('cart')) || []
        let itemIndex
    
        const existingProduct = cartItems.find((item, index) => {
            itemIndex = index
            return item.title === product.title
        })
    
        if(existingProduct.quantity >= 1) {
            existingProduct.quantity -= 1
            cartItems[itemIndex] = existingProduct
            existingProduct.quantity == 0 && cartItems.splice(itemIndex, 1)
        }
        localStorage.setItem('cart', JSON.stringify(cartItems))

        console.log(cartItems)
    }

    return {
        add,
        remove
    }
}

export default cart