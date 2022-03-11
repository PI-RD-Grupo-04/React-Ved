import React, { useState } from 'react'
import { Link } from 'react-router-dom'
//import './ItemBasket.css'
import Buttonqty from '../button/ButtonProduct'

function ItemBasket(props) {


    // const [numero, setNumero] = useState(props.qty)

    // const [valorTotal, setValorTotal] = useState(props.valor * props.qty)
    // const incremento =  () => { 

    //     setNumero(numero + 1);
    //     setValorTotal(props.valor * numero);
    //      console.log(numero);
    //  }
    //  const decremento = () => {
 
    //      setNumero(numero - 1);
    //      setValorTotal(props.valor * numero);
    //      console.log(numero);
    //  }


    return (
        <>
            <li className="list-group-item py-3">
                <div className="row g-3">
                    <div className="col-4 col-md-3 col-lg-2">

                        <Link to="/product">
                            <img className="mr-3 imgfruta" src="../" alt="Banana-Prata-Organica-600g-800g-Ved" />
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
                    <div className="col-6 offset-6 col-sm-6 offset-sm-6 col-md-4 offset-md-8 col-lg-3 offset-lg-0 col-xl-2 align-self-center mt-3">
                     
                        <div className="text-end mt-2">
                       <Buttonqty delete/>
                            <span className="text-dark">Valor Item: {props.valor}</span>
                            <small className="text-secondary">Valor </small><br />
                        </div>
                    </div>
                </div>
            </li> 

        </>
    )
}

export default ItemBasket