import React, { useState } from 'react'
import './OrderStatus.css'
import bagplus from '../asserts/imagens/bagplus.svg'
import {Link} from 'react-router-dom'

function OrderStatus(props) {

    let status = "" 
    status += props.canceled ? "cancelado" : "" 
    status += props.waiting ? "analise" : "" 
    status += props.delivered ? "entregue" : "" 
    status += props.delivering ? "caminho  " : "" 

    let label = "" 
    label += props.canceled ? " Cancelado" : "" 
    label += props.waiting ? " Em analise" : "" 
    label += props.delivered ? " Entregue" : "" 
    label += props.delivering ? " A caminho" : "" 
    


    return (
        <>
            <div className="row border py-3 mb-2">
                <div className="col-12 size-text  align-items-center d-flex">
                    {/* nome do titular do cartão */}
                  <Link to="/detalhespedido" className="margin">  <img src={bagplus} width="30"/></Link>
                   <label for={props.id}>Pedido </label>
                    <label for={props.id}>#{props.pedido}:</label>
                    <label for={props.id} className={status}>{label}</label>
                  
                </div>
            </div>
        </>
    )
}

export default OrderStatus