import './Basket.css'
import Header from '../../components/header/Header'
import Footer from '../../components/footer/Footer'
import ItemBasket from '../../components/itemBasket/ItemBasket'

function Basket(props) {

    return (
        <>
            <Header />
            {/* <!-- Titulo --> */}
            <div className="container">
                <main className="flex-fill">
                    <div className="container">
                        <div className="row mt-3 mb-3 text-center">
                            <h1>Sua cesta</h1>
                        </div>

                        <ul className="list-group mb-3">

                            <ItemBasket />
                            <ItemBasket />
                            <ItemBasket />
                            <ItemBasket />

                            <li className="list-group-item py-3">

                                <div className="container mb-3 border">
                                    <div className="row mt-3 mb-5">
                                        <div className="col-2 mt-2">
                                            <h6>Simular Frete: </h6>
                                        </div>

                                        <div className="col-1"></div>

                                        <div className="col-6 inputcep">
                                            <input type="text" className="form-control" id="cep" required />
                                            <span className="msg-nome  msg-error error-nome" id='cep-erro' >Apenas
                                                Números</span>
                                            <span className="msg-nome  msg-success valid-nome" >Ok</span>
                                            <span className="campo-obrigatorio" >*Campo Obrigatório</span>
                                        </div>

                                    </div>
                                    {/* <!--cep--> */}

                                    <div className="row">
                                        <div className="col-4 mt-2">
                                            <p>Entrega Comum: R$ 45,50</p>
                                        </div>


                                        <div className="col-1"></div>

                                        <div className="col-3">
                                            <h6>Quantidade Total De Itens: 5</h6>
                                        </div>

                                        <div className="col-1"></div>
                                        <div className="col-3">
                                            <h6>Total Produto: R$ 985,80</h6>
                                        </div>

                                    </div>

                                    <div className="row">
                                        <div className="col-4">
                                            <p>Entrega Flex: R$ 60,50</p>
                                        </div>
                                        <div className="col-4"></div>
                                        <div className="col-1"></div>
                                        <div className="col-3">
                                            <h6>Total Com Frete: R$ 1.031,30</h6>
                                        </div>
                                    </div>
                                </div>

                                <div className="text-end">
                                    <h4 className="text-dark mb-3">
                                        Valor Total: R$ 1.031,30
                                    </h4>
                                    <a href="./index.html" className="btn btn-outline-success btn-delete mt-3">
                                        Continuar Comprando
                                    </a>
                                    <a href="./checkout.html" className="btn btn-success btn-lg ms-2 mt-3  btn-add-card">Finalizar Compra</a>
                                </div>

                            </li>
                        </ul>
                    </div>
                </main>
            </div>

            {/* <!--***************************************CESTA END***********************************--> */}

            <Footer />

        </>
    )
}

export default Basket