import React, { useState, createContext } from 'react'

const CartContext = createContext({})

function CartProvider(props) {

    const [carrinho, setCarrinho] = useState([])
    const [qtyCarrinho, setQtyCarrinho] = useState(0)
    const [quantidadeProduto, setQuantidadeProduto] = useState(0)

    // const valorTotal = (qty * total) 

    // console.log(Math.round(valorTotal)) 

    function ValidaCarrinho() {
        let context = localStorage.getItem('cart')
            ? JSON.parse(localStorage.getItem('cart'))
            : []

        return context
    }

    const addCarrinho = (item, quantidade) => {
        const carrinhoLista = localStorage.getItem('cart')
            ? JSON.parse(localStorage.getItem('cart'))
            : []
        setQuantidadeProduto(item.quantidade)
        carrinhoLista.push(item)

        localStorage.setItem('cart', JSON.stringify(carrinhoLista))
        localStorage.qtyCarrinho = JSON.stringify(carrinhoLista.length)

        setCarrinho(carrinhoLista)
        setQtyCarrinho(carrinhoLista.length)
    }

    const incrementoCarrinho = () => {
        setQuantidadeProduto(quantidadeProduto + 1)
    }

    const decrementoCarrinho = () => {
        if (quantidadeProduto <= 1) {
            setQuantidadeProduto(1);
        } else {
            setQuantidadeProduto(quantidadeProduto - 1);
        }
    }

    const deleteCarrinho = (item) => {
        const remove = carrinho.filter(items => items.id !== item.id) 

        localStorage.setItem("cart", JSON.stringify(remove))
        setCarrinho(remove)
    }

    const quantidadeCarrinho = () => {
        let quantidade = ValidaCarrinho()
        setQtyCarrinho(quantidade.lenght)
    }

    const listarCarrinho = () => {
        let lista = ValidaCarrinho()
        setCarrinho(lista)
    }

    return (
        <CartContext.Provider
            value={{ deleteCarrinho, decrementoCarrinho, incrementoCarrinho, addCarrinho, quantidadeCarrinho, listarCarrinho, carrinho, qtyCarrinho }}>
            {props.children}
        </CartContext.Provider>
    )

}


export default CartContext;
export { CartProvider }
