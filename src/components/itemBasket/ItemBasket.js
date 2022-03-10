import React, { useState } from 'react'
//import './ItemBasket.css'

function ItemBasket(props) {

    const [nome, setNome] = useState('')

    const modeloFuncao = () => {
        setNome('SeuNome')
    }

    return (
        <>
            <li className="list-group-item py-3">
                <div className="row g-3">
                    <div className="col-4 col-md-3 col-lg-2">
                        <a href="#">
                            <img className="mr-3 imgfruta" src="../" alt="Banana-Prata-Organica-600g-800g-Ved" />                                </a>
                    </div>
                    <div className="col-8 col-md-9 col-lg-7 col-xl-8 text-left align-self-center">
                        <h4>
                            <b><a href="#" className="text-decoration-none text-success">
                                {props.nome} </a></b>
                        </h4>
                        <h5>
                            Abacate manteiga da melhor qualidade possível e muito fresco.
                        </h5>
                    </div>
                    <div className="col-6 offset-6 col-sm-6 offset-sm-6 col-md-4 offset-md-8 col-lg-3 offset-lg-0 col-xl-2 align-self-center mt-3">
                        <div className="input-group">
                            <button className="btn btn-outline-dark btn-green btn-sm" type="button">
                                + <i className="bi-caret-down" ></i>
                            </button>
                            <input type="text" className="form-control text-center border-dark" value="4" />
                            <button className="btn btn-outline-dark btn-green btn-sm" type="button">
                                - <i className="bi-caret-up" ></i>
                            </button>
                            <button className="btn btn-outline-danger border-dark btn-red btn-sm" type="button">
                                <i className="bi-trash" ></i>
                            </button>
                        </div>
                        <div className="text-end mt-2">
                            <small className="text-secondary">Valor kg: R$ 3,99</small><br />
                            <span className="text-dark">Valor Item: R$ 15,96</span>
                        </div>
                    </div>
                </div>
            </li>
        </>
    )
}

export default ItemBasket