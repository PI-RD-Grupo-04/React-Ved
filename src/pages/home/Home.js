import './Home.css'
import Footer from '../../components/footer/Footer'
import Header from '../../components/header/Header'
import React from 'react'
import frete from '../../components/asserts/imagens/imgBody/frete.png'
import carrosel1mel from '../../components/asserts/imagens/Carousel/carrosel1mel.jpg'
import carrosel2frutas from '../../components/asserts/imagens/Carousel/carrosel2frutas.png'
import venhaconhecer from '../../components/asserts/imagens/Carousel/venhaconhecer.jpg'
import favorito from '../../components/asserts/imagens/Users_icon/favorito.png'




function Home() {
  return (
    <>  

      <Header/>
      {/* *************************************** BANNER END ************************************ */}
      <div className="d-flex justify-content-center flex-column">
        <img className="banner" src={frete}
          alt="imagem com informações sobre o frete" />
      </div>
      {/* *************************************** CAROUSEL BEGIN ************************************ */}
      <div className="banner">
        <div id="carouselExampleControls" className="carousel slide" data bs ride="carousel">
          <div className="carousel-inner" />
          <div className="carousel-item active">
            <img src={carrosel1mel} className="d-block w-100" alt="foto de frutas" />
          </div>
          <div className="carousel-item">
            <img src={carrosel2frutas} className="d-block w-100" alt="foto de frutas" />
          </div>
          <div className="carousel-item">
            <img src={venhaconhecer} className="d-block w-100"
              alt="foto de frutas" />

            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls"
              data-bs-slide="prev">
              <span className="carousel-control-prev-icon" aria-hidden="true" />
              <span className="visually-hidden"> Previous</span>
            </button></div>
          <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls"
            data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden"> Next</span>
          </button>
        </div>
      </div>
      {/* *************************************** CAROUSEL BEGIN ************************************ */}


      {/* Titulo * */}
      <div className="container title-main">
        <h2 className="text-center"> <strong>OFERTAS ESPECIAIS</strong></h2>
      </div>



      {/* *************************************** PRODUTOS BEGIN ************************************ */}

      <div className="container text-center mb-5">
        <div className="row justify-content-between ">
          {/*  < /> !--item 1 * */}

          <div className="badge-B"><img src={favorito} width="20px" /></div>
          <div className="product-tumb">
            <a href="./produtos.html"><img src="../images/Frutas/abacaxi.png" alt="Foto de um abacaxi" /></a>
          </div>
          <div className="product-details">

            <h4><a href="">Abacaxi Queen</a></h4>
            <p>Aprox. 1kg</p>
            <div className="product-bottom-details text-center">
              <div className="product-price">
                R$ 12, 99
              </div>
            </div>
            <a href="./produtos.html" className="btn btn-outline-success btn-add-card"> Adicionar ao carrinho</a>
          </div>
        </div>
        {/*   < /> !--item 2 * */}
        <div className="product-card">
          <div className="badge-B"><img src="../images/Users_icon/favorito.png" width="20px" /></div>
          <div className="product-tumb">
            <a href="./produtos.html"><img src="../images/Frutas/abacaxi.png" alt="Foto de um abacaxi" /></a>
          </div>
          <div className="product-details">
            <h4><a href="">Abacaxi Queen</a></h4>
            <p>Aprox. 1kg</p>
            <div className="product-bottom-details text-center">
              <div className="product-price">
                R$ 8, 99
              </div>
            </div>
            <a href="./produtos.html" className="btn btn-outline-success btn-add-card"> Adicionar ao carrinho</a>
          </div>
        </div>
        {/*   < /> !--item 3 * */}
        <div className="product-card">
          <div className="badge-B"><img src="../images/Users_icon/favorito.png" width="20px" /></div>
          <div className="product-tumb">
            <a href="./produtos.html"><img src="../images/Frutas/abacaxi.png" alt="Foto de um abacaxi" /></a>
          </div>
          <div className="product-details">

            <h4><a href="">Abacaxi Queen</a></h4>
            <p>Aprox. 1kg</p>
            <div className="product-bottom-details text-center">
              <div className="product-price">

                R$ 19, 99
              </div>
            </div>
            <a href="./produtos.html" className="btn btn-outline-success btn-add-card"> Adicionar ao carrinho</a>
          </div>
        </div>
        {/*   < /> !--item 4 * */}
        <div className="product-card">
          <div className="badge-B"><img src="../images/Users_icon/favorito.png" width="20px" /></div>
          <div className="product-tumb">
            <a href="./produtos.html"><img src="../images/Frutas/abacaxi.png" alt="Foto de um abacaxi" /></a>
          </div>
          <div className="product-details">

            <h4><a href="">Abacaxi Queen</a></h4>
            <p>Aprox. 700g</p>
            <div className="product-bottom-details text-center">
              <div className="product-price">
                R$ 6, 99
              </div>
            </div>
            <a href="./produtos.html" className="btn btn-outline-success btn-add-card"> Adicionar ao carrinho</a>
          </div>
        </div>


        {/*  < /> !--item 1 * */}
        <div className="product-card">
          <div className="badge-B"><img src="../images/Users_icon/favorito.png" width="20px" /></div>
          <div className="product-tumb">
            <a href="./produtos.html"><img src="../images/Frutas/abacaxi.png" alt="Foto de um abacaxi" /></a>
          </div>
          <div className="product-details">
            <h4><a href="">Abacaxi Queen</a></h4>
            <p>Aprox. 500g</p>
            <div className="product-bottom-details text-center">
              <div className="product-price">
                R$ 10, 99
              </div>
            </div>
            <a href="./produtos.html" className="btn btn-outline-success btn-add-card"> Adicionar ao carrinho</a>
          </div>
        </div>
        {/*    < /> !--item 2 * */}
        <div className="product-card">
          <div className="badge-B"><img src="../images/Users_icon/favorito.png" width="20px" /></div>
          <div className="product-tumb">
            <a href="./produtos.html"><img src="../images/Frutas/abacaxi.png" alt="Foto de um abacaxi" /></a>
          </div>
          <div className="product-details">

            <h4><a href="">Abacaxi Queen</a></h4>
            <p>Aprox. 1kg</p>
            <div className="product-bottom-details text-center">
              <div className="product-price">

                R$ 12, 99
              </div>
            </div>
            <a href="./produtos.html" className="btn btn-outline-success btn-add-card"> Adicionar ao carrinho</a>
          </div>
        </div>
        {/*   < /> !--item 3 * */}
        <div className="product-card">
          <div className="badge-B"><img src="../images/Users_icon/favorito.png" width="20px" /></div>
          <div className="product-tumb">
            <img src="../images/Frutas/abacaxi.png" alt="" />
          </div>
          <div className="product-details">

            <h4><a href="">Abacaxi Queen</a></h4>
            <p>Aprox. 1kg</p>
            <div className="product-bottom-details text-center">
              <div className="product-price">

                R$ 19, 99
              </div>
            </div>
            <a href="./produtos.html" className="btn btn-outline-success btn-add-card"> Adicionar ao carrinho</a>
          </div>
        </div>
        {/* < /> !--item 4 * */}
        <div className="product-card">
          <div className="badge-B"><img src="../images/Users_icon/favorito.png" width="20px" /></div>
          <div className="product-tumb">
            <a href="./produtos.html"><img src="../images/Frutas/abacaxi.png" alt="Foto de um abacaxi" /></a>
          </div>
          <div className="product-details">

            <h4><a href="">Abacaxi Queen</a></h4>
            <p>Aprox. 1kg</p>
            <div className="product-bottom-details text-center">
              <div className="product-price">

                R$ 13, 99
              </div>
            </div>
            <a href="./garantia.html" className="btn btn-outline-success btn-add-card"> Adicionar ao carrinho</a>
          </div>
        </div>
      </div>

      {/* *************************************** PRODUTOS END *********************************** */}


      {/* *************************************** CESTAS BEGIN *********************************** */}

      {/*   < /> !--Titulo * */}
      <div className="container title-main text-center">
        <h2 className="text-center "> Cestas Prontas</h2>
      </div>

      {/*   < /> !--Produtos * */}
      <div className="container">
        <div className="row text-center mb-5">
          <div className="col-md-4 pb-1 pb-md-0">
            <div className="card">
              <img className="card-img-top" src="../images/Cestas/Abundância.jpg" alt="Cesta Grande" />
              <div className="card-body">
                <h5 className="card-title"> Cesta Abundância</h5>
                <p className="card-text"> 20 itens </p>
                <a href="#" className="btn btn-success"> Ver Composição</a>
              </div>
            </div>
          </div>
          <div className="col-md-4 pb-1 pb-md-0">
            <div className="card">
              <img className="card-img-top" src="../images/Cestas/cesta-presente-cafe-da-manha.jpg" alt="Cesta Média" />
              <div className="card-body">
                <h5 className="card-title"> Cesta Média</h5>
                <p className="card-text"> 15 itens</p>
                <a href="#" className="btn btn-success"> Ver Composição</a>
              </div>
            </div>
          </div>
          <div className="col-md-4 pb-1 pb-md-0">
            <div className="card">
              <img className="card-img-top" src="../images/Cestas/cesta-pequena.jpg" alt="Cesta Pequena" />
              <div className="card-body">
                <h5 className="card-title"> Cesta Pequena</h5>
                <p className="card-text"> 10 itens </p>
                <a href="#" className="btn btn-success"> Ver Composição</a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer/>
    </>)
}

export default Home