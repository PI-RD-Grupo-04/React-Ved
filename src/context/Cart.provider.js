import React, { useState, createContext } from 'react'
import { ButtonQty } from '../components/productCard/ProductCard'
const CartContext = createContext({})


function CartProvider(props) {

    const [carrinho, setCarrinho] = useState([])
    const [qtyCarrinho, setQtyCarrinho] = useState(0)
    const [quantidadeCesta, setQuantidadeCesta] = useState(0)
    const [quantidadeProduto, setQuantidadeProduto] = useState(0)
    const [valorTotal, setValorTotal] = useState(0.0)
    const [produto, setProduto] = useState({})

    function ValidaCarrinho() {
        let context = localStorage.getItem('cart')
            ? JSON.parse(localStorage.getItem('cart'))
            : []

        return context
    }

    const addCarrinho = (item) => {
        const carrinhoLista = localStorage.getItem('cart')
            ? JSON.parse(localStorage.getItem('cart'))
            : []

        carrinhoLista.push(item) 
        localStorage.setItem('cart', JSON.stringify(carrinhoLista))
        localStorage.qtyCarrinho = JSON.stringify(carrinhoLista.length)
        setCarrinho(carrinhoLista)
        setQtyCarrinho(carrinhoLista.length)
    }

    
    function incrementoCarrinho(item) {
        setProduto( carrinho.find(produto => item.id == produto.id))
        setQuantidadeProduto({...produto, quantidade: produto.quantidade++  })
        const remove = carrinho.filter(items => items.id !== item.id)
        remove.push(produto)
        localStorage.setItem("cart", JSON.stringify(remove))
        setCarrinho(remove)
        setQtyCarrinho(remove.length)

    }

    const decrementoCarrinho = (item) => {
        setProduto( carrinho.find(produto => item.id == produto.id))
        setQuantidadeProduto({...produto, quantidade: produto.quantidade-- })
    }

    function total() { 
        var a = 0
        const carrinhoList  = JSON.parse(localStorage.getItem('cart'))
        ?  JSON.parse(localStorage.getItem('cart'))
        : []
        carrinhoList.forEach((value)=>{
            // let totalItem = value.preco  * value.quantidade
            // setValorTotal( valorTotal + totalItem)
        })   
        localStorage.setItem('valorTotal', JSON.stringify(valorTotal))
        setQtyCarrinho(carrinhoList.length)

    }

    const deleteCarrinho = (item) => {
        const remove = carrinho.filter(items => items.id !== item.id)
        localStorage.setItem("cart", JSON.stringify(remove))
        setCarrinho(remove)
        setQtyCarrinho(remove.length)
    }

    const quantidadeCarrinho = () => {
        let quantidade = ValidaCarrinho()
        //setQtyCarrinho(quantidade.lenght)
    }

    const listarCarrinho = () => {
        let lista = ValidaCarrinho() 
        let valor = localStorage.getItem('valorTotal')
        setCarrinho(lista)
        setValorTotal(valor)
    }

    return (
        <CartContext.Provider
            value={{
                deleteCarrinho, decrementoCarrinho, incrementoCarrinho, addCarrinho, quantidadeCarrinho, listarCarrinho,
                carrinho, qtyCarrinho, quantidadeProduto, quantidadeCesta, valorTotal, total
            }}>
            {props.children}
        </CartContext.Provider>
    )

}


export default CartContext;
export { CartProvider }
