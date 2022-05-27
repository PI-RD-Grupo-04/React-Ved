import './OrderDetails.css'
import Header from '../../components/header/Header'
import Footer from '../../components/footer/Footer'
import ItemCart from '../../components/itemCardCheckout/itemCartCheckout'
import React, { useState, useEffect, useContext } from 'react'
import logo from '../../components/asserts/imagens/Header/logo.png'
import { Link } from 'react-router-dom'
import master from '../../components/asserts/imagens/Users_icon/master.png'
import Title from '../../components/title/Title'
import Pix from '../../components/pix/Pix'
import TicketPayment from '../../components/ticketPayment/TicketPayment'


function OrderDetails() {

  


    return (
        <>
            <Header />
            <div className=" container d-flex justify-content-center">

                <Link to="/"><img src={logo} width="180px" alt="Logo Ved"
                    title="VED - Alimentos Organicos" /></Link>

            </div>

            <Title label="Compra Realizada com Sucesso" />

            <div className="container col-12 alterando d-flex mt-5">

                <div className="container col-12 col-md-12 col-lg-6 ">
                    <div>
                        <h4 className="d-flex  align-items-center mb-3 mt-2">
                            <span className="mb-3">Endereço de entrega </span>
                        </h4>
                        <h4 className="d-flex  align-items-center mb-3 mt-2">
                            <span className="mb-3"> </span>
                        </h4>
                        <div className="d-flex ">
                            <li className="list-group-item list1 d-flex-column lh-sm col-6">
                                <ul className="mt-2"> Rua : Santana de Parnaiba    </ul>
                            </li>
                            <li className="list-group-item list1 d-flex-column lh-sm col-6">
                                <ul className="mt-2"> Número : 45  </ul>
                            </li>
                        </div>
                        <div className="d-flex ">
                            <li className="list-group-item list1 d-flex-column lh-sm col-6">
                                <ul className="mt-2"> Múnicípio : Embu das Artes  </ul>
                            </li>
                            <li className="list-group-item list1 d-flex-column lh-sm col-6">
                                <ul className="mt-2"> UF : SP  </ul>
                            </li>
                        </div>

                    </div>

                    <h4 className="d-flex justify-content-between align-items-center mb-3 mt-5">
                        <span className="">Método de Pagamento : Cartão</span>
                    </h4>

                    <li className="list-group-item list1 d-flex-column lh-sm">
                        <ul className="mt-2"> Número : **** **** **** 5674  </ul>
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

                    <Pix />
                    <TicketPayment />

                </div>

                <div className="container col-12 col-md-12 col-lg-6">

                    <h4 className="d-flex  align-items-center mb-3 mt-2">
                        <span className="mb-3">Detalhes de Pedido </span>
                    </h4>

                    <div className="d-flex ">
                        <li className="list-group-item list1 d-flex-column lh-sm col-6">
                            <ul className="mt-2"> Pedido #123    </ul>
                        </li>
                        <li className="list-group-item list1 d-flex-column lh-sm col-6">
                            <ul className="mt-2"> Entrega Comum  </ul>
                        </li>
                    </div>
                    <div className="d-flex ">
                        <li className="list-group-item list1 d-flex-column lh-sm col-6">
                            <ul className="mt-2"> Data: 21/02/2022 </ul>
                        </li>
                        <li className="list-group-item list1 d-flex-column lh-sm col-6">
                            <ul className="mt-2"> Total : R$68,70  </ul>
                        </li>
                    </div>

                    <h4 className="d-flex  align-items-center mb-3 mt-5">
                        <span className="ml">Itens Comprados :  </span>

                        <span className="badge bg-success rounded-pill"> 5</span>
                    </h4>
                    <ul className="list-group " />
                    <ItemCart nome="abacaxi" descricao="1kg aprox." price="9,00" />
                    <ItemCart nome="laranja" descricao="8 unid." price="12,90" />
                    <ItemCart nome="Maça" descricao="1kg aprox." price="12,00" />
                    <ItemCart nome="Alface" descricao="1 unid." price="4,90" />
                    <ItemCart nome="Banana" descricao="1kg aprox." price="9,90" />
                    <div>
                        <li className="list-group-item list1 d-flex justify-content-between lh-sm">
                            <div>
                                <h6 className="my-0">Total</h6>
                                <small className="text-muted"></small>
                            </div>
                            <span className="text-muted"><strong>R$ 48,70</strong> </span>
                        </li>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default OrderDetails