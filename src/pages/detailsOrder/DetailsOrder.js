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
        <h6 className="">{priceConverted}</h6>
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
                    })


                })
                .catch((error) => {
                    console.error(error.messege)
                })
        }
    
        function itens (){
                return details.items.map(a => {
                    return (
                   
               <li className="list-group-item list1 d-flex justify-content-between lh-sm col-12">
               <div>
                   <h5 className="my-0">Item: {a.produto} <small>Preço: {showPrice(a.preco)}</small> <small> Quantidade {a.quantidade}</small></h5>
               </div>
                </li>

        )})}
    

    function cartaoultilazo() {

        return (
            <>
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
                                    <span className="">Metodo de Pagamento : Cartão</span>

                                </h4>



                          

                            
                                <h3>{details.items.produto}</h3>




                            </div>

                            <div className="container col-12 col-md-12 col-lg-6">
                            <h4 className="d-flex  align-items-center mb-3 mt-2">
                                        <span className="mb-3">Endereço de entrega </span>
                                    </h4>


                                {itens()}






                                <h4 className="d-flex  align-items-center mb-3 mt-5">
                                    <span className="mb-3">Detalhes de Pedido </span>
                                </h4>

                                <div className="d-flex ">
                                    <li className="list-group-item list1 d-flex-column lh-sm col-6">
                                        <ul className="mt-2"> Pedido #{details.codigo_pedido}   </ul>
                                    </li>
                                    <li className="list-group-item list1 d-flex-column lh-sm col-6">
                                        <ul className="mt-2"> Tipo Frete :{details.tipoFrete} </ul>
                                    </li>
                                </div>
                                <div className="d-flex ">
                                    <li className="list-group-item list1 d-flex-column lh-sm col-6">
                                        <ul className="mt-2"> Valor Frete :{showPrice(details.valor_frete)} </ul>
                                    </li>
                                    <li className="list-group-item list1 d-flex-column lh-sm col-6">
                                        <ul className="mt-2"> Data:{details.data} </ul>
                                    </li>
                                    </div>
                                    <div className="d-flex ">
                                    <li className="list-group-item list1 d-flex-column col-12 ">
                                        <ul className="mt-2"> Total : {showPrice(details.total)}  </ul>
                                    </li>
                                </div>

                       

                              
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