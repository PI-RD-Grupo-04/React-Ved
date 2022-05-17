import React, { useState, createContext } from 'react'

const CartContext = createContext({})

function CartProvider(props) {

    const [carrinho, setCarrinho] = useState([])
    const [qtyCarrinho, setQtyCarrinho] = useState(0)

    function ValidaCarrinho () {
         let context  = localStorage.getItem('cart')
            ? JSON.parse(localStorage.getItem('cart')) 
            : []

        return context
    }

    const addCarrinho = (item) => {
        let carrinhoLista = ValidaCarrinho()

        carrinhoLista.push(item)

        localStorage.setItem('carrinho', JSON.stringify(carrinhoLista))
        localStorage.qtyCarrinho = JSON.stringify(carrinhoLista.length)

        setCarrinho(carrinhoLista)
        setQtyCarrinho(carrinhoLista.length)
    }

    const incrementoCarrinho = () => {

    }

    const decrementoCarrinho = () => {

    }

    const deleteCarrinho = () => {

    }

    const quantidadeCarrinho = () => {
       let quantidade =  ValidaCarrinho() 
       setQtyCarrinho(quantidade.lenght )
    }

    const listarCarrinho = () => {
       let lista =  ValidaCarrinho()
        setCarrinho(lista)
    }

    return (
        <CartContext.Provider
            value={{ deleteCarrinho, decrementoCarrinho, incrementoCarrinho, addCarrinho, quantidadeCarrinho, listarCarrinho,carrinho,qtyCarrinho }}>
            {props.children}
        </CartContext.Provider>
    )

}


export default CartContext;
export { CartProvider }
