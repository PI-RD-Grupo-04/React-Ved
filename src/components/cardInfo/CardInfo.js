import React, { useState } from 'react'
//import './CardInfo.css'

function CardInfo(props) {

    return (
        <>
            <div class="col-12">
                <input type="checkbox" id="card-01" name="Card-01" value="card-01" />
                <label for="card-01">Nome: {props.nome}</label>
                <label for="card-01">Nº {props.numero}</label>
                <label for="card-01">Val: {props.mes}/{props.ano}</label>
            </div>
        </>
    )
}

export default CardInfo