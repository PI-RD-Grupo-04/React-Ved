import React, { useState } from 'react'
import './AccordionCart.css'
import { Accordion } from 'react-bootstrap'

function AccordionCart (props) {


    

    return (
        <>

                    <Accordion>
                    <Accordion.Item eventKey="0">
                        <Accordion.Header>Bandeira : {props.bandeira}</Accordion.Header>
                        <Accordion.Body>
                        <input type="checkbox" className="margemright" id="card-02" name="Card-02" value="card-02" />
                        <label for="card-02">Nome: {props.nome}</label>
                        <label for="card-02">Nº {props.num}</label>
                        <label for="card-02">Val: {props.dia}/{props.ano}</label>
                        <div className="col-3">
                            <p>CVV</p>
                            <input type="number" className="form-control" id="cvv-number" required />

                            <div className="invalid-feedback">Número obrigatório</div>
                        </div>
                        <small className="text-muted">Nome conforme exibido na parte posterior do
                            cartão</small>
                        </Accordion.Body>
                    </Accordion.Item>
                    </Accordion>
       
        </>
    )
}

export default AccordionCart;