import './Cart.css'
import ItemCart from '../itemCardCheckout/itemCartCheckout'
import React from 'react'

function Cart(props) {

    function showPrice(number)  {
        let priceConverted = new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(number)
        
        return (
        <>
        <h6 className="font-price">{priceConverted}</h6>
        </>
        )
        
        }

    

    function listar() {
        return props.cart.map((item) => {
            return (
                <ItemCart key={item.id} nome={item.nomeProduto} descricao={item.descricao} price={item.preco} />
            )
        })
    }

    function listarCupom() {
        if (props.cupomValid) {
            return (
                <ItemCart promo cupom key={props.cupom.id} nome={props.cupom.descricao} descricao='Cupom Promo Ved' price={props.cupom.porcentagemDesconto} />
            )
        } else {
            <></>
        }
    }

    function calcularTotal() {
        let valorT = props.valor
        let porcento = props.cupom.porcentagemDesconto ? props.cupom.porcentagemDesconto : 0
        let valorFinal = ((porcento / 100) * valorT)
        return (
            <>{showPrice(valorT - valorFinal)} </>
        )
    }


    return (
        <>
            <div>
                {/*  <!-- BEGIN SEUS PRODUTOS --> */}
                <h4 className="d-flex justify-content-between align-items-center mb-3 mt-2">
                    <span>Seu carrinho</span>
                    <span className="badge bg-success rounded-pill">{props.quant}</span>
                </h4>
                <ul className="list-group mb-3">
                    {listar()}
                    {listarCupom()}
                    <div>
                        <li className="list-group-item list1 d-flex justify-content-between lh-sm">
                            <div>
                                <h5 className="my-0">Total</h5>
                            </div>
                            <span className="text-muted">{calcularTotal()}</span>
                        </li>
                    </div>
                </ul>
            </div>
        </>
    )
}

export default Cart