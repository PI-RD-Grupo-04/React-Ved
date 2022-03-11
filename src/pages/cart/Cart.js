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
                                        <h6>Simular Frete: </h6>
                                    </div>
                                    <div className="col-sm-12 col-lg-1"></div>
                                    <div className="col-sm-12 col-lg-6 inputcep">
                                        <input type="text" className="form-control" id="cep" required />
                                        <span className="msg-nome  msg-error error-nome" id='cep-erro' >Apenas
                                            Números</span>                       
                                    </div>
                                </div>
                            
                                {/* <!--cep--> */}
                                <div className="row">
                                    <div className="col-sm-12 col-lg-4">
                                        <p>Entrega Comum: R$ 45,50</p>
                                    </div>
                                    <div className="col-sm-12 col-lg-1"></div>

                                    <div className="col-sm-12 col-lg-3">
                                        <h6>Quantidade Total De Itens: 5</h6>
                                    </div>

                                    <div className="col-sm-12 col-lg-1"></div>
                                    <div className="col-sm-12 col-lg-3">
                                        <h6>Total Produto: R$ 985,80</h6>
                                    </div>

                                </div>

                                    <div className="row">
                                        <div className="col-sm-12 col-lg-4">
                                            <p>Entrega Flex: R$ 60,50</p>
                                        </div>
                                        <div className="col-sm-12 col-lg-4"></div>
                                        <div className="col-sm-12 col-lg-4"></div>
                                        <div className="col-sm-12 col-lg-3">
                                            <h6>Total Com Frete: R$ 1.031,30</h6>
                                        </div>
                                    </div>
                            </div>

                            <div className="text-end">
                                <h4 className="text-dark mb-3">
                                    Valor Total: R$ 1.031,30
                                </h4>

                                <div className="row">
                                    <div className="col-sm-12 col-lg-6"></div>
                                    <div className="col-sm-12 col-lg-6">
                                        <Button card plans delete  label='Continuar Comprando'/>
                                    </div>
                                    
                                </div>
                                    
                                <div className="row">
                                    <div className="col-sm-12 col-lg-6"></div>
                                    <div className="col-sm-12 col-lg-6">
                                        <Button card plans success  label='Finalizar Compra'/>
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