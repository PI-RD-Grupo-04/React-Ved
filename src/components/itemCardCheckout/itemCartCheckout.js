import React from 'react'


function ItemCart(props) {
    let promo = props.promo ? 'text-success' : 'text-center' 
    

    return (
        <div>
            <li className="list-group-item d-flex justify-content-between lh-sm">
                <div>
                    <h6 className={promo}>{props.nome}</h6>
                </div>
      
              
                <span className={promo}>
                <h6 className=''>{props.quantidade} x</h6>
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