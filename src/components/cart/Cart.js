import './Cart.css'
import ItemCart from '../itemCardCheckout/itemCartCheckout'
// import React, { useState, useEffect, useContext } from 'react'
// import CartContext from '../../context/Cart.provider'


function Cart(props) {

    // const { listarCarrinho } = useContext(CartContext)

    // useEffect(() => {
    //     const listaItem = listarCarrinho()
    // }, [])

    // function listar() {
    //     if (listaItem == []) {
    //         return ("Seu carrinho está vazio")
    //     }
    //     return listaItem.map( (item) => { 
    //         <ItemCart key={item.id} nome={item.nome} descricao={item.descricao} price={item.price} />
    //     })
    // }

    return (
        <>
            <div>
                {/*  <!-- BEGIN SEUS PRODUTOS --> */}
                <h4 className="d-flex justify-content-between align-items-center mb-3 mt-2">
                    <span className="">Seu carrinho</span>
                    <span className="badge bg-success rounded-pill">2</span>
                </h4>
                <ul className="list-group mb-3">
                               {/* {listar()} */}
                    <div>
                        <li className="list-group-item list1 d-flex justify-content-between lh-sm">
                            <div>
                                <h5 className="my-0">Total</h5>
                            </div>
                            <span className="text-muted"><strong>R$ 48,70</strong> </span>
                        </li>
                    </div>
                </ul>
            </div>
        </>
    )
}

export default Cart