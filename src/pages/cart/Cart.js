import './Cart.css'
import Header from '../../components/header/Header'
import Footer from '../../components/footer/Footer'
import Button from '../../components/button/Button'
import ItemBasket from '../../components/itemBasket/ItemBasket'
import InputMask from 'react-input-mask';
import CartContext from '../../context/Cart.provider'
import Title from '../../components/title/Title'
import React, { useEffect, useContext } from 'react'

function Cart() {
    const { carrinho, listarCarrinho, valorTotal, total } = useContext(CartContext)

    const listaItem = carrinho
    useEffect(() => {
        listarCarrinho()
        listar()
        total()
    }, [])

    function listar() {
        if (carrinho.length == 0) {
            return <li className="text-center">Seu carrinho está vazio</li>
        }
        return carrinho.map((item) => {
            return (
                <li key={item.id}>
                    <ItemBasket id={item.id} img={item.url} product={item} valor={item.preco} descricao={item.descricao} qty={item.quantidade} nome={item.nomeProduto} />
                </li>
            )
        })
    }

    function showPrice(number) {
        let priceConverted = new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(number)
        return (
            <>
                <h6 className="">{priceConverted}</h6>
            </>
        )
    }

    return (
        <>
            <Header />
            {/* <!-- Titulo --> */}
            <div className="container">
                <div className="container">
                    <div className="row  mb-3 text-center mt-3">
                        <Title label='Sua cesta' ></Title>
                    </div>
                    <ul>
                        {listar()}
                    </ul>

                    <div className="text-end">
                        <h4 className="text-dark   mt-3 mb-3">
                            Valor Total:  {showPrice(valorTotal)}
                        </h4>

                        <div className="container mb-3 border">
                            <div className="row mt-3 mb-1 d-flex align-items-center justify-content-start">
                                <div className="col-12 col-sm-4 text-left">
                                    <h4>Simule o frete:</h4>
                                    <InputMask mask="99999-999" placeholder="Digite o CEP da entrega" className="form-control" id="cep" required />
                                </div>
                            </div>

                            {/* <!--cep--> */}
                            <div className="row">

                                <div className="mt-1 col-sm-12 col-lg-4">
                                    <p>Entrega Comum: {showPrice(45, 50)} </p>
                                    <p>Entrega Flex: {showPrice(65, 50)}</p>

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