import './Product.css'
import Header from '../../components/header/Header'
import Footer from '../../components/footer/Footer'
import transgenico from '../../components/asserts/imagens/selo-produtos/nao-transgenico.png'
import vegano from '../../components/asserts/imagens/selo-produtos/sem-gluten.png'
import gluten from '../../components/asserts/imagens/selo-produtos/vegano.png'
import ProductCard from '../../components/productCard/ProductCard'
import { Link } from 'react-router-dom'
import Buttonqty from '../../components/button/ButtonProduct' 
import Button from '../../components/button/Button'

function Product() {
    return (
        <>
            <Header />
            <div className="container justify-content-between">
                <div className="row mt-3">
                    <div className="col-12 col-xl-6 mx-auto">
                        {/* imagem do produto */}
                        <img className="border  " src='https://i.ibb.co/nP8cZL2/abacaxi.png' alt="Banana-Prata-Organica-600g-800g-Ved"
                        />


                    </div>


                    {/* LADO DIREITO DA PAGINA  */}
                    <div className="col-12 col-xl-6">
                        <div className="media-body">
                            <div className="preco-avulso margin-price">
                                <h2 className="mt-0 text-desc mb-2">Banana Prata Orgânica</h2>
                                <p><strong>Código:</strong> 0021</p>
                                <div className=" d-flex price-por product-price ">
                                    <p>De:
                                        <small className="product-price de-product">R$15,20</small>
                                    </p>
                                </div>
                                <div className="d-flex justify-content-start">
                                    <h2 className="mb-2 d-flex text-align justify-content-start title-main">Por: R$9,90</h2>
                                </div>
                                <div className="row">
                                    <div className="col-12">
                                        <img src={transgenico} className="icons-product" />
                                        <img src={vegano} className="icons-product" />
                                        <img src={gluten} className="icons-product" />

                                    </div>
                                </div>
                                <div className="d-flex justify-content-start">
                                    <p> Estoque:</p> <p className="ms-1 title-main ">Disponível</p>
                                </div>
                                <div className="row text-center justify-content-center">
                                    <div className="col-10 col-sm-4 mb-1">
                                        {/* AREA DO BOTÃO DE QUANTIDADE */}
                                        <div className="row d-grid gy-2">
                                        <Buttonqty/>
                                        </div>
                                        {/* FIM  AREA DO BOTÃO DE QUANTIDADE */}
                                    </div>

                                    <div className="col-12 col-sm-6">
                                        <Link to="/cart" className="btn btn-success btn-lg w-100 ">Adicionar</Link>
                                    </div>




                                </div>
                            </div>

                        </div>
                    </div>
                </div>
                <div className="row mt-4">

                    <span className="d-flex justify-content-between ">
                        <h4>Descrição</h4>
                    </span>
                    <p className="text-dresc">A Banana é a fruta mais consumida em todo o mundo! No Brasil, o IBGE estima que
                        cada brasileiro consome em média 7 kilos de banana por ano e nosso país é um dos líderes em produção mundial
                        dessa amarelinha. Bastante rica em nutrientes, a Banana tem além do conhecido potássio que ajuda na prevenção
                        de cãibras na realização de exercícios físicos (lembram do tenista Guga?), também possui quantidades
                        relevantes de magnésio, ferro e vitaminas A, C e do complexo B. A Banana Prata em geral tem consistência mais
                        firme que as demais, sendo super indicada para fritar.</p>
                    <p><strong>Como guardar</strong></p>
                    <p>Sempre fora da geladeira, a sua fruteira chama por ela!</p>
                    <p><strong>Curiosidades: </strong> A banana prata é rica em potássio e cálcio e é uma ótima fonte de fibras.</p>
                    <p></p>
                </div>
                <div className="sugestao-respo ">
                    <Button link="/suggestion" label="Sugestão de Consumo" success></Button>

                </div>



                <hr />
                {/* Sugestões de outros produtos */}



                <h2 className="text-center mb-5 title-main">Aproveite também</h2>
                <div class="row  ">
                    {/* ********************* item unidade  *********************/}
                    <ProductCard col="col-12 col-sm-6 col-md-6  col-lg-4 col-xl-3  " img='https://i.ibb.co/nP8cZL2/abacaxi.png' link='/product' nome="abacaxi"
                        peso={1.00} price={12.90} />
                    <ProductCard col="col-12 col-sm-6 col-md-6  col-lg-4 col-xl-3" img='https://i.ibb.co/nP8cZL2/abacaxi.png' link='/product' nome="abacaxi"
                        peso={1.00} price={12.90} />
                    <ProductCard col="col-12 col-sm-6 col-md-6  col-lg-4 col-xl-3 " img='https://i.ibb.co/nP8cZL2/abacaxi.png' link='/product' nome="abacaxi"
                        peso={1.00} price={12.90} />
                    <ProductCard col="col-12 col-sm-6 col-md-6  col-lg-4 col-xl-3 " img='https://i.ibb.co/nP8cZL2/abacaxi.png' link='/product' nome="abacaxi"
                        peso={1.00} price={12.90} />

                </div>
            </div>
            <Footer />

        </>
    )
}

export default Product