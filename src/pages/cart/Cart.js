import './Cart.css'
import Header from '../../components/header/Header'
import Footer from '../../components/footer/Footer'
import ItemBasket from '../../components/itemBasket/ItemBasket'
import Button from '../../components/button/Button'

function Cart(props) {
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
                        <ItemBasket valor={1} nome="larissa" />
                        <ItemBasket valor={2} nome="will" />
                        <div className="container mb-3 border">
                            <div className="row mt-3 mb-1">
                                <div className="col-sm-12 col-lg-2 mt-2">
                                    <h5>Simular Frete: </h5>
                                </div>
                                <div className="col-sm-12 col-lg-5 inputcep">
                                    <input type="text" className="form-control" id="cep" required />
                                </div>
                                <div className="col-sm-12 col-lg-5"></div>
                            </div>

                            {/* <!--cep--> */}
                            <div className="row">
                                <div className="col-sm-12 col-lg-4">
                                    <h5>Entrega Comum: R$ 45,50</h5>
                                </div>                               
                                <div className="col-sm-12 col-lg-4">
                                    <h5>Quantidade Total De Itens: 5</h5>
                                </div>

                                <div className="col-sm-12 col-lg-1"></div>
                                <div className="col-sm-12 col-lg-3">
                                    <h5>Total Produto: R$ 985,80</h5>
                                </div>

                            </div>

                            <div className="row">
                                <div className="col-sm-12 col-lg-4">
                                    <h5>Entrega Flex: R$ 60,50</h5>
                                </div>
                                <div className="col-sm-12 col-lg-4"></div>
                                <div className="col-sm-12 col-lg-1"></div>
                                <div className="col-sm-12 col-lg-3">
                                    <h5>Total Com Frete: R$ 1.031,30</h5>
                                </div>
                            </div>
                        </div>

                        <div className="text-end">
                            <h5 className="text-dark mb-3">
                                Valor Total: R$ 1.031,30
                            </h5>                          
                            <div className="row">
                                <div className="col-sm-12 col-lg-6"></div>
                                <div className="col-sm-12 col-lg-6">
                                    <Button card plans delete label='Continuar Comprando' />
                                </div>

                            </div>

                            <div className="row">
                                <div className="col-sm-12 col-lg-6"></div>
                                <div className="col-sm-12 col-lg-6">
                                    <Button card plans success label='Finalizar Compra' />
                                </div>
                            </div>
                        </div>
                    </div>
                </main>
            </div>

            {/* <!--***************************************CESTA END***********************************--> */}

            <Footer />

        </>
    )
}

export default Cart