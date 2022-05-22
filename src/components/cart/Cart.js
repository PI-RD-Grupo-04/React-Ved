import './Cart.css'
import ItemCart from '../itemCardCheckout/itemCartCheckout'
import React, { useState, useEffect, useContext } from 'react'
import CartContext from '../../context/Cart.provider'


function Cart(props) {

    const { carrinho, listarCarrinho, valorTotal, qtyCarrinho } = useContext(CartContext)
    const [listaItem, setListaItem] = useState([])

    useEffect(() => {
        listarCarrinho()
        setListaItem(carrinho)
    }, [])

    function listar() {
        return listaItem.map((item) => {
            return (
                <ItemCart key={item.id} nome={item.nomeProduto} descricao={item.descricao} price={item.preco} />
            )
        })
    }

    function listarCupom() {

            return (
                <ItemCart promo key={props.cupom.id} nome={props.cupom.descricao} descricao='Cupom Promo Ved' price={props.cupom.porcentagemDesconto} />
            )

    }
    return (
        <>
            <div>
                {/*  <!-- BEGIN SEUS PRODUTOS --> */}
                <h4 className="d-flex justify-content-between align-items-center mb-3 mt-2">
                    <span className="">Seu carrinho</span>
                    <span className="badge bg-success rounded-pill">{qtyCarrinho}</span>
                </h4>
                <ul className="list-group mb-3">
                    {listar()}
                    {listarCupom()}
                    <div>
                        <li className="list-group-item list1 d-flex justify-content-between lh-sm">
                            <div>
                                <h5 className="my-0">Total</h5>
                            </div>
                            <span className="text-muted"> {valorTotal - props.cupom.porcentagemDesconto}</span>
                        </li>
                    </div>
                </ul>
            </div>
        </>
    )
}

export default Cart