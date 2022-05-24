import React from 'react'


function ItemCart(props) {
    let promo = props.promo ? 'text-success' : 'text-muted' 
    

    return (
        <div>
            <li className="list-group-item d-flex justify-content-between lh-sm">
                <div>
                    <h6 className={promo}>{props.nome}</h6>
                    <small className={promo}>{props.descricao}</small>
                </div>
                <span className={promo}>
                    {props.cupom
                    ? <> -{props.price}%</> 
                    : <> R$ {props.price}</>
                    }
                    </span>
            </li>
        </div>

    )
}

export default ItemCart