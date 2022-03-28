import React, { Component } from 'react'
import './Checkout.css'
import AddressInfo from '../../components/addressInfo/AddressInfo'
import Header from '../../components/header/Header'
import Footer from '../../components/footer/Footer'
import ItemCart from '../../components/itemCardCheckout/itemCartCheckout'
import AccordionCart from '../../components/accordionCart/AccordionCart'
import ModalEndereco from '../../components/modalEndereco/ModalEndereco'
import Button from '../../components/button/Button'
import iconNu from '../../components/asserts/imagens/Footer/iconNu.png'
import CheckInput from '../../components/checkInput/CheckInput'
import RadioBox from '../../components/radioBox/RadioBox'
import qrcode from '../../components/asserts/imagens/qrcode.jpg'
import Title from '../../components/title/Title'

class Checkout extends Component {

    state = {
        paymentForm: {
            card: false,
            pix: false,
            boleto: false,
            cpfBoleto: false

        }
    }



    pix = () => {
        return (<div className="row gy-3 ">
            <div className="col-12 d-flex flex-column align-items-center justify-content-center">
                <h2 className="text-center mb-2" >QR code</h2>
                <img src={qrcode}
                    width="120px" />
                <h4>ou copie o código: </h4>
                <div className="container mb-3">
                    <input type="text" disabled className="w-100 pix text-center" value="73fg7g6s7t65cxb78cv9c5x356h78dx4345ds6gs87vcx7" />
                </div>
            </div>
        </div>)
    }

    boleto = () => {
        return (
            <div className="row gy-3 ">
                <div className="col-12 d-flex flex-column align-items-center justify-content-center">
                    <h2 className="text-center mb-2">Boleto gerado </h2>
                    <textarea className="boleto border" disabled >34191.79001 01043.510047 91020.150008 7 89250026000</textarea>
                    <h4>ou </h4>
                    <div className="container d-grid gy-2 mb-3">
                       <a className="btn btn-success" target="_blank" href="http://www.sicadi.com.br/mhouse/boleto/boleto3.php?numero_banco=341-7&local_pagamento=PAG%C1VEL+EM+QUALQUER+BANCO+AT%C9+O+VENCIMENTO&cedente=VED+-+ALIMENTOS+ORG%C2NICOS+&data_documento=25%2F03%2F2022&numero_documento=DF+00113&especie=&aceite=N&data_processamento=25%2F03%2F2022&uso_banco=&carteira=179&especie_moeda=Real&quantidade=2&valor=1900&vencimento=25%2F03%2F2022&agencia=0049&codigo_cedente=10201-5&meunumero=00010435&valor_documento=260%2C00&instrucoes=Taxa+de+visita+de+suporte%0D%0AAp%F3s+o+vencimento+R%24+0%2C80+ao+dia&mensagem1=&mensagem2=&mensagem3=ATEN%C7%C3O%3A+N%C3O+RECEBER+AP%D3S+15+DIAS+DO+VENCIMENTO&sacado=&Submit=Enviar">Acesse aqui</a>
                    </div>
                  
                </div>
            </div>
        )
    }


    ativaBoleto = () => this.setState({
        paymentForm: {
            card: false,
            pix: false,
            boleto: true,
            cpfBoleto: false
        }
    })



    preBoleto = () => {

        return (
            <div class="row gy-3 ">

                <div class="col-12 d-flex flex-column align-items-center justify-content-center">
                    <h2 class="text-center mb-2">Informações para o Boleto</h2>
                    <label for="nomeboleto">Nome:</label>
                    <input type="text" id="nomeboleto" class="form-control" />
                    <label for="nomecpf">CPF:</label>
                    <input type="text" id="cpfboleto" class="form-control" />

                    <div class="container mt-4 d-grid gy-2 mb-3"  onClick={this.ativaBoleto}>
                        <Button success label="gera boleto" />
                    </div>
                </div>

            </div>
        );
    }


