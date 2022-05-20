import React, { useState, useEffect, useContext } from 'react'
import './Checkout.css'
import AddressInfo from '../../components/addressInfo/AddressInfo'
import Header from '../../components/header/Header'
import Footer from '../../components/footer/Footer'
import AccordionCart from '../../components/accordionCart/AccordionCart'
import ModalEndereco from '../../components/modalEndereco/ModalEndereco'
import Button from '../../components/button/Button'
import iconNu from '../../components/asserts/imagens/Footer/iconNu.png'
import CheckInput from '../../components/checkInput/CheckInput'
import RadioBox from '../../components/radioBox/RadioBox'
import Title from '../../components/title/Title'
import InputMask from 'react-input-mask'
import Cart from '../../components/cart/Cart'
import axios from 'axios'
import { baseEndereco, baseFrete } from '../../environments'
import ClientContext from '../../context/Client.provider' 
import OrderModel from '../../models/Order'

function Checkout() {
    const [order, setOrder] = useState(OrderModel) 
    const { client } = useContext(ClientContext)
    const [address, setAddress] = useState([])
    const [entrega, setEntrega] = useState({})
    const [frete, setFrete] = useState([]) 


    console.log(order)
    const [pagamento, setPagamento] = useState({
        card: false,
        pix: false,
        boleto: false,
        cpfBoleto: false
    })

    useEffect(() => {
        getEndereco()
        listEnderecos()
    }, [])

    const getEndereco = () => {
        axios.get(`${baseEndereco}/${client.id}/detalhes`)
            .then((response) => {
                setAddress(response.data)
                listEnderecos()
            })
            .catch((error) => {
                console.error(error.messege)
            })
    }

    const getFrete = (cep) => {
        axios.get(`${baseFrete}/${cep}`)
            .then((response) => {
                setFrete(response.data)
            })
            .catch((error) => {
                console.error(error.messege)
            })
    }


    function opcoesFrete() {
        return (frete.map((opcao) => {
            return(
                <div key={opcao.id} className="d-flex align-items-center justify-content-start" >
                <RadioBox id={opcao.id} name="frete" onClick={() => {
                    setOrder({...order, frete: opcao.id})
                }} /> 
                 <label className="form-check-label" for='frete' >{opcao.tipoFrete}</label>
                <label className="form-check-label" for='frete' >{opcao.valor}</label>
                </div>
            )
        })
        )
    }
    
    function listEnderecos() {
        return address.map(endereco => {
            return (
                <div key={endereco.id}>
                    <RadioBox id={endereco.id} name="endereco" onClick={() => {
                        setEntrega(endereco)
                        getFrete(endereco.idUf)
                        setOrder({...order, endereco: endereco.id})
                    }} />
                    <AddressInfo av={endereco.rua} n={endereco.numero} complement={endereco.complemento} district={endereco.id} zipcode={endereco.cep} city={endereco.cidade} states={endereco.municipio} uf={endereco.uf} id={endereco.id} />
                </div >
            )
        })

    }

    const ativaBoleto = () => setPagamento({
        paymentForm: {
            card: false,
            pix: false,
            boleto: true,
            cpfBoleto: false
        }
    })

    const preBoleto = () => {

        return (
            <div class="row gy-3 ">

                <div class="col-12 d-flex flex-column align-items-center justify-content-center">
                    <h2 class="text-center mb-2">Informações para o Boleto</h2>
                    <label for="nomeboleto">Nome:</label>
                    <input type="text" id="nomeboleto" class="form-control" />
                    <label for="nomecpf">CPF:</label>
                    <input type="text" id="cpfboleto" class="form-control" />
                    <div class="container mt-4 d-grid gy-2 mb-3" onClick={this.ativaBoleto}>
                        <Button success label="gera boleto" />
                    </div>
                </div>

            </div>
        );
    }

    const creditcard = () => {
        return (
            <div className="row gy-3">
                <div className="col-md-6">
                    {/* <!-- nome do titular do cartão --> */}
                    <label for="cc-name" className="form-label">Nome no cartão</label>
                    <input type="text" className="form-control" id="cc-name" required />
                    <small className="text-muted">Nome  exibido no cartão</small>
                    <div className="invalid-feedback">Nome Obrigatório</div>
                </div>

                <div className="col-md-6">
                    {/* <!-- Número do cartão --> */}
                    <label for="cc-number" className="form-label">Nº Cartão de Crédito</label>
                    <InputMask mask="9999 9999 9999 9999" className="form-control" id="cc-number" required />
                    <div className="invalid-feedback">Número do Cartão Obrigatório</div>
                </div>
                <div className="col-md-9">
                    {/*  <!-- CPF do titular --> */}
                    <label for="cpf-titular" className="form-label">CPF do Titular do Cartão</label>
                    <InputMask mask="999.999.999-99 " className="form-control" id="cpf-titular" required />
                    <div className="invalid-feedback">Número do Cartão Obrigatório</div>
                </div>
                <div className="col-3 ">
                    {/* <!-- vencimento do cartão --> */}
                    <label for="bandeira-card" className="form-label col-12">Bandeira</label>
                    <img src={iconNu} className="iconCard" />
                    <div className="invalid-feedback">Cartão inválido</div>
                </div>
                <div className="col-md-3">
                    {/* <!-- vencimento do cartão --> */}
                    <label for="cc-expiration" className="form-label">Vencimento</label>
                    <InputMask mask="99/99" className="form-control" id="cc-expiration" required />
                    <div className="invalid-feedback">Data de Expiração Obrigatória</div>
                </div>
                <div className="col-md-2">
                    <label for="card-cvv" className="form-label">CVV</label>
                    <InputMask mask="999" className="form-control" id="card-cvv" required />
                    <div className="invalid-feedback">Codigo de seguranção Obrigatório</div>
                </div>
                <div className="col-md-6 d-grid gy-2">
                    <label for="parcela" className="col-12">Parcelar em</label>
                    <select id="parcela" required>
                        <option value="">Selecione a parcela...</option>
                        <option value="1">1x </option>
                        <option value="2">2x</option>
                        <option value="3">3x</option>
                        <option value="4">4x</option>
                        <option value="5">5x</option>
                        <option value="6">5x</option>
                    </select>
                    <div className="invalid-feedback">Selecione pelo menos 1x</div>
                </div>
            </div>
        )
    }



    return (
        <>
            <Header />
            <div className="container mt-3 checkout-style mb-4 ">
                <Title label="Checkout" />
                <form>
                    <div className="row ">
                        <div className="col-12 col-sm-6 border ">
                            <h4 className="mb-1 mt-2">Dados de Entrega</h4>

                            {/*  <!--************* Parte esquerda da pagina começo  *********************--> */}
                            <form className="needs-validation" >
                                <div className="row  g-3">
                                    <h5 className="title-subs mt-4"> selecione o endereço</h5>
                                    {listEnderecos()}

                                    {/*  <!-- ADICIONAR NOVO ENDEREÇO --> */}
                                    <ModalEndereco lista={listEnderecos} get={getEndereco} />
                                    <hr className="my-2" />
                                    <h4 className="mb-1 "> Frete</h4>
                                    {/* <div className="col-12"> */}
                                    <label>Opções de Frete para {entrega.cep} </label>
                                    {/*  <!-- opçes de frete --> */}
                                    <div className="col-12 ">
                                    { opcoesFrete()  }
                                    </div>
                                    {/* </div> */}
                                </div>
                            </form>
                            <hr className="my-2 mt-2" />
                            {/*  <!--COMEÇOS CUPOM DE DESCONTO --> */}
                            <h4 className="mb-3 mt-3 ">Cupom de Desconto</h4>
                            <form className="border p-2">
                                <div className="input-group d-grid gy-2">
                                    <input type="text" className="form-control w-100 mb-2" placeholder="Código promocional" />
                                    <Button none success label="Resgatar" />
                                </div>
                                {/* <span className="campo-obrigatório mt-1" >Desconto aplicado! </span> */}
                            </form>
                            {/*  <!-- FIM CUPOM DE DESCONTO --> */}
                            {/*  <!--************* FIM esquerda da pagina começo  *********************--> */}

                        </div>
                        {/*  <!--************* COMEÇO DIREITA da pagina começo  *********************--> */}
                        <div className="col-12 col-sm-6 order-md-last border mb-3">

                            <Cart />

                            <hr className="my-2" />
                            <div className="row">
                                <h5> Selecione um Cartão Salvo</h5>
                                <AccordionCart
                                    bandeira='Bandeira'
                                    num='****-****-****-*000'
                                    nome='ved Alimentos'
                                    dia={2} ano={2022} />
                                <AccordionCart
                                    bandeira='Bandeira'
                                    num='****-****-****-*000'
                                    nome='ved Alimentos'
                                    dia={2} ano={2022} />
                                <div>
                                    <hr className="my-2" />
                                    {/*  <!--************* BEGIN PAGAMENTO *********************--> */}
                                    <h4 className="mb-2">Pagamento</h4>
                                    <div className="my-3">
                                        {/*  <!-- OPÇOES DE PAGAMENTOS --> */}

                                        <RadioBox onClick={() => setPagamento({
                                            card: false,
                                            pix: false,
                                            boleto: false,
                                            cpfBoleto: true

                                        })} label="Boleto" id='boleto' name="1" />
                                        <RadioBox onClick={() => setPagamento({
                                            card: true,
                                            pix: false,
                                            boleto: false,
                                            cpfBoleto: false

                                        })} label="Cartão de Crédito/Débito" id="card" name="1" />
                                        <RadioBox onClick={() => setPagamento({
                                            card: false,
                                            pix: true,
                                            boleto: false,
                                            cpfBoleto: false

                                        })} label="Pix" id='pix' name="1" />
                                    </div>


                                    <hr className="my-2 border" />

                                    {pagamento.boleto ? this.preBoleto() : ""}
                                    <hr className="my-4 mb-3" />
                                </div>
                                <div className="d-grid gy-2">
                                    <Button label="Finalizar Pedido" card link="/orderSucess" success />
                                </div>

                            </div>
                        </div>
                    </div>
                </form>
                {/*  <!--************* END PAGAMENTO   *********************--> */}
            </div>
            <Footer />
        </>
    )

}

export default Checkout;