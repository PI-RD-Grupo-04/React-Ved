import React, { useState } from 'react'
import { Link } from 'react-router-dom'




function ItemBasket(props) {
    const [qty, setQty] = useState(0)
    const [total, setTotal] = useState(props.valor)

    const incremento = () => {
        setQty(qty + 1);
    }


    const decremento = () => {
        if (qty <= 0) {
            setQty(0);
        } else {
            setQty(qty - 1);
        }
    }

    const valorTotal = (qty * total)
    console.log(Math.round(valorTotal))


    return (
        <>
            <li className="list-group-item py-3">
                <div className="row g-3">
                    <div className="col-4 col-md-3 col-lg-2">

                        <Link to="/product">
                            <img className="mr-3 imgfruta" src="https://i.ibb.co/nP8cZL2/abacaxi.png" alt="Banana-Prata-Organica-600g-800g-Ved" />
                        </Link>
                    </div>
                    <div className="col-8 col-md-9 col-lg-7 col-xl-8 text-left align-self-center">
                        <h4>
                            <b>
                                <Link to="product" className="text-decoration-none text-success">
                                    {props.nome}
                                </Link>
                            </b>
                        </h4>
                        <h5>
                            Abacate manteiga da melhor qualidade possível e muito fresco.
                        </h5>
                    </div>
                    <div className="col-12 offset-6 col-sm-6 offset-sm-6 col-md-4 offset-md-8 col-lg-3 offset-lg-0 col-xl-2 align-self-center mt-3">

                        <div className="text-end mt-2 ">
                            <div className="input-group w-100 h-100 ">
                                <button onClick={incremento} className="btn btn-outline-dark  btn-green btn-sm" >
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-plus-lg" viewBox="0 0 16 16">
                                        <path fill-rule="evenodd" d="M8 2a.5.5 0 0 1 .5.5v5h5a.5.5 0 0 1 0 1h-5v5a.5.5 0 0 1-1 0v-5h-5a.5.5 0 0 1 0-1h5v-5A.5.5 0 0 1 8 2Z" />
                                    </svg> <i className="bi-caret-down" ></i>
                                </button>
                                <input type="text" className="form-control text-center border-dark " value={qty} />
                                <button onClick={decremento} className="btn btn-outline-dark btn-green btn-sm" >
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-dash-lg" viewBox="0 0 16 16">
                                        <path fill-rule="evenodd" d="M2 8a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11A.5.5 0 0 1 2 8Z" />
                                    </svg> <i className="bi-caret-up" ></i>
                                </button>

                                <button className="btn btn-outline-danger border-dark btn-red btn-sm" >
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash" viewBox="0 0 16 16">
                                        <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z" />
                                        <path fill-rule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z" />
                                    </svg>
                                </button>
                            </div>
                            <p className="text-dark">Valor Item: {props.valor}</p>
                            <small className="text-secondary">Valor Total: {valorTotal.toLocaleString('pt-br', {style: 'currency', currency: 'BRL'})} </small><br />
                            {/* <small className="text-secondary">Valor Total: {valorTotal.toLocaleString('pt-br', {minimumFractionDigits: 2})} </small><br /> */}
                        </div>
                    </div>
                </div>
            </li>

        </>
    )
}

export default ItemBasket
