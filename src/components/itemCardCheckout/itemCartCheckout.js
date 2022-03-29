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

    let promo = props.promo ? 'text-success' : 'text-muted'


    return (

        <div>
            <li className="list-group-item d-flex justify-content-between lh-sm">
                <div>
                    <h6 className={promo}>{props.nome}</h6>
                    <small className={promo}>{props.descricao}</small>
                </div>
                <span className={promo}>R$ {props.price}</span>
            </li>
        </div>

    )
}

export default ItemCart