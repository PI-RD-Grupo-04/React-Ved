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
import Title from '../../components/title/Title'

class Checkout extends Component {

    state = {
        nome: ''
    }
    //para mudar o estado de nome use: this.setState({nome: 'Novo Nome'})

    render() {
        return (
            <>
                <Header />
                <div className="container mt-3 checkout-style mb-4 ">
                <Title label="Checkout"/>
                    
                    <form>
                        <div className="row ">
                            <div className="col-12 col-sm-6 border ">
                                <h4 className="mb-1 mt-2">Dados de Entrega</h4>

                                {/*  <!--************* Parte esquerda da pagina começo  *********************--> */}
                                <form className="needs-validation" >
                                    <div className="row g-3">
                                        <h5 className="title-subs mt-4"> selecione o endereço</h5>
                                        <AddressInfo av= "Santos" n= "230" complement= "Casa" district= "Vila São Paulo" zipcode= "11740-000" city= "Santos" states= "Sao Paulo" country= "Brasil" />
                            <AddressInfo av= "Condessa de Vimieiros" n= "345" complement= "Apto" district= "Centro" zipcode= "11740-000" city= "Itanhaém" states= "Sao Paulo" country= "Brasil" />


                                        {/*  <!-- ADICIONAR NOVO ENDEREÇO --> */}

                                        <ModalEndereco />

                                        <hr className="my-2" />

                                        <div className="form-check">
                                            <input type="checkbox" className="form-check-input" id="same-address" />
                                            <label className="form-check-label" for="same-address">O endereço de entrega é igual ao
                                                meu
                                                endereço de cobrança?
                                            </label>
                                        </div>
                                        <div className="form-check">
                                            <input type="checkbox" className="form-check-input" id="save-info" />
                                            <label className="form-check-label" for="save-info">Guarde esta informação para a
                                                próxima
                                                vez.
                                            </label>
                                        </div>
                                        <hr className="my-2" />

                                        <h4 className="mb-1 ">Cálculo de Frete</h4>
                                        {/* <div className="col-12"> */}
                                            <div className="col-2 mt-2">
                                                <h6>Simular Frete: </h6>
                                            </div>

                                            <div className="col-1"></div>

                                            <div className="col-6 inputcep">
                                                <input type="text" className="form-control" id="cep" required />
                                            </div>
                                            <label for="frete-comum">Frete para <b>******-**</b></label>
                                            <span className="msg-nome  msg-success  disblock valid-nome">ok</span>
                                            <span className="campo-obrigatório disblock" >*Campo Obrigatório</span>
                                            <span className="campo-obrigatório disblock" >Valor: </span>
                                            <span className="" id="fretes" >Formas: </span>
                                            {/*  <!-- opçes de frete --> */}
                                            <div className="col-12 ">
                                                <input type="radio" id="frete-comum" name="Frete" className="form-check-input" value="comum" />
                                                <label for="frete-comum">Frete Comum: 12,00</label>
                                             
                                                <hr className="my-2" />

                                                <h4 className="mb-1 ">Cálculo de Frete</h4>
                                                <div className="col-12">
                                                    <label for="frete-comum">Frete para <b className="">12390-045</b></label>
                                                    <span className="msg-nome  msg-success  disblock valid-nome">ok</span>
                                                    <span className="campo-obrigatório disblock" >*Campo Obrigatório</span>
                                                    <span className="campo-obrigatório disblock" >Valor: </span>
                                                    <span className="" id="fretes" >Formas: </span>
                                                    {/*  <!-- opçes de frete --> */}
                                                    <div className="col-12 col-sm-6">
                                                        <input type="radio" id="frete-comum" name="Frete" className="form-check-input" value="comum" />
                                                        <label for="frete-comum">Frete Comum: 12,00</label>

                                                    </div>
                                                    <div className="col-12 col-sm-6 mb-3">
                                                        <input type="radio" id="frete-flex" name="Frete" className="form-check-input" value="flex" />
                                                        <label for="frete-flex">Frete Flex: 18,99</label>

                                                    </div>
                                                </div>
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
                                        <ItemCart nome="laranja" descricao="12 unid." price="12,90" />




                                    </ul>
                                    
                                    <Button link="/cart" cart card plans delete label='volta a cesta'/>

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
                                            <div className="form-check">
                                                <input id="credit" name="paymentMethod" type="radio" className="form-check-input" checked="" required />
                                                <label className="form-check-label" for="credit">Cartão de crédito</label>
                                            </div>
                                            <div className="form-check">
                                                <input id="debit" name="paymentMethod" type="radio" className="form-check-input" required />
                                                <label className="form-check-label" for="debit">Cartão de débito</label>
                                            </div>
                                            <div className="form-check">
                                                <input id="paypal" name="paymentMethod" type="radio" className="form-check-input" required />
                                                <label className="form-check-label" for="pix">Pix</label>
                                            </div>
                                            <div className="form-check">
                                                <input id="paypal" name="paymentMethod" type="radio" className="form-check-input" required />
                                                <label className="form-check-label" for="boleto">Boleto</label>
                                            </div>
                                        </div>
                                        <hr className="my-2 border" />
                                        <div className="row gy-3">
                                            <div className="col-md-6">
                                                {/* <!-- nome do titular do cartão --> */}
                                                <label for="cc-name" className="form-label">Nome no cartão</label>
                                                <input type="text" className="form-control" id="cc-name" placeholder="" required />
                                                <small className="text-muted">Nome  exibido no cartão</small>
                                                <div className="invalid-feedback">Nome Obrigatório</div>
                                            </div>

                                            <div className="col-md-6">
                                                {/* <!-- Número do cartão --> */}
                                                <label for="cc-number" className="form-label">Nº Cartão de Crédito</label>
                                                <input type="text" className="form-control" id="cc-number" placeholder="" required />
                                                <div className="invalid-feedback">Número do Cartão Obrigatório</div>
                                            </div>
                                            <div className="col-md-9">
                                                {/*  <!-- CPF do titular --> */}
                                                <label for="cpf-titular" className="form-label">CPF do Titular do Cartão</label>
                                                <input type="text" className="form-control" id="cpf-titular" placeholder="" required />
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
                                                <input type="text" className="form-control" id="cc-expiration" placeholder="" required />
                                                <div className="invalid-feedback">Data de Expiração Obrigatória</div>
                                            </div>
                                            <div className="col-md-2">
                                                <label for="card-cvv" className="form-label">CVV</label>
                                                <input type="text" className="form-control" id="card-cvv" placeholder="" required />
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

                                        <hr className="my-4 mb-3" />

                                    </div>
                                    <div className="d-grid gy-2">
                                        <Button label="Finalizar Pedido"  link="/orderSucess" success />
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