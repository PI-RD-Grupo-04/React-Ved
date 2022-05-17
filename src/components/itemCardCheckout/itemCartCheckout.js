import React, { useState } from 'react'


function ItemCart(props) {
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