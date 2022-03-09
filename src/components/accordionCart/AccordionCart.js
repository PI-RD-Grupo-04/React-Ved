import React, { useState } from 'react'
import './AccordionCart.css'

function AccordionCart (props) {

    //aqui recebe os dados do cartao cadastrados no banco,utilizando o ID do cartao como diferencial 
    // para cada identificador de acordios 
    // let idAccordion = '#collapse' + id.cartao;  
    

    return (
        <>
            <div className="accordion-item">
                <h2 className="accordion-header" id="headingOne">
                    <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapse"
                        aria-expanded="true" aria-controls="collapseOne">
                        Bandeira: {props.bandeira} 
                    </button>
                </h2>
                <div id="collapse" className="accordion-collapse collapse show" aria-labelledby="headingOne"
                    data-bs-parent="#accordionExample">
                    <div className="accordion-body">

                        <input type="checkbox" className="margemright" id="card-02" name="Card-02" value="card-02" />
                        <label for="card-02">Nome: {props.nome}</label>
                        <label for="card-02">Nº {props.num}</label>
                        <label for="card-02">Val: {props.dia}/{props.ano}</label>
                        <div className="col-3">
                            <p>CVV</p>
                            <input type="number" className="form-control" id="cvv-number" required />

                            <div className="invalid-feedback">Numero obrigatorio</div>
                        </div>
                        <small className="text-muted">Nome conforme exibido atrás do
                            cartão</small>

                    </div>
                </div>
            </div>
        </>
    )
}

export default AccordionCart;