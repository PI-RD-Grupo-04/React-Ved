import './Home.css'
import Footer from '../../components/footer/Footer'
import Header from '../../components/header/Header'
import { Carousel } from 'react-bootstrap'
import frete from '../../components/asserts/imagens/imgBody/frete.png'
import carrosel1mel from '../../components/asserts/imagens/Carousel/carrosel1mel.jpg'
import carrosel2frutas from '../../components/asserts/imagens/Carousel/carrosel2frutas.png'
import venhaconhecer from '../../components/asserts/imagens/Carousel/venhaconhecer.jpg'
import ProductCard from '../../components/productCard/ProductCard'
import  Button  from '..//..//components/button/Button'

function Home() {
  return (
    <>

      <Header />
      {/* *************************************** BANNER END ************************************ */}
      <div className="d-flex justify-content-center flex-column">
        <img className="banner" src={frete}
          alt="imagem com informações sobre o frete" />
      </div>
      {/* *************************************** CAROUSEL BEGIN ************************************ */}
      <Carousel>
        <Carousel.Item interval={1000}>
          <img
            className="d-block w-100"
            src={carrosel1mel}
            alt="First slide"
          />
          <Carousel.Caption>

          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={500}>
          <img
            className="d-block w-100"
            src={carrosel2frutas}
            alt="Second slide"
          />
          <Carousel.Caption>

          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={venhaconhecer}
            alt="Third slide"
          />
          <Carousel.Caption>

          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      {/* *************************************** CAROUSEL BEGIN ************************************ */}


      {/* Titulo * */}
      <div className="container title-main">
        <h2 className="text-center"> <strong>OFERTAS ESPECIAIS</strong></h2>
      </div>



      {/* *************************************** PRODUTOS BEGIN ************************************ */}

      <div className="container mb-5">
        <div className="row justify-content-between ">


          <ProductCard col="col-12 col-sm-6 col-lg-4" link='https://i.ibb.co/nP8cZL2/abacaxi.png' nome="abacaxi"
            peso={1.00} price={12.90} />
          <ProductCard col="col-12 col-sm-6 col-lg-4" link='https://i.ibb.co/nP8cZL2/abacaxi.png' nome="abacaxi"
            peso={1.00} price={12.90} />
          <ProductCard col="col-12 col-sm-6 col-lg-4" link='https://i.ibb.co/nP8cZL2/abacaxi.png' nome="abacaxi"
            peso={1.00} price={12.90} />
             <ProductCard col="col-12 col-sm-6 col-lg-4" link='https://i.ibb.co/nP8cZL2/abacaxi.png' nome="abacaxi"
            peso={1.00} price={12.90} />
          <ProductCard col="col-12 col-sm-6 col-lg-4" link='https://i.ibb.co/nP8cZL2/abacaxi.png' nome="abacaxi"
            peso={1.00} price={12.90} />
          <ProductCard col="col-12 col-sm-6 col-lg-4" link='https://i.ibb.co/nP8cZL2/abacaxi.png' nome="abacaxi"
            peso={1.00} price={12.90} />

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
        </div></div>
      <Footer />
    </>)
}

export default Home