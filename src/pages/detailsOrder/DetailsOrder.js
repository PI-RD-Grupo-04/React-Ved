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


function DetailsOrder() {


    const { order } = useParams()
    const [details, setDetails] = useState()
    const { carrinho, valorTotal, qtyCarrinho } = useContext(CartContext)
    const [address, setAddress] = useState([])
    const [entrega, setEntrega] = useState({})
    const [frete, setFrete] = useState([])
    const [freteValor, setFreteValor] = useState(0)
    const [cupomValidation, setCupomValidation] = useState(0)
    const [cupom, setCupom] = useState({})
    const [cartao, setCartao] = useState([])
    const cliente = 1


    useEffect(() => {
        getDetails()
        console.log(details)
    }, [])

    const getDetails = () => {
        axios.get(`${basePedido}/${cliente}/detalhar/${order}`)
            .then((response) => {
                setDetails(response.data)
            })
            .catch((error) => {
                console.error(error.messege)
            })
    }

    function enderecoultilizado() {
        return details.map(item => {
            <>
                <div className="d-flex ">
                    <li className="list-group-item list1 d-flex-column lh-sm col-6">
                        <ul className="mt-2"> nome   </ul>
                    </li>
                    <li className="list-group-item list1 d-flex-column lh-sm col-6">
                        <ul className="mt-2"> Número : 45  </ul>
                    </li>
                </div>
                <div className="d-flex ">
                    <li className="list-group-item list1 d-flex-column lh-sm col-6">
                        <ul className="mt-2"> Município : Embu das Artes  </ul>
                    </li>
                    <li className="list-group-item list1 d-flex-column lh-sm col-6">
                        <ul className="mt-2"> UF : SP  </ul>
                    </li>
                </div>
            </>
        }
        )
    }


function cartaoultilazo() {

    return (
        <>
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


        </>
    )
}


function CartComCupom() {
    if (cupomValidation == 1) {
        return (
            <Cart frete={freteValor} quant={qtyCarrinho} cart={carrinho}
                cupom={cupom} valor={valorTotal} cupomValid />
        )
    } else {
        return (
            <Cart frete={freteValor} quant={qtyCarrinho} cart={carrinho}
                cupom={cupom} valor={valorTotal} />

        )
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



                                {/* {enderecoultilizado()} */}









                            </div >
                            <h4 className="d-flex justify-content-between align-items-center mb-3 mt-5">
                                <span className="">Metodo de Pagamento : Cartão</span>
                            </h4>





                            Cartao





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
                                    <ul className="mt-2"> Entrega Comum </ul>
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


                            {CartComCupom()}


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