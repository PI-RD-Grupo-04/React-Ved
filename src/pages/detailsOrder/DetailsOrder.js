import './DetailsOrder.css'
import React, { useState, useEffect, useContext } from 'react'
import Header from '../../components/header/Header'
import Footer from '../../components/footer/Footer'
import CustomerMenu from '../../components/customerMenu/CustomerMenu'
import ItemCart from '../../components/itemCardCheckout/itemCartCheckout'
import master from '../../components/asserts/imagens/Users_icon/master.png'
import Title from '../../components/title/Title'
import { useParams } from 'react-router-dom'
import { basePedido, baseCupom } from '../../environments'
import CartContext from '../../context/Cart.provider'
import { AiFillCheckCircle, AiOutlineCloseCircle } from "react-icons/ai";
import axios from 'axios'
import Cart from '../../components/cart/Cart'
import pedidoModal from '../../models/Pedido'

function DetailsOrder() {


    const { order } = useParams()
    const [details, setDetails] = useState(pedidoModal)

    const cliente = 1

    const items = []

    useEffect(() => {
        getDetails()

    }, [])

    const showPrice = (number) => {
        let priceConverted = new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(number)

        return (
            <>
                <h6 className="mt-2 d-flex align-items-center ">{priceConverted}</h6>
            </>
        )

    }



    function getDetails() {
        axios.get(`${basePedido}/${cliente}/detalhar/${order}`)
            .then((response) => {
                // setDetails(response.data)
                setDetails({
                    rua: response.data.enderecos.rua,
                    numero: response.data.enderecos.numero,
                    municipio: response.data.enderecos.municipio,
                    complemento: response.data.enderecos.complemento,
                    codigo_pedido: response.data.codigo_pedido,
                    tipoFrete: response.data.tipoFrete,
                    data: response.data.data,
                    total: response.data.total,
                    valor_frete: response.data.valor_frete,
                    items: response.data.items,
                    produto: response.data.items.produto,
                    tipo_pagamento: response.data.tipo_pagamento,

                })


            })
            .catch((error) => {
                console.error(error.messege)
            })
    }

    function itens() {
        return details.items.map(a => {
            return (

                <li className=" list1 ">
                    <div className=" col-12 ">
                        <h5 className="d-flex  "> <small className='col-4 mt-2 d-flex align-items-center justify-content-center '> {a.produto} </small> <small className='col-4 mt-2 d-flex align-items-center justify-content-center'>  {a.quantidade}</small> <small className='col-4'> {showPrice(a.preco)}</small></h5>
                    </div>
                </li>
            )
        })
    }

    
    function pagamento () {
        
        if (details.tipo_pagamento == "cartao"){
   
            return (
                <>
                <span className="">Metodo de Pagamento : Cartão</span>
                    <li className="list-group-item list1 d-flex-column lh-sm">
                        <ul className="mt-2">  </ul>
                    </li>
                    <li className="list-group-item list1 d-flex-column lh-sm">
                        <ul className="mt-2"> Nome do titular : Washington Pereira  </ul>
                    </li>
                    <div className="d-flex">
                        <li className="list-group-item list1 d-flex-column lh-sm col-4">
                            <ul className="mt-2"> <img src={master} width="40px" height="40px" alt="Logo Ved"
                                title="VED - Alimentos Organicos" />  </ul>
                        </li>
                        <li className="list-group-item list1 d-flex-column lh-sm col-8">
                            <ul> Validade : 11/29 </ul>
                        </li>
                    </div>
    
    
                </>
            )
            }
        else if ( details.tipo_pagamento == "boleto"){
                return (
       
                <span className="">Metodo de Pagamento : {details.tipo_pagamento}</span>
                )}


       else {
       return (<span className="">Metodo de Pagamento : {details.tipo_pagamento}</span>)
                }
       
}






        
    

    return (
        <>
            <Header />
            <div className="container mt-3 mb-4  ">
                <div className="row ">
                    <div className="col-2 col-sm-3 ">
                        <CustomerMenu />
                    </div>
                    <div className="col-12 col-md-9 order-md-last   mb-3 ">
                        <Title label="Detalhes do Pedido" />

                        <div className='alterando d-flex'>
                            <div className="container col-12 col-md-12 col-lg-6 alterando  ">
                                <div>
                                    <h4 className="d-flex  align-items-center mb-3 mt-2">
                                        <span className="mb-3">Endereço de entrega </span>
                                    </h4>

                                    <div className="d-flex ">
                                        <li className="list-group-item list1 d-flex-column lh-sm col-6">
                                            Rua: {details.rua}
                                        </li>
                                        <li className="list-group-item list1 d-flex-column lh-sm col-6">
                                            <ul className="mt-2">  Numero:  {details.numero}  </ul>
                                        </li>
                                    </div>
                                    <div className="d-flex ">
                                        <li className="list-group-item list1 d-flex-column lh-sm col-6">
                                            <ul className="mt-2"> Município:{details.municipio}  </ul>
                                        </li>
                                        <li className="list-group-item list1 d-flex-column lh-sm col-6">
                                            <ul className="mt-2"> Complemento: {details.complemento}  </ul>
                                        </li>
                                    </div>
                                </div >
                               
                               
                               
                                <h4 className="d-flex justify-content-between align-items-center mb-3 mt-5">
                                 
                            
                               
                                {pagamento()}




                                </h4>










                                <h3>{details.items.produto}</h3>




                            </div>

                            <div className="container col-12 col-md-12 col-lg-6">


                            <h4 className="d-flex  align-items-center mb-3 mt-2">
                                        <span className="mb-3">Detalhes do Pedido</span>
                                    </h4>

                                <div className="d-flex ">
                                    <li className="list-group-item list1 d-flex lh-sm col-6">
                                        <ul className="mt-2 mt-2 d-flex align-items-center "> Pedido #{details.codigo_pedido}   </ul>
                                    </li>
                                    <li className="list-group-item list1 d-flex lh-sm col-6">
                                        <ul className="mt-2 mt-2 d-flex align-items-center "> Tipo Frete :{details.tipoFrete} </ul>
                                    </li>
                                </div>
                                <div className="d-flex ">
                                    <li className="list-group-item list1 d-flexlh-sm col-6">
                                        <ul className="mt-2 mt-2 d-flex align-items-center "> Valor Frete :{showPrice(details.valor_frete)} </ul>
                                    </li>
                                    <li className="list-group-item list1 d-flex lh-sm col-6">
                                        <ul className="mt-2 mt-2 d-flex align-items-center "> Data:{details.data} </ul>
                                    </li>
                                </div>
                                <div className="d-flex ">
                                    <li className="list-group-item list1 d-flex col-12 ">
                                        <ul className="mt-2 d-flex align-items-center "> Total:{showPrice(details.total)}</ul>
                                    </li>
                                </div>
















                                <h4 className="d-flex  align-items-center mb-3 mt-5">
                                    <span className="mb-3">Itens </span>
                                </h4>

                                <div className="d-flex flex-row border align-items-center justify-content-center">
                                    <div className='col-4 d-flex'>
                                        <h5>Produtos</h5>
                                    </div>
                                    <div className='col-4 d-flex'>
                                        <h5>Quantidade</h5>
                                    </div>
                                    <div className='col-4  '>
                                        <h5>Val. Unitário</h5>
                                    </div>
                                </div>
                                {itens()}










                            </div>
                        </div>
                    </div>
                </div>
            </div>







            <Footer />

        </>
    )
}



export default DetailsOrder;