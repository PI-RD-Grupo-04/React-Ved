import './ConsumptionSuggestion.css'
import Header from '../../components/header/Header'
import Footer from '../../components/footer/Footer'
import BananaNanica from '../../components/asserts/imagens/Frutas/banana-nanica.png'
import Favorito from '../../components/asserts/imagens/Users_icon/favorito.png'
import Abacaxi from '../../components/asserts/imagens/Frutas/abacaxi.png'

function CosumptionSuggestion() {
    return (
        <>
            <Header />
            <div className=" col-12 container mt-5">
                <h1 className=" d-flex justify-content-center mb-5  "> Sugestão de Consumo</h1>
                <hr/>
                <h2 className=" row d-flex justify-content-center">Banana Caramelizada </h2>
            </div>
            <div className="d-flex justify-content-center">
                <img className="imagemsugestao1 imgresp " src={BananaNanica}/>
            </div>

            <div className="container primeiroAB mt-5 justify-content-between">
                <div className="row ">
                    <div className="col-lg-6 col-md-12">
                        <h2 className="col-12">Ingredientes</h2>
                        <ul className="col-12" style="list-style-type: disc;">
                            <li className="ponto">4 Banana (4 unidades).</li>
                            <li className="ponto">37 g de Amido de milho (1/4 de xícara).</li>
                            <li className="ponto">90 g de Farinha de trigo (3/4 de xícara).</li>
                            <li className="ponto">15 g de Açúcar (1 colher de sopa).</li>
                            <li className="ponto">Sal 1 pitada.</li>
                            <li className="ponto">180 mL de Água gelada (3/4 de xícara).</li>
                            <li className="ponto">5 g de Fermento químico (1 colher de chá).</li>
                        </ul>
                    </div>
                    <div className=" col-6   d-flex ">
                        <img className="imagemsugestao " src={BananaNanica}/>
                    </div>
                </div>
            </div>


            <div className="container mt-5 segundoAB text-justif">
                <hr/>
                    <h2>Como Preparar</h2>
                    <div className="row">
                        <div className="col-12">
                            <ul>
                                <li className="ponto">Misture em uma tigela a farinha de trigo, o amido de milho, o açúcar e o sal.</li>
                                <li className="ponto">Adicione a água gelada e mexa até ficar homogêneo, sem pelotinhos de farinha.</li>
                                <li className="ponto">Por último acrescente o fermento químico e misture novamente.</li>
                                <li className="ponto">Adicione as bananas cortadas ao meio e envolva na massa.</li>
                                <li className="ponto">Retire com cuidado e transfira para a panela com óleo quente.</li>
                                <li className="ponto">Frite em óleo quente até começar a dourar.</li>
                                <li className="ponto">Transfira para um prato com papel toalha.</li>
                                <li className="ponto">Coloque o açúcar e a água em uma panela e misture.</li>
                                <li className="ponto">Deixe em fogo médio sem mexer.</li>
                                <li className="ponto">Quando atingir a coloração de caramelo (âmbar) retire do fogo.</li>
                                <li className="ponto">Coloque um pano levemente inclinado embaixo da panela e passe as bananas.</li>
                                <li className="ponto">Transfira para uma assadeira untada com óleo e coloque o gergelim imediatamente.</li>
                            </ul>
                        </div>
                    </div>
            </div>

            <hr/>

                <div className="container text-center mt-md-5 ">
                    <div className="row justify-content-between ">
                        {/* <!-- item 1 --> */}
                        <div className="product-card">
                            <div className="badge-B">
                                <img src={Favorito} width="20px"/>
                            </div>
                            <div className="product-tumb">
                                <img src={Abacaxi}/>
                            </div>
                            <div className="product-details">
                                <h4><a href="">Laranja</a></h4>
                                <p>Aprox. 1kg</p>
                                <div className="product-bottom-details text-center">
                                    <div className="product-price">
                                        R$ 12,99
                                    </div>
                                </div>
                                <a href="./produtos.html" className="btn btn-success ">Adicionar ao carrinho</a>
                            </div>
                        </div>
                        {/* <!-- item 2 --> */}
                        <div className="product-card">
                            <div className="badge-B">
                                <img src={Favorito} width="20px"/>
                            </div>
                            <div className="product-tumb">
                                <img src={Abacaxi}/>
                            </div>
                            <div className="product-details">
                                <h4><a href="">Laranja</a></h4>
                                <p>Aprox. 1kg</p>
                                <div className="product-bottom-details text-center">
                                    <div className="product-price">
                                        R$ 12,99
                                    </div>
                                </div>
                                <a href="./produtos.html" className="btn btn-success ">Adicionar ao carrinho</a>
                            </div>
                        </div>
                        {/* <!-- item 3 --> */}
                        <div className="product-card">
                            <div className="badge-B">
                                <img src={Abacaxi} width="20px"/>
                            </div>
                            <div className="product-tumb">
                                <img src={Abacaxi}/>
                            </div>
                            <div className="product-details">
                                <h4><a href="">Laranja</a></h4>
                                <p>Aprox. 1kg</p>
                                <div className="product-bottom-details text-center">
                                    <div className="product-price">
                                        R$ 12,99
                                    </div>
                                </div>
                                <a href="./produtos.html" className="btn  btn-success ">Adicionar ao carrinho</a>
                            </div>
                        </div>
                        {/* <!-- item 4 --> */}
                        <div className="product-card">
                            <div className="badge-B">
                                <img src={Favorito} width="20px"/>
                            </div>
                            <div className="product-tumb">
                                <img src={Abacaxi}/>
                            </div>
                            <div className="product-details">
                                <h4><a href="">Laranja</a></h4>
                                <p>Aprox. 1kg</p>
                                <div className="product-bottom-details text-center">
                                    <div className="product-price">
                                        R$ 12,99
                                    </div>
                                </div>
                                <a href="./produtos.html" className="btn btn-success ">Adicionar ao carrinho</a>
                            </div>
                        </div>
                    </div>
                </div>

                <Footer />
            </>
            )
}

export default CosumptionSuggestion