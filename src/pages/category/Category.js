import './Category.css'
import Header from '../../components/header/Header'
import Footer from '../../components/footer/Footer'
import ProductCard from '../../components/productCard/ProductCard'
import hamburger_menu from '../../components/asserts/imagens/Header/hamburger_menu.png'
import { InputGroup, Dropdown, DropdownButton, FormControl } from 'react-bootstrap'



export default function Category() {
    return (
        <>
            <Header />
            <div className="container mt-5 mb-4  ">
                <div className="row ">
                    <div className="col-2 borda-menu color-menu2">
                        <div className="row text-left text-left">
                            <nav className="navlateral border-menu ">
                                <ul className="nav flex-column">
                                    <li className="nav-item mt-3 ">
                                        <h2 className="text-category">Categoria</h2>
                                        <hr />
                                    </li>


                                    <li className="nav-item menuletra"><a className="nav-link menuletra" href="#">Frutas</a>
                                    </li>
                                    <li className="nav-item menuletra"><a className="nav-link menuletra" href="#">Verduras</a>
                                    </li>
                                    <li className="nav-item menuletra"><a className="nav-link menuletra" href="#">Legumes</a>
                                    </li>
                                    <li className="nav-item menuletra"><a className="nav-link menuletra" href="#">Cestas</a>
                                    </li>
                                    <li className="nav-item menuletra"><a className="nav-link menuletra" href="#">Vinhos</a>
                                    </li>
                                    <li className="nav-item menuletra "><a className="nav-link menuletra" href="#">Mel</a>
                                    </li>

                                    <li className="nav-item mt-5">
                                        <h2 className="text-category">Preço</h2>
                                    </li>

                                    <hr />
                                    <li className="nav-item menuletra "><a className="nav-link menuletra" href="#">Até R$ 10,00</a>
                                    </li>
                                    <li className="nav-item menuletra "><a className="nav-link menuletra" href="#">Até R$ 25,00</a>
                                    </li>
                                    <li className="nav-item menuletra"><a className="nav-link menuletra" href="#">Até R$ 50,00</a>
                                    </li>
                                    <li className="nav-item menuletra"><a className="nav-link menuletra" href="#">Até R$ 100,00</a>
                                    </li>
                                    <li className="nav-item menuletra"><a className="nav-link menuletra" href="#">Até R$ 200,00</a>
                                    </li>
                                    <li className="nav-item menuletra"><a className="nav-link menuletra" href="#">Até R$ 500,00</a>
                                    </li>
                                    <li className="nav-item menuletra"><a className="nav-link menuletra" href="#">Até R$ 1000,00</a>
                                    </li>

                                </ul>

                            </nav>

                        </div>

                    </div>




                    <div className="col-sm-12 col-lg-10 ladodireito ">
                        <div className="row justify-content-around ">


                            <div className="col-12 col-sm-6 menucanvas">

                                <button className="btn border " type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvascategoria"
                                    aria-controls="offcanvasExample"><img src={hamburger_menu} alt="" />
                                </button>


                                <div className="offcanvas menucanvasdentro  offcanvas-start" tabindex="-1" id="offcanvascategoria"
                                    aria-labelledby="offcanvasExampleLabel">
                                    <div className="offcanvas-header menucanvasdentro ">
                                        <button type="button" className="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                                    </div>
                                    <div className="menucanvasdentro">

                                        <ul>
                                            <li className=" mt-3 ">
                                                <h2 className="text-white">Categoria</h2>
                                            </li>
                                            <hr />
                                            <li className="nav-item menuletra"><a className="nav-link menuletra" href="#">Frutas</a>
                                            </li>
                                            <li className="nav-item menuletra"><a className="nav-link menuletra" href="#">Verduras</a>
                                            </li>
                                            <li className="nav-item menuletra"><a className="nav-link menuletra" href="#">Legumes</a>
                                            </li>
                                            <li className="nav-item menuletra"><a className="nav-link menuletra" href="#">Cestas</a>
                                            </li>
                                            <li className="nav-item menuletra"><a className="nav-link menuletra" href="#">Vinhos</a>
                                            </li>
                                            <li className="nav-item menuletra "><a className="nav-link menuletra" href="#">Mel</a>
                                            </li>
                                        </ul>

                                        <ul>
                                            <li className="nav-item mt-5">
                                                <h2 className="text-white" >Preço</h2>
                                            </li>
                                            <hr />
                                            <li className="nav-item menuletra "><a className="nav-link menuletra" href="#">Até R$
                                                10,00</a>
                                            </li>
                                            <li className="nav-item menuletra "><a className="nav-link menuletra" href="#">Até R$
                                                25,00</a>
                                            </li>
                                            <li className="nav-item menuletra"><a className="nav-link menuletra" href="#">Até R$
                                                50,00</a>
                                            </li>
                                            <li className="nav-item menuletra"><a className="nav-link menuletra" href="#">Até R$
                                                100,00</a>
                                            </li>
                                            <li className="nav-item menuletra"><a className="nav-link menuletra" href="#">Até R$
                                                200,00</a>
                                            </li>
                                            <li className="nav-item menuletra"><a className="nav-link menuletra" href="#">Até R$
                                                500,00</a>
                                            </li>
                                            <li className="nav-item menuletra"><a className="nav-link menuletra" href="#">Até R$
                                                1000,00</a>
                                            </li>
                                        </ul>








                                        <div className="filtrocanvas">
                                            <ul>
                                                <li className="nav-item mt-5 ">

                                                    <h2 className="text-white">Filtro</h2>

                                                </li>
                                                <hr />
                                                <li className="nav-item menuletra "><a className="nav-link menuletra" href="#"> Mais
                                                    populares</a> </li>
                                                <li className="nav-item menuletra "><a className="nav-link menuletra" href="#"> Mais
                                                    vendidos</a> </li>
                                                <li className="nav-item menuletra "><a className="nav-link menuletra" href="#"> Menor
                                                    preço</a> </li>
                                                <li className="nav-item menuletra "><a className="nav-link menuletra" href="#">Maior
                                                    preço</a> </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <p className="text-left  produtoencoontrado col-lg-6">Produtos entrados: Frutas</p>
                          
                            <div className="dropfilter col-sm-6 col-lg-4  ">
                                <div className="d-flex flex-row-reverse bd-highligh align-items-center">
                                    <Dropdown>
                                        <Dropdown.Toggle variant="success" id="dropdown-basic">
                                            filtro
                                        </Dropdown.Toggle>
                                        <Dropdown.Menu>
                                            <Dropdown.Item href="#/action-1">Mais populares</Dropdown.Item>
                                            <Dropdown.Item href="#/action-2">Mais vendidos</Dropdown.Item>
                                            <Dropdown.Item href="#/action-3">Menor Preço</Dropdown.Item>
                                            <Dropdown.Item href="#/action-4">Maior Preço</Dropdown.Item>
                                        </Dropdown.Menu>
                                    </Dropdown>

                                </div>
                            </div>

                        </div>





                        <div className="row text-center">

                            <ProductCard col="col-12 col-sm-6 col-md-6  col-lg-4 col-xl-4   col-xxl-3 	  " img='https://i.ibb.co/nP8cZL2/abacaxi.png' link='/product' nome="abacaxi"
                                peso={1.00} price={12.90} />
                            <ProductCard col="col-12 col-sm-6 col-md-6  col-lg-4 col-xl-4  col-xxl-3  " img='https://i.ibb.co/nP8cZL2/abacaxi.png' link='/product' nome="abacaxi"
                                peso={1.00} price={12.90} />
                            <ProductCard col="col-12 col-sm-6 col-md-6  col-lg-4 col-xl-4 col-xxl-3  " img='https://i.ibb.co/nP8cZL2/abacaxi.png' link='/product' nome="abacaxi"
                                peso={1.00} price={12.90} />
                            <ProductCard col="col-12 col-sm-6 col-md-6  col-lg-4 col-xl-4  col-xxl-3  " img='https://i.ibb.co/nP8cZL2/abacaxi.png' link='/product' nome="abacaxi"
                                peso={1.00} price={12.90} />
                            <ProductCard col="col-12 col-sm-6 col-md-6  col-lg-4 col-xl-4  col-xxl-3  " img='https://i.ibb.co/nP8cZL2/abacaxi.png' link='/product' nome="abacaxi"
                                peso={1.00} price={12.90} />
                            <ProductCard col="col-12 col-sm-6 col-md-6  col-lg-4 col-xl-4  col-xxl-3  " img='https://i.ibb.co/nP8cZL2/abacaxi.png' link='/product' nome="abacaxi"
                                peso={1.00} price={12.90} />
                            <ProductCard col="col-12 col-sm-6 col-md-6  col-lg-4 col-xl-4  col-xxl-3  " img='https://i.ibb.co/nP8cZL2/abacaxi.png' link='/product' nome="abacaxi"
                                peso={1.00} price={12.90} />
                            <ProductCard col="col-12 col-sm-6 col-md-6  col-lg-4 col-xl-4  col-xxl-3  " img='https://i.ibb.co/nP8cZL2/abacaxi.png' link='/product' nome="abacaxi"
                                peso={1.00} price={12.90} />
                            <ProductCard col="col-12 col-sm-6 col-md-6  col-lg-4 col-xl-4   col-xxl-3  " img='https://i.ibb.co/nP8cZL2/abacaxi.png' link='/product' nome="abacaxi"
                                peso={1.00} price={12.90} />

                        </div>
                    </div>
                </div>
            </div>

            <Footer />
            <div className="col-12 row">


            </div>
        </>


    )
}