    creditcard = () => {
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
                    <input type="text" className="form-control" id="cc-number" required />
                    <div className="invalid-feedback">Número do Cartão Obrigatório</div>
                </div>
                <div className="col-md-9">
                    {/*  <!-- CPF do titular --> */}
                    <label for="cpf-titular" className="form-label">CPF do Titular do Cartão</label>
                    <input type="text" className="form-control" id="cpf-titular" required />
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
                    <input type="text" className="form-control" id="cc-expiration" required />
                    <div className="invalid-feedback">Data de Expiração Obrigatória</div>
                </div>
                <div className="col-md-2">
                    <label for="card-cvv" className="form-label">CVV</label>
                    <input type="text" className="form-control" id="card-cvv" required />
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




    render() {
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
                                    <div className="row g-3">
                                        <h5 className="title-subs mt-4"> selecione o endereço</h5>
                                        <AddressInfo id={1} av="Santos" n="230" complement="Casa" district="Vila São Paulo" zipcode="11740-000" city="Santos" states="Sao Paulo" country="Brasil" />
                                        <AddressInfo id={2} av="Condessa de Vimieiros" n="345" complement="Apto" district="Centro" zipcode="11740-000" city="Itanhaém" states="Sao Paulo" country="Brasil" />


                                        {/*  <!-- ADICIONAR NOVO ENDEREÇO --> */}

                                        <ModalEndereco />

                                        <hr className="my-2" />
                                        <CheckInput label="O endereço de entrega é igual ao
                                                meu
                                                endereço de cobrança?" id="same-address" />
                                        <CheckInput label="Guarde esta informação para a
                                                próxima
                                                vez." id="save-info" />

                                        <hr className="my-2" />

                                        <h4 className="mb-1 ">Cálculo de Frete</h4>
                                        {/* <div className="col-12"> */}
                                        <div className="col-2 mt-2">
                                            <h6>Simular Frete: </h6>
                                        </div>

                                        <label for="frete-comum">Frete para ******-** </label>
                                        <span className="msg-nome  msg-success  disblock valid-nome">ok</span>
                                        <span className="campo-obrigatório disblock" >*Campo Obrigatório</span>
                                        <span className="campo-obrigatório disblock" >Valor: </span>
                                        <span className="" id="fretes" >Opções para entrega: </span>
                                        {/*  <!-- opçes de frete --> */}
                                        <div className="col-12 ">
                                            <CheckInput id="comum" label="entrega comum:" frete="10,00" />
                                            <CheckInput id="express" label="entrega express:" frete="15,50" />

                                        </div>
                                        {/* </div> */}
                                    </div>
                                </form>

                                <hr className="my-2" />
                                {/*  <!--COMEÇOS CUPOM DE DESCONTO --> */}
                                <h4 className="mb-3  ">Cupom de Desconto</h4>
                                <form className="border p-2">
                                    <div className="input-group d-grid gy-2">
                                        <input type="text" className="form-control w-100 mb-2" placeholder="Código promocional" />
                                        <Button none success label="resgatar" />
                                    </div>
                                    <span className="campo-obrigatório mt-1" >Desconto aplicado! </span>
                                </form>
                                {/*  <!-- FIM CUPOM DE DESCONTO --> */}
                                {/*  <!--************* FIM esquerda da pagina começo  *********************--> */}

                            </div>
                            {/*  <!--************* COMEÇO DIREITA da pagina começo  *********************--> */}
                            <div className="col-12 col-sm-6 order-md-last border mb-3">
                                <div>
                                    {/*  <!-- BEGIN SEUS PRODUTOS --> */}
                                    <h4 className="d-flex justify-content-between align-items-center mb-3 mt-2">
                                        <span className="">Seu carrinho</span>
                                        <span className="badge bg-success rounded-pill">2</span>
                                    </h4>
                                    <ul className="list-group mb-3">
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
                                    </ul>
                                </div>

                                <hr className="my-2" />
                                <div className="row">
                                    <h5> Selecione um Cartão Salvo</h5>
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

                                            <RadioBox onClick={() => this.setState({
                                                paymentForm: {
                                                    card: false,
                                                    pix: false,
                                                    boleto: false,
                                                    cpfBoleto: true

                                                }
                                            })} label="Boleto" id='boleto' name="1" />
                                            <RadioBox onClick={() => this.setState({
                                                paymentForm: {
                                                    card: true,
                                                    pix: false,
                                                    boleto: false,
                                                    cpfBoleto: false
                                                }
                                            })} label="cartão de credito/debito" id="card" name="1" />
                                            <RadioBox onClick={() => this.setState({
                                                paymentForm: {
                                                    card: false,
                                                    pix: true,
                                                    boleto: false,
                                                    cpfBoleto: false
                                                }
                                            })} label="Pix" id='pix' name="1" />
                                        </div>


                                        <hr className="my-2 border" />
                                        {this.state.paymentForm.card ? this.creditcard() : ""}
                                        {this.state.paymentForm.pix ? this.pix() : ""}
                                        {this.state.paymentForm.boleto ? this.boleto() : ""}
                                        {this.state.paymentForm.cpfBoleto ? this.preBoleto() : ""}
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
}

export default Checkout;