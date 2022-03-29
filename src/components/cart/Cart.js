import React, { useState } from 'react'
import './Cart.css' 
import ItemCart from '../itemCardCheckout/itemCartCheckout'

function Cart(props) {




    return (
        <>
            <div>
                {/*  <!-- BEGIN SEUS PRODUTOS --> */}
                <h4 className="d-flex justify-content-between align-items-center mb-3 mt-2">
                    <span className="">Seu carrinho</span>
                    <span className="badge bg-success rounded-pill">2</span>
                </h4>
                <ul className="list-group mb-3">
                    <ItemCart nome="abacaxi" descricao="1kg aprox." price="9,00" />
                    <ItemCart nome="laranja" descricao="8 unid." price="12,90" />
                    <ItemCart nome="maça" descricao="1kg aprox." price="12,00" />
                    <ItemCart nome="alface" descricao="1 unid." price="4,90" />
                    <ItemCart nome="banana" descricao="1kg aprox." price="9,90" /> 
                    <ItemCart promo nome="VED10" descricao="Cupom Promocional" price="-10,00" /> 
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