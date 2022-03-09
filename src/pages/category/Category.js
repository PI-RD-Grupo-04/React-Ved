import './Category.css'
import Header from '../../components/header/Header'
import Footer from '../../components/footer/Footer'




export default function Category(){
    return(
        <>
        <Header/>

        
        
        
        
        
        
        <Footer/>
        </>


    )
}













{/*<div class="container mt-5 mb-4  ">
        <div class="row ">
            <div class="col-2 borda-menu color-menu2">
                <!--************* Parte esquerda da pagina começo  *********************-->
                <!-- Parte do Menu lateral  -->
                <div class="row text-left text-left">
                    <nav class="navlateral border-menu ">
                        <ul class="nav flex-column">
                            <li class="nav-item mt-3 ">
                                <class="nav-link>
                                    <h2 class="title-canvas">Categoria</h2>
                            </li>
                            <hr>
                            <li class="nav-item menuletra"><a class="nav-link menuletra" href="#">Frutas</a>
                            </li>
                            <li class="nav-item menuletra"><a class="nav-link menuletra" href="#">Verduras</a>
                            </li>
                            <li class="nav-item menuletra"><a class="nav-link menuletra" href="#">Legumes</a>
                            </li>
                            <li class="nav-item menuletra"><a class="nav-link menuletra" href="#">Cestas</a>
                            </li>
                            <li class="nav-item menuletra"><a class="nav-link menuletra" href="#">Vinhos</a>
                            </li>
                            <li class="nav-item menuletra "><a class="nav-link menuletra" href="#">Mel</a>
                            </li>

                            <li class="nav-item mt-5">
                                <class="nav-link>
                                    <h2  class="title-canvas">Preço</h2>
                            </li>
                            <hr>
                            <li class="nav-item menuletra "><a class="nav-link menuletra" href="#">Até R$ 10,00</a>
                            </li>
                            <li class="nav-item menuletra "><a class="nav-link menuletra" href="#">Até R$ 25,00</a>
                            </li>
                            <li class="nav-item menuletra"><a class="nav-link menuletra" href="#">Até R$ 50,00</a>
                            </li>
                            <li class="nav-item menuletra"><a class="nav-link menuletra" href="#">Até R$ 100,00</a>
                            </li>
                            <li class="nav-item menuletra"><a class="nav-link menuletra" href="#">Até R$ 200,00</a>
                            </li>
                            <li class="nav-item menuletra"><a class="nav-link menuletra" href="#">Até R$ 500,00</a>
                            </li>
                            <li class="nav-item menuletra"><a class="nav-link menuletra" href="#">Até R$ 1000,00</a>
                            </li>

                        </ul>
                    </nav>
                </div>
            </div>
            <!-- ***** LADO DIREITO DA PAGINAS -->
            <div class="   col-sm-12 col-lg-10 ladodireito ">
                <div class="row justify-content-around ">
                    <!-- TITULO -->

                    <div class="col-12 col-sm-6 menucanvas">

                        <button class="btn border " type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvascategoria"
                            aria-controls="offcanvasExample"><img src="../images/Header/hamburger_menu.png" alt="">
                        </button>
                        <!-- compo do canvas -->

                        <div class="offcanvas menucanvasdentro  offcanvas-start" tabindex="-1" id="offcanvascategoria"
                            aria-labelledby="offcanvasExampleLabel">
                            <div class="offcanvas-header menucanvasdentro ">
                                <button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas"
                                    aria-label="Close"></button>
                            </div>
                            <div class="menucanvasdentro">
                                
                                <ul>
                                    <li class=" mt-3 ">
                                            <h2>Categoria</h2>
                                    </li>
                                    <hr>
                                    <li class="nav-item menuletra"><a class="nav-link menuletra" href="#">Frutas</a>
                                    </li>
                                    <li class="nav-item menuletra"><a class="nav-link menuletra" href="#">Verduras</a>
                                    </li>
                                    <li class="nav-item menuletra"><a class="nav-link menuletra" href="#">Legumes</a>
                                    </li>
                                    <li class="nav-item menuletra"><a class="nav-link menuletra" href="#">Cestas</a>
                                    </li>
                                    <li class="nav-item menuletra"><a class="nav-link menuletra" href="#">Vinhos</a>
                                    </li>
                                    <li class="nav-item menuletra "><a class="nav-link menuletra" href="#">Mel</a>
                                    </li>
                                </ul>

                                <ul>
                                    <li class="nav-item mt-5">
                                        <class="nav-link>
                                            <h2>Preço</h2>
                                    </li>
                                    <hr>
                                    <li class="nav-item menuletra "><a class="nav-link menuletra" href="#">Até R$
                                            10,00</a>
                                    </li>
                                    <li class="nav-item menuletra "><a class="nav-link menuletra" href="#">Até R$
                                            25,00</a>
                                    </li>
                                    <li class="nav-item menuletra"><a class="nav-link menuletra" href="#">Até R$
                                            50,00</a>
                                    </li>
                                    <li class="nav-item menuletra"><a class="nav-link menuletra" href="#">Até R$
                                            100,00</a>
                                    </li>
                                    <li class="nav-item menuletra"><a class="nav-link menuletra" href="#">Até R$
                                            200,00</a>
                                    </li>
                                    <li class="nav-item menuletra"><a class="nav-link menuletra" href="#">Até R$
                                            500,00</a>
                                    </li>
                                    <li class="nav-item menuletra"><a class="nav-link menuletra" href="#">Até R$
                                            1000,00</a>
                                    </li>
                                </ul>

                                    <div class="filtrocanvas">
                                    <ul>
                                        <li class="nav-item mt-5 ">
                                            <class="nav-link>
                                                <h2>Filtro</h2>
                                        </li>
                                        <hr>
                                        <li class="nav-item menuletra "><a class="nav-link menuletra" href="#"> Mais
                                                populares</a> </li>
                                        <li class="nav-item menuletra "><a class="nav-link menuletra" href="#"> Mais
                                                vendidos</a> </li>
                                        <li class="nav-item menuletra "><a class="nav-link menuletra" href="#"> Menor
                                                preço</a> </li>
                                        <li class="nav-item menuletra "><a class="nav-link menuletra" href="#">Maior
                                                preço</a> </li>
                                    </ul>
                                    </div>

                             
                            </div>



                        </div>
                    </div>





                    <p class="text-left  produtoencoontrado col-lg-6">Produtos entrados: Frutas</p>


                    <div class="col-sm-6 col-lg-4 dropfilter">
                        <div class="dropdown     d-flex flex-row-reverse bd-highligh align-items-center">
                            <button class="btn border " type="button" id="dropdownMenu2" data-toggle="dropdown"
                                aria-haspopup="true" aria-expanded="false">
                                Filtro
                            </button>
                            <div class="dropdown-menu" aria-labelledby="dropdownMenu2">
                                <button class="dropdown-item" type="button">Mais populares</button>
                                <button class="dropdown-item" type="button">Mais vendidos</button>
                                <button class="dropdown-item" type="button">Menor preço</button>
                                <button class="dropdown-item" type="button">Maior preço</button>
                            </div>
                        </div>
                    </div>
                    <!-- DROPDOWN -->

                </div>

                <!-- inicio produtos -->
                <div class="row text-center">
                    <div class="col-sm-6 col-lg-4">
                        <div class=" justify-content-between ">
                            <!-- item 1 -->
                            <div class="product-card">
                                <div class="badge-B"><img src="../images/Users_icon/favorito.png" width="20px">
                                </div>
                                <div class="product-tumb">
                                    <img src="../images/Frutas/abacaxi.png" alt="">
                                </div>
                                <div class="product-details">

                                    <h4><a href="">Laranja</a></h4>
                                    <p>Aprox. 1kg</p>
                                    <div class="product-bottom-details text-center">
                                        <div class="product-price">

                                            R$ 12,99
                                        </div>
                                    </div>
                                    <a href="./garantia.html" class="btn btn-outline-success btn-add-card">Adicionar
                                        ao carrinho</a>
                                </div>
                            </div>
                        </div>
                    </div>


                    <div class="col-sm-6 col-lg-4">
                        <div class=" justify-content-between ">
                            <!-- item 2 -->
                            <div class="product-card">
                                <div class="badge-B"><img src="../images/Users_icon/favorito.png" width="20px">
                                </div>
                                <div class="product-tumb">
                                    <img src="../images/Frutas/abacaxi.png" alt="">
                                </div>
                                <div class="product-details">

                                    <h4><a href="">Laranja</a></h4>
                                    <p>Aprox. 1kg</p>
                                    <div class="product-bottom-details text-center">
                                        <div class="product-price">

                                            R$ 12,99
                                        </div>
                                    </div>
                                    <a href="./garantia.html" class="btn btn-outline-success btn-add-card">Adicionar
                                        ao carrinho</a>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="col-sm-6 col-lg-4">
                        <div class=" justify-content-between ">
                            <!-- item 3 -->
                            <div class="product-card">
                                <div class="badge-B"><img src="../images/Users_icon/favorito.png" width="20px">
                                </div>
                                <div class="product-tumb">
                                    <img src="../images/Frutas/abacaxi.png" alt="">
                                </div>
                                <div class="product-details">

                                    <h4><a href="">Laranja</a></h4>
                                    <p>Aprox. 1kg</p>
                                    <div class="product-bottom-details text-center">
                                        <div class="product-price">

                                            R$ 12,99
                                        </div>
                                    </div>
                                    <a href="./garantia.html" class="btn btn-outline-success btn-add-card">Adicionar
                                        ao carrinho</a>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="col-sm-6 col-lg-4">
                        <div class=" justify-content-between ">
                            <!-- item 5 -->
                            <div class="product-card">
                                <div class="badge-B"><img src="../images/Users_icon/favorito.png" width="20px">
                                </div>
                                <div class="product-tumb">
                                    <img src="../images/Frutas/abacaxi.png" alt="">
                                </div>
                                <div class="product-details">

                                    <h4><a href="">Laranja</a></h4>
                                    <p>Aprox. 1kg</p>
                                    <div class="product-bottom-details text-center">
                                        <div class="product-price">

                                            R$ 12,99
                                        </div>
                                    </div>
                                    <a href="./garantia.html" class="btn btn-outline-success btn-add-card">Adicionar
                                        ao carrinho</a>
                                </div>
                            </div>
                        </div>
                    </div>


                    <div class="col-sm-6 col-lg-4">
                        <div class=" justify-content-between ">
                            <!-- item 6 -->
                            <div class="product-card">
                                <div class="badge-B"><img src="../images/Users_icon/favorito.png" width="20px">
                                </div>
                                <div class="product-tumb">
                                    <img src="../images/Frutas/abacaxi.png" alt="">
                                </div>
                                <div class="product-details">

                                    <h4><a href="">Laranja</a></h4>
                                    <p>Aprox. 1kg</p>
                                    <div class="product-bottom-details text-center">
                                        <div class="product-price">

                                            R$ 12,99
                                        </div>
                                    </div>
                                    <a href="./garantia.html" class="btn btn-outline-success btn-add-card">Adicionar
                                        ao carrinho</a>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="col-sm-6 col-lg-4">
                        <div class=" justify-content-between ">
                            <!-- item 7 -->
                            <div class="product-card">
                                <div class="badge-B"><img src="../images/Users_icon/favorito.png" width="20px">
                                </div>
                                <div class="product-tumb">
                                    <img src="../images/Frutas/abacaxi.png" alt="">
                                </div>
                                <div class="product-details">

                                    <h4><a href="">Laranja</a></h4>
                                    <p>Aprox. 1kg</p>
                                    <div class="product-bottom-details text-center">
                                        <div class="product-price">

                                            R$ 12,99
                                        </div>
                                    </div>
                                    <a href="./garantia.html" class="btn btn-outline-success btn-add-card">Adicionar
                                        ao carrinho</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-sm-6 col-lg-4">
                        <div class=" justify-content-between ">
                            <!-- item 1 -->
                            <div class="product-card">
                                <div class="badge-B"><img src="../images/Users_icon/favorito.png" width="20px">
                                </div>
                                <div class="product-tumb">
                                    <img src="../images/Frutas/abacaxi.png" alt="">
                                </div>
                                <div class="product-details">

                                    <h4><a href="">Laranja</a></h4>
                                    <p>Aprox. 1kg</p>
                                    <div class="product-bottom-details text-center">
                                        <div class="product-price">

                                            R$ 12,99
                                        </div>
                                    </div>
                                    <a href="./garantia.html" class="btn btn-outline-success btn-add-card">Adicionar
                                        ao carrinho</a>
                                </div>
                            </div>
                        </div>
                    </div>


                    <div class="col-sm-6 col-lg-4">
                        <div class=" justify-content-between ">
                            <!-- item 2 -->
                            <div class="product-card">
                                <div class="badge-B"><img src="../images/Users_icon/favorito.png" width="20px">
                                </div>
                                <div class="product-tumb">
                                    <img src="../images/Frutas/abacaxi.png" alt="">
                                </div>
                                <div class="product-details">

                                    <h4><a href="">Laranja</a></h4>
                                    <p>Aprox. 1kg</p>
                                    <div class="product-bottom-details text-center">
                                        <div class="product-price">

                                            R$ 12,99
                                        </div>
                                    </div>
                                    <a href="./garantia.html" class="btn btn-outline-success btn-add-card">Adicionar
                                        ao carrinho</a>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="col-sm-6 col-lg-4">
                        <div class=" justify-content-between ">
                            <!-- item 3 -->
                            <div class="product-card">
                                <div class="badge-B"><img src="../images/Users_icon/favorito.png" width="20px">
                                </div>
                                <div class="product-tumb">
                                    <img src="../images/Frutas/abacaxi.png" alt="">
                                </div>
                                <div class="product-details">

                                    <h4><a href="">Laranja</a></h4>
                                    <p>Aprox. 1kg</p>
                                    <div class="product-bottom-details text-center">
                                        <div class="product-price">

                                            R$ 12,99
                                        </div>
                                    </div>
                                    <a href="./garantia.html" class="btn btn-outline-success btn-add-card">Adicionar
                                        ao carrinho</a>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="col-sm-6 col-lg-4">
                        <div class=" justify-content-between ">
                            <!-- item 5 -->
                            <div class="product-card">
                                <div class="badge-B"><img src="../images/Users_icon/favorito.png" width="20px">
                                </div>
                                <div class="product-tumb">
                                    <img src="../images/Frutas/abacaxi.png" alt="">
                                </div>
                                <div class="product-details">

                                    <h4><a href="">Laranja</a></h4>
                                    <p>Aprox. 1kg</p>
                                    <div class="product-bottom-details text-center">
                                        <div class="product-price">

                                            R$ 12,99
                                        </div>
                                    </div>
                                    <a href="./garantia.html" class="btn btn-outline-success btn-add-card">Adicionar
                                        ao carrinho</a>
                                </div>
                            </div>
                        </div>
                    </div>


                    <div class="col-sm-6 col-lg-4">
                        <div class=" justify-content-between ">
                            <!-- item 6 -->
                            <div class="product-card">
                                <div class="badge-B"><img src="../images/Users_icon/favorito.png" width="20px">
                                </div>
                                <div class="product-tumb">
                                    <img src="../images/Frutas/abacaxi.png" alt="">
                                </div>
                                <div class="product-details">

                                    <h4><a href="">Laranja</a></h4>
                                    <p>Aprox. 1kg</p>
                                    <div class="product-bottom-details text-center">
                                        <div class="product-price">

                                            R$ 12,99
                                        </div>
                                    </div>
                                    <a href="./garantia.html" class="btn btn-outline-success btn-add-card">Adicionar
                                        ao carrinho</a>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="col-sm-6 col-lg-4">
                        <div class=" justify-content-between ">
                            <!-- item 7 -->
                            <div class="product-card">
                                <div class="badge-B"><img src="../images/Users_icon/favorito.png" width="20px">
                                </div>
                                <div class="product-tumb">
                                    <img src="../images/Frutas/abacaxi.png" alt="">
                                </div>
                                <div class="product-details">

                                    <h4><a href="">Laranja</a></h4>
                                    <p>Aprox. 1kg</p>
                                    <div class="product-bottom-details text-center">
                                        <div class="product-price">

                                            R$ 12,99
                                        </div>
                                    </div>
                                    <a href="./garantia.html" class="btn btn-outline-success btn-add-card">Adicionar
                                        ao carrinho</a>
                                </div>
                            </div>
                        </div>
                    </div>



                </div>
            </div>
        </div>
    </div>
*/}