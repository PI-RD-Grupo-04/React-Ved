import React, { Component } from 'react'
import './Checkout.css'
import AddressInfo from '../../components/addressInfo/AddressInfo'
import Header from '../../components/header/Header'
import Footer from '../../components/footer/Footer'
import ItemCart from '../../components/itemCardCheckout/itemCartCheckout'
import AccordionCart from '../../components/accordionCart/AccordionCart'



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
                    <h1 className="mb-2 text-center title-main">Checkout</h1>
                    <form>
                        <div className="row ">
                            <div className="col-12 col-sm-6 border ">
                                <h4 className="mb-3 ">Dados de Entrega</h4>
                                <div className=" mb-3">
                                    {/*  <!--************* Parte esquerda da pagina começo  *********************--> */}
                                    <form className="needs-validation" >
                                        <div className="row g-3">
                                            <h5 className="title-subs"> selecione o endereço</h5>
                                            {/* <AddressInfo /> */}


                                            {/*  <!-- ADICIONAR NOVO ENDEREÇO --> */}
                                            {/*  <!-- DIVISÃO DOS BUTTONS --> */}
                                            <div className="row mt-1">
                                                {/*  <!-- BUTTON DO MODAL --> */}
                                                <div className="col-12 col-md-6">
                                                    <button type="button" className="btn btn-success" data-bs-toggle="modal" data-bs-target="#exampleModal">
                                                        Cadastrar Novo Endereço
                                                    </button>
                                                </div>
                                            </div>

                                            {/*  <!-- ****************** CAMPO DO MODAL ****************** --> */}
                                            <div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel"
                                                aria-hidden="true">
                                                <div className="modal-dialog">
                                                    <div className="modal-content">
                                                        <div className="modal-header">
                                                            <h5 className="modal-title" id="exampleModalLabel">Novo Endereço de Entrega
                                                            </h5>
                                                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                                        </div>
                                                        <div className="modal-body">
                                                            {/*  <!-- CORPO DO MODAL PARA CADASTRAR ENDEREÇOS --> */}
                                                            <div className="row border  pb-3 pt-3">
                                                                <div className="row ">
                                                                    {/* <!-- campo Rua --> */}
                                                                    <div className="col-12">
                                                                        <div className="form-group form-title" >
                                                                            <label for="Rua" className="form-label">Rua:</label>
                                                                            <input type="text" className="form-control" id="Rua" placeholder="" required />
                                                                            <div className="invalid-feedback">Apenas Letras</div>
                                                                        </div>
                                                                    </div>
                                                                    {/*  <!--**campo Número * --> */}
                                                                    <div className="col-12">
                                                                        <div className="form-group form-title" >
                                                                            <label for="N°" className="form-label">N°:</label>
                                                                            <input type="text" className="form-control" id="N°" placeholder="" required />
                                                                            <div className="invalid-feedback">Apenas Números</div>
                                                                        </div>
                                                                        {/*  <!--**Campo Complemento * --> */}
                                                                        <div className="col-12">
                                                                            <div className="form-group form-title" >
                                                                                <label for="Complemento" className="form-label">Complemento:</label>
                                                                                <input type="text" className="form-control" id="Complemento" placeholder="" required />
                                                                                <div className="invalid-feedback">Apenas Letras </div>
                                                                            </div>
                                                                        </div>
                                                                        <div className="form-group form-title" >
                                                                            <label for="CEP" className="form-label">CEP:</label>
                                                                            <input type="text" className="form-control" id="CEP" placeholder="" required />
                                                                            <div className="invalid-feedback">Apenas Números</div>
                                                                        </div>
                                                                        <div className="form-group form-title" >
                                                                            <label for="Bairro" className="form-label">Bairro:</label>
                                                                            <input type="text" className="form-control" id="Bairro" placeholder="" required />
                                                                            <div className="invalid-feedback">Apenas Letras</div>
                                                                        </div>
                                                                        <div className="form-group form-title" >
                                                                            <label for="Cidade" className="form-label">Cidade:</label>
                                                                            <input type="text" className="form-control" id="Cidade" placeholder="" required />
                                                                            <div className="invalid-feedback">Apenas Letras</div>
                                                                        </div>
                                                                        <div className="form-group form-title" >
                                                                            <label for="Estado" className="form-label">Estado:</label>
                                                                            <input type="text" className="form-control" id="Estado" placeholder="" required />
                                                                            <div className="invalid-feedback">Apenas Letras</div>
                                                                        </div>
                                                                        {/* <!-- FIM DO CORPO DO MODAL --> */}
                                                                        <div className="modal-footer justify-content-between">
                                                                            <button type="button" className="btn btn-danger" data-bs-dismiss="modal">Cancelar</button>
                                                                            <button type="button" className="btn btn-success">Salvar</button>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            {/*  <!-- ******* FIM DO MODAL ******* --> */}
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

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

                                            <h4 className="mb-1 ">Calculo de Frete</h4>
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
                                    </form>

                                    <hr className="my-2" />
                                    {/*  <!--COMEÇOS CUPOM DE DESCONTO --> */}
                                    <h4 className="mb-3  ">Cupom de Desconto</h4>
                                    <form className="border p-2">
                                        <div className="input-group">
                                            <input type="text" className="form-control" placeholder="Código promocional" />
                                            <button type="submit" className="btn btn-success">Resgatar</button>
                                        </div>
                                        <span className="campo-obrigatório mt-1" >Desconto aplicado! </span>
                                    </form>
                                    {/*  <!-- FIM CUPOM DE DESCONTO --> */}
                                </div>
                                {/*  <!--************* FIM esquerda da pagina começo  *********************--> */}

                            </div>
                            {/*  <!--************* COMEÇO DIREITA da pagina começo  *********************--> */}
                            <div className="col-12 col-sm-6 order-md-last border mb-3">

                                {/*  <!-- BEGIN SEUS PRODUTOS --> */}
                                <h4 className="d-flex justify-content-between align-items-center mb-3 mt-2">
                                    <span className="">Seu carrinho</span>
                                    <span className="badge bg-success rounded-pill">3</span>
                                </h4>
                                <ul className="list-group mb-3">
                                    <ItemCart nome="teste" descricao="aaa" price={2.90} />
                                    <ItemCart />

                                </ul>
                                <a href="./cesta.html" className=" btn btn-success mb-1 mt-1 " type="submit">Volta a Cesta</a>

                                <hr className="my-2" />
                                <div className="row">
                                    <h5> Selecione um Cartão Salvo</h5>
                                    <div className="accordion" id="accordionExample">
                                        <AccordionCart
                                            bandeira='Bandeira'
                                            num='****-****-****-*000'
                                            nome='ved Alimentos'
                                            dia={2} ano={2022} />
                                    </div>
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
                                                <small className="text-muted">Nome completo conforme exibido no cartão</small>
                                                <div className="invalid-feedback">Nome Obrigatório</div>
                                            </div>

                                            <div className="col-md-6">
                                                {/* <!-- Número do cartão --> */}
                                                <label for="cc-number" className="form-label">Número do Cartão de Crédito</label>
                                                <input type="text" className="form-control" id="cc-number" placeholder="" required />
                                                <div className="invalid-feedback">Número do Cartão Obrigatório</div>
                                            </div>
                                            <div className="col-md-9">
                                                {/*  <!-- CPF do titular --> */}
                                                <label for="cpf-titular" className="form-label">CPF do Titular do Cartão</label>
                                                <input type="text" className="form-control" id="cpf-titular" placeholder="" required />
                                                <div className="invalid-feedback">Número do Cartão Obrigatório</div>
                                            </div>
                                            <div className="col-md-3">
                                                {/* <!-- vencimento do cartão --> */}
                                                <p for="bandeira-card" className="form-label">Bandeira</p>
                                                {/* <img src="../images/Footer/icon-visa.png" width="80px"> */}
                                                <div className="invalid-feedback">Cartão inválido</div>
                                            </div>
                                            <div className="col-md-3">
                                                {/* <!-- vencimento do cartão --> */}
                                                <label for="cc-expiration" className="form-label">Vencimento</label>
                                                <input type="text" className="form-control" id="cc-expiration" placeholder="" required />
                                                <div className="invalid-feedback">Data de Expiração Obrigatoria</div>
                                            </div>
                                            <div className="col-md-2">
                                                <label for="card-cvv" className="form-label">CVV</label>
                                                <input type="text" className="form-control" id="card-cvv" placeholder="" required />
                                                <div className="invalid-feedback">Codigo de seguranção Obrigatório</div>
                                            </div>
                                            <div className="col-md-7">
                                                <p>Parcelar em</p>
                                                <select required>
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

                                        <hr className="my-4" />

                                    </div>
                                    <a href="./SucessoComprar.html" className="w-100 btn btn-success btn-lg  mb-3" type="submit">Continue
                                        para finalizar a
                                        compra</a>
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