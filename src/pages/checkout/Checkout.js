import React, { useState, useEffect, useContext } from 'react'
import './Checkout.css'
import AddressInfo from '../../components/addressInfo/AddressInfo'
import Header from '../../components/header/Header'
import Footer from '../../components/footer/Footer'
import AccordionCart from '../../components/accordionCart/AccordionCart'
import ModalEndereco from '../../components/modalEndereco/ModalEndereco'
import Button from '../../components/button/Button'
import iconNu from '../../components/asserts/imagens/Footer/iconNu.png'
import RadioBox from '../../components/radioBox/RadioBox'
import Title from '../../components/title/Title'
import Cart from '../../components/cart/Cart'
import axios from 'axios'
import { baseEndereco, baseFrete, baseCupom, basePedido, baseItemPedido } from '../../environments'
import ClientContext from '../../context/Client.provider'
import CartContext from '../../context/Cart.provider'
import OrderModel from '../../models/Order'
import ItemPedidoModal from '../../models/ItemPedido'
import { AiFillCheckCircle, AiOutlineCloseCircle } from "react-icons/ai";
import { baseCartao } from "../../environments";
import ModelPayCard from '../../components/modelPayCard/ModelPayCard'

function Checkout() {
    const [order, setOrder] = useState(OrderModel)


    const { client } = useContext(ClientContext)
    const { carrinho, listarCarrinho, valorTotal, qtyCarrinho, total } = useContext(CartContext)
    const [address, setAddress] = useState([])
    const [entrega, setEntrega] = useState({})
    const [idPedido, setIdPedido] = useState(0)
    const [itemPedido, setItemPedido] = useState(ItemPedidoModal)
    const [listaItemPedido, setListaItemPedido] = useState([])
    const [frete, setFrete] = useState([])
    const [freteValor, setFreteValor] = useState(0)
    const [cupomValidation, setCupomValidation] = useState(0)
    const [cupom, setCupom] = useState({})
    const [cartao, setCartao] = useState([])
    const [pagamento, setPagamento] = useState({
        card: false,
        pix: false,
        cpfBoleto: false
    })
    const cliente = 1
    console.log(order)

    useEffect(() => {
        getEndereco()
        listEnderecos()
        getCartao()
        listarCarrinho()
        total()
        dataNow()
        getCartao()
    }, [])

    const getEndereco = () => {
        axios.get(`${baseEndereco}/${cliente}/detalhes`)
            .then((response) => {
                setAddress(response.data)
                listEnderecos()
            })
            .catch((error) => {
                console.error(error.messege)
            })
    }

    function addItemPedido(idpe) {
        const lista = []
        //percorre a lista salva na memoria
        carrinho.map((value) => {
            //a cada volta, cria um objeto de item pedido e salva no array acima
            lista.push({
                quantidade: value.quantidade,
                porcentagemIcms: 1,
                valorIcms: 1,
                produto: value.id,
                pedido: idpe
            })
        })
        console.log(lista)
        // chama o ultimo metodo para finalizar 
        postItemPedido(lista)
    }

    const dataNow = () => {
        var data = new Date();
        var dia = String(data.getDate()).padStart(2, '0');
        var mes = String(data.getMonth() + 1).padStart(2, '0');
        var ano = data.getFullYear();
        let dataAtual = dia + '/' + mes + '/' + ano;
        setOrder({ ...order, cliente: cliente })
        setOrder({ ...order, data: dataAtual })
    }

    // comeco do pedido
    const postPedido = () => {
        axios.post(`${basePedido}/novo`, order)
            .then(() => {
                getPedido()
            })
            .catch((error) => {
                console.error(error.messege)
            })
    }


    //pega o ID do ultimo pedido adicionado 
    function getPedido() {
        axios.get(`${basePedido}/ultimo`)
            .then((response) => {
            console.log(response.data)
            //chama o metodo de converter os produto em "item_pedido"
            addItemPedido( response.data)
           
            })
            .catch((error) => {
                console.error(error.messege)
            })
    }

    // ultimo passo para finalizar o pedido
    const postItemPedido = (idItemPedido) => {
        axios.post(`${baseItemPedido}/novo`, idItemPedido)
            .then(() => {
                console.log("flxo finalizado")
            })
            .catch((error) => {
                console.error(error.messege)
            })
    }


    const getCupom = (valor) => {
        axios.get(`${baseCupom}/${valor}`)
            .then((response) => {
                setCupom(response.data)
                setCupomValidation(1)
            })
            .catch((error) => {
                console.error(error.messege)
                setCupomValidation(3)
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

    function ValidationCupom() {
        if (cupomValidation == 0) {
            return (<></>)
        } else if (cupomValidation == 1) {
            return (
                <div className="body-success"> <AiFillCheckCircle size="30" /> Registrado com Sucesso </div>
            )
        } else {
            return (
                <div className="body-error"> <AiOutlineCloseCircle size="30" /> Error ao Cadastrar</div>
            )
        }
    }
    const getCartao = () => {
        axios.get(`${baseCartao}/${cliente}/detalhes`)
            .then((response) => {
                setCartao(response.data)
            })
            .catch((error) => {
                console.error(error)
            })
    }

    function ofertas() {
        return cartao.map(item => {
            return (
                <div key={item.id}>
                    <div class="row mb-3 pb-3 pt-3">
                        <div class="row ">
                            <AccordionCart
                                bandeira={item.idBandeira.nome}
                                num={item.numeroCartao}
                                nome={item.titular}
                                mes={item.diaVencimento} ano={item.anoVencimento}
                            />
                        </div>
                    </div>
                </div>
            )
        })
    }

    function CartComCupom() {
        if (cupomValidation == 1) {
            return (
                <Cart frete={freteValor} quant={qtyCarrinho} cart={carrinho}
                    cupom={cupom} valor={valorTotal} cupomValid />
            )
        } else {
            return (
                <Cart frete={freteValor} quant={qtyCarrinho} cart={carrinho}
                    cupom={cupom} valor={valorTotal} />

            )
        }
    }

    function opcoesFrete() {
        return (frete.map((opcao) => {
            return (
                <div key={opcao.id} className="d-flex align-items-center justify-content-start" >
                    <RadioBox id={opcao.id} name="frete" onClick={() => {
                        setOrder({ ...order, frete: opcao.id })
                        setFreteValor(opcao.valor)
                    }} />
                    <label className="form-check-label" for='frete' >{opcao.tipoFrete} -</label>
                    <label className="form-check-label" for='frete' >R${opcao.valor}</label>
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
                        setOrder({ ...order, endereco: endereco.id })
                    }} />
                    <AddressInfo av={endereco.rua} n={endereco.numero} complement={endereco.complemento} district={endereco.id} zipcode={endereco.cep} city={endereco.cidade} states={endereco.municipio} uf={endereco.uf} id={endereco.id} />
                </div >
            )
        })

    }

    function preBoleto() {

        return (
            <div class="row gy-3 ">

                <div class="col-12 d-flex flex-column align-items-center justify-content-center">
                    <h2 class="text-center mb-2">Informações para o Boleto</h2>
                    <label for="nomeboleto">Nome:</label>
                    <input type="text" id="nomeboleto" class="form-control" />
                    <label for="nomecpf">CPF:</label>
                    <input type="text" id="cpfboleto" class="form-control" />
                    <div class="container mt-4 d-grid gy-2 mb-3">
                        <Button success label="gera boleto" />
                    </div>
                </div>

            </div>
        );
    }

    const creditcard = () => {
        return (
            <div className='mt-5 row '>
                <div className="col-12 d-grid gap-2 col-sm-8   mb-2 ">
                    <ModelPayCard />
                </div>
            </div>
        )
    }


    function novocartao() {

        return (
            <div>
                <div className="row">
                    <h5> Selecione um Cartão Salvo</h5>
                    {ofertas()}
                </div>
                {creditcard()}

            </div>
        )
    }


    return (
        <>
            <Header />
            <div className="container mt-3 checkout-style mb-4 ">
                <Title label="Checkout" />

                <div className="row ">
                    <div className="col-12 col-sm-6 border ">
                        <h4 className="mb-1 mt-2">Dados de Entrega</h4>

                        {/*  <!--************* Parte esquerda da pagina começo  *********************--> */}

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
                                {opcoesFrete()}
                            </div>
                            {/* </div> */}
                        </div>

                        <hr className="my-2 mt-2" />
                        {/*  <!--COMEÇOS CUPOM DE DESCONTO --> */}
                        <h4 className="mb-3 mt-3 ">Cupom de Desconto</h4>
                        <div className="input-group d-grid gy-2">
                            <input type="text" onBlur={(event) => {
                                getCupom(event.target.value);
                            }} className="form-control w-100 mb-2" placeholder="Código promocional" />
                            <Button none success label="Resgatar" click={() => {
                                setOrder({ ...order, cupomDesconto: cupom.id })
                            }} />
                            {ValidationCupom()}
                        </div>

                        {/*  <!-- FIM CUPOM DE DESCONTO --> */}
                        {/*  <!--************* FIM esquerda da pagina começo  *********************--> */}

                    </div>
                    {/*  <!--************* COMEÇO DIREITA da pagina começo  *********************--> */}
                    <div className="col-12 col-sm-6 order-md-last border mb-3">

                        {CartComCupom()}
                        <hr className="my-2" />

                        <div className="row">

                            <div>
                                {/*  <!--************* BEGIN PAGAMENTO *********************--> */}
                                <h4 className="mb-2">Pagamento</h4>
                                <div className="my-3">
                                    {/*  <!-- OPÇOES DE PAGAMENTOS --> */}
                                    {/*---------------------------- boleto---------------------------- */}
                                    <RadioBox onClick={() => setPagamento({
                                        card: false,
                                        pix: false,
                                        cpfBoleto: true
                                    })} label="Boleto" id='boleto' name="1" />
                                    {/*------------------- cartao----------------------- */}
                                    <RadioBox onClick={() => setPagamento({
                                        card: true,
                                        pix: false,
                                        cpfBoleto: false


                                    })} label="Cartão de Crédito/Débito" id="card" name="1" />
                                    {/*---------------------------- pix --------------------*/}
                                    <RadioBox onClick={() => setPagamento({
                                        card: false,
                                        pix: true,
                                        cpfBoleto: false

                                    })} label="Pix" id='pix' name="1" />
                                </div>
                                <hr className="my-2 border" />

                                {pagamento.card ? novocartao() : ""}
                                {pagamento.cpfBoleto ? preBoleto() : ""}
                                <hr className="my-4 mb-3" />

                            </div>
                            <div className="d-grid gy-2">
                                <Button label="Finalizar Pedido" click={() => {
                                    setOrder({ ...order, pedidoStatus: 2 },
                                        postPedido())
                                }} card  success />
                            </div>
                        </div>
                    </div>
                </div>

            </div>
            <Footer />
        </>
    )

}

export default Checkout