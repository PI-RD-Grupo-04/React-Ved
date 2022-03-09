import React, { useState } from 'react'
//import './ItemCart.css'

function ItemCart(props) {

    //  aqui vai receber um map de item selecionados pelo usuario no nosso site
    // se for promocional utilizar esse css -> 
    /*
     <li className="list-group-item d-flex justify-content-between bg-light">
                                            <div className="text-success">
                                                <h6 className="my-0">Código promocional</h6>
                                                <small>Promoção XXX</small>
                                            </div>
                                            <span className="text-success">- R$ 5</span>
                                        </li>
    */
    return (

        <div>
            <li className="list-group-item d-flex justify-content-between lh-sm">
                <div>
                    <h6 className="my-0">{props.nome}</h6>
                    <small className="text-muted">{props.descricao}</small>
                </div>
                <span className="text-muted">R$ {props.price}</span>
            </li>
        </div>

    )
}

export default ItemCart