import './Cart.css'
import Header from '../../components/header/Header'
import Footer from '../../components/footer/Footer'
import Button from '../../components/button/Button'
import ItemBasket from '../../components/itemBasket/ItemBasket'
import InputMask from 'react-input-mask';
import InputGroup from '../../components/inputGroup/InputGroup'

function Cart(props) {


    return (
        <>
            <Header />
            {/* <!-- Titulo --> */}
            <div className="container">

                <div className="container">
                    <div className="row  mb-3 text-center mt-3">
                        <h1 className="title">Sua cesta</h1>
                    </div>
                    <ul>
                        <ItemBasket valor={10.000} qty={1} nome="abacaxi" />
                        <ItemBasket valor={13} qty={1} nome="laranja" />
                        <ItemBasket valor={10} qty={1} nome="abacaxi" />
                        <ItemBasket valor={13} qty={1} nome="laranja" />

                    </ul>


                    <div className="text-end">
                        <h4 className="text-dark   mt-3 mb-3">
                            Valor Total: R$ 1.031,30
                        </h4>

                        <div className="container mb-3 border">
                            <div className="row mt-3 mb-1 d-flex align-items-center justify-content-start">
                                <div className="col-2">
                                <h4 className="text-left" >Simule o frete:</h4>
                                </div>
                                <div className="col-12 col-sm-3  ">
                                <InputMask mask="99999-999"  placeholder="Digite o CEP da entrega"  className="form-control" id="cep" required /> 
                              
                                </div> 
                           
                            </div>

                            {/* <!--cep--> */}
                            <div className="row">
                        
                                <div className="col-sm-12 col-lg-4">
                                    <p>Entrega Comum: R$ 45,50</p>
                                    <p>Entrega Flex: R$ 65,50</p> 
                                    
                                </div>

                                <div className="row d-flex">
                                    <div className="col-sm-12 col-lg-6"></div>
                                    <div className="col-sm-12 col-lg-6 justify-content-end d-flex ">
                                        <Button link="/checkout" cart card success label='Finalizar Compra' />
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-sm-12 col-lg-6"></div>
                                    <div className="col-sm-12 col-lg-6 justify-content-end d-flex ">
                                        <Button link="/product" cart card delete label='Continuar Comprando' />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <!--***************************************CESTA END***********************************--> */}

            <Footer />
        </>
    )
}

export default Cart