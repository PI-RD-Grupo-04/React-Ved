import React, { useState, createContext } from 'react'
import { ButtonQty } from '../components/productCard/ProductCard'
const CartContext = createContext({})

function CartProvider(props) {

    const [carrinho, setCarrinho] = useState([])
    const [qtyCarrinho, setQtyCarrinho] = useState(0)
    const [quantidadeCesta, setQuantidadeCesta] = useState(0)
    const [quantidadeProduto, setQuantidadeProduto] = useState(0)


    function ValidaCarrinho() {
        let context = localStorage.getItem('cart')
            ? JSON.parse(localStorage.getItem('cart'))
            : []

        return context
    }

    const addCarrinho = (item, quantidadeProduto) => {
        const carrinhoLista = localStorage.getItem('cart')
            ? JSON.parse(localStorage.getItem('cart'))
            : []
        if(carrinhoLista.find(product => product.id == item.id)){
           // product.quantidade++
        }else {
            carrinhoLista.push(item)
        }
        localStorage.setItem('cart', JSON.stringify(carrinhoLista))
        localStorage.qtyCarrinho = JSON.stringify(carrinhoLista.length)
        setCarrinho(carrinhoLista)
        setQtyCarrinho(carrinhoLista.length)
    }

    function incrementoCarrinho(item) {
        const quant = carrinho.find(produto => item.id == produto.id)
        return quant.quantidade + 1
    }

    const decrementoCarrinho = (item) => {
        if (quantidadeProduto <= 1) {
            setQuantidadeProduto(item.quantidade);
        } else {
            setQuantidadeProduto(item.quantidade - 1);
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
            value={{
                deleteCarrinho, decrementoCarrinho, incrementoCarrinho, addCarrinho, quantidadeCarrinho, listarCarrinho,
                carrinho, qtyCarrinho, quantidadeProduto, quantidadeCesta
            }}>
            {props.children}
        </CartContext.Provider>
    )

}


export default CartContext;
export { CartProvider }
