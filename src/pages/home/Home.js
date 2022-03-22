import './Home.css'
import Footer from '../../components/footer/Footer'
import Header from '../../components/header/Header'
import { Carousel } from 'react-bootstrap'
import frete from '../../components/asserts/imagens/imgBody/frete.png'
import carrosel1mel from '../../components/asserts/imagens/Carousel/carrosel1mel.jpg'
import carrosel2frutas from '../../components/asserts/imagens/Carousel/carrosel2frutas.png'
import venhaconhecer from '../../components/asserts/imagens/Carousel/venhaconhecer.jpg'
import ProductCard from '../../components/productCard/ProductCard'
import bannerprincipal from '../../components/asserts/imagens/bannerprincipal.gif'
import Title from '../../components/title/Title'
// import Carousel from 'react-responsive-carousel'




function Home() {
  return (
    <>

      <Header />
      <div className="banner">
        <div class="gif gif-expand-lg d-flex justify-content-center flex-column">
          <img src={bannerprincipal} className="bannergif" />
        </div> 
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
      </div>

      {/* Titulo * */}
      <div className="container title-main mt-5">
        <h2 className="text-center"> <strong>OFERTAS ESPECIAIS</strong></h2>
      </div>



      {/* *************************************** PRODUTOS BEGIN ************************************ */}

      <div className="container mb-5 mt-5">
        <div className="row justify-content-space ">


          <ProductCard col="col-12 col-sm-6 col-md-6  col-lg-4 col-xl-3  " img='https://i.ibb.co/nP8cZL2/abacaxi.png' link='/product' nome="abacaxi"
            peso={1.00} price={12.90} />
          <ProductCard col="col-12 col-sm-6 col-md-6  col-lg-4 col-xl-3" img='https://i.ibb.co/nP8cZL2/abacaxi.png' link='/product' nome="abacaxi"
            peso={1.00} price={12.90} />
          <ProductCard col="col-12 col-sm-6 col-md-6  col-lg-4 col-xl-3 " img='https://i.ibb.co/nP8cZL2/abacaxi.png' link='/product' nome="abacaxi"
            peso={1.00} price={12.90} />
          <ProductCard col="col-12 col-sm-6 col-md-6  col-lg-4 col-xl-3 " img='https://i.ibb.co/nP8cZL2/abacaxi.png' link='/product' nome="abacaxi"
            peso={1.00} price={12.90} />
          <ProductCard col="col-12 col-sm-6 col-md-6  col-lg-4 col-xl-3 " img='https://i.ibb.co/nP8cZL2/abacaxi.png' link='/product' nome="abacaxi"
            peso={1.00} price={12.90} />
          <ProductCard col="col-12 col-sm-6 col-md-6  col-lg-4 col-xl-3 " img='https://i.ibb.co/nP8cZL2/abacaxi.png' link='/product' nome="abacaxi"
            peso={1.00} price={12.90} />
          <ProductCard col="col-12 col-sm-6 col-md-6  col-lg-4 col-xl-3 " img='https://i.ibb.co/nP8cZL2/abacaxi.png' link='/product' nome="abacaxi"
            peso={1.00} price={12.90} />
          <ProductCard col="col-12 col-sm-6 col-md-6  col-lg-4 col-xl-3 " img='https://i.ibb.co/nP8cZL2/abacaxi.png' link='/product' nome="abacaxi"
            peso={1.00} price="12,90" />
        </div>
      </div>


      <div className="row  tela1">
        <div className="container mb-5 mt-5 ">
          <Carousel variant="dark">
            <Carousel.Item>
              <div className="container mb-5 mt-5 ">
                <div className="row d-flex justify-content-around ">
                  <ProductCard col="col-12 col-sm-6 col-md-6  col-lg-4 col-xl-3 " img='https://i.ibb.co/nP8cZL2/abacaxi.png' link='/product' nome="abacaxi"
                    peso={1.00} price={12.90} />
                  <ProductCard col="col-12 col-sm-6 col-md-6  col-lg-4 col-xl-3 " img='https://i.ibb.co/nP8cZL2/abacaxi.png' link='/product' nome="abacaxi"
                    peso={1.00} price={12.90} />
                  <ProductCard col="col-12 col-sm-6 col-md-6  col-lg-4 col-xl-3 " img='https://i.ibb.co/nP8cZL2/abacaxi.png' link='/product' nome="abacaxi"
                    peso={1.00} price={12.90} />
                  <ProductCard col="col-12 col-sm-6 col-md-6  col-lg-4 col-xl-3 " img='https://i.ibb.co/nP8cZL2/abacaxi.png' link='/product' nome="abacaxi"
                    peso={1.00} price={12.90} />
                </div>
              </div>
            </Carousel.Item>
            <Carousel.Item >
              <div className="container mb-5 mt-5 ">
                <div className="row d-flex justify-content-around ">
                  <ProductCard col="col-12 col-sm-6 col-md-6  col-lg-4 col-xl-3 " img='https://i.ibb.co/nP8cZL2/abacaxi.png' link='/product' nome="abacaxi"
                    peso={1.00} price={12.90} />
                  <ProductCard col="col-12 col-sm-6 col-md-6  col-lg-4 col-xl-3 " img='https://i.ibb.co/nP8cZL2/abacaxi.png' link='/product' nome="abacaxi"
                    peso={1.00} price={12.90} />
                  <ProductCard col="col-12 col-sm-6 col-md-6  col-lg-4 col-xl-3 " img='https://i.ibb.co/nP8cZL2/abacaxi.png' link='/product' nome="abacaxi"
                    peso={1.00} price={12.90} />
                  <ProductCard col="col-12 col-sm-6 col-md-6  col-lg-4 col-xl-3 " img='https://i.ibb.co/nP8cZL2/abacaxi.png' link='/product' nome="abacaxi"
                    peso={1.00} price={12.90} />
                </div>
              </div>
            </Carousel.Item>
            <Carousel.Item>

              <div className="container mb-5 mt-5 ">
                <div className="row d-flex justify-content-around ">
                  <ProductCard col="col-12 col-sm-6 col-md-6  col-lg-4 col-xl-3 " img='https://i.ibb.co/nP8cZL2/abacaxi.png' link='/product' nome="abacaxi"
                    peso={1.00} price={12.90} />
                  <ProductCard col="col-12 col-sm-6 col-md-6  col-lg-4 col-xl-3 " img='https://i.ibb.co/nP8cZL2/abacaxi.png' link='/product' nome="abacaxi"
                    peso={1.00} price={12.90} />
                  <ProductCard col="col-12 col-sm-6 col-md-6  col-lg-4 col-xl-3 " img='https://i.ibb.co/nP8cZL2/abacaxi.png' link='/product' nome="abacaxi"
                    peso={1.00} price={12.90} />
                  <ProductCard col="col-12 col-sm-6 col-md-6  col-lg-4 col-xl-3 " img='https://i.ibb.co/nP8cZL2/abacaxi.png' link='/product' nome="abacaxi"
                    peso={1.00} price={12.90} />
                </div>
              </div>
            </Carousel.Item>
          </Carousel>
        </div>
      </div>





      <div className="row  tela2 ">
        <div className="container mb-5 mt-5 ">
          <Carousel variant="dark">
            <Carousel.Item>
              <div className="container mb-5 mt-5 ">
                <div className="row d-flex justify-content-around ">
                  <ProductCard col="col-12 col-sm-6 col-md-6 col-lg-4  " img='https://i.ibb.co/nP8cZL2/abacaxi.png' link='/product' nome="abacaxi"
                    peso={1.00} price={12.90} />
                  <ProductCard col="col-12 col-sm-6 col-md-6  col-lg-4  " img='https://i.ibb.co/nP8cZL2/abacaxi.png' link='/product' nome="abacaxi"
                    peso={1.00} price={12.90} />
                  <ProductCard col="col-12 col-sm-6 col-md-6 col-lg-4  " img='https://i.ibb.co/nP8cZL2/abacaxi.png' link='/product' nome="abacaxi"
                    peso={1.00} price={12.90} />
                </div>
              </div>
            </Carousel.Item>
            <Carousel.Item >
              <div className="container mb-5 mt-5 ">
                <div className="row d-flex justify-content-around ">
                  <ProductCard col="col-12 col-sm-6 col-md-6  col-lg-4 " img='https://i.ibb.co/nP8cZL2/abacaxi.png' link='/product' nome="abacaxi"
                    peso={1.00} price={12.90} />
                  <ProductCard col="col-12 col-sm-6 col-md-6  col-lg-4 " img='https://i.ibb.co/nP8cZL2/abacaxi.png' link='/product' nome=" abacaxi"
                    peso={1.00} price={12.90} />
                  <ProductCard col="col-12 col-sm-6 col-md-6  col-lg-4 " img='https://i.ibb.co/nP8cZL2/abacaxi.png' link='/product' nome="abacaxi"
                    peso={1.00} price={12.90} />

                </div>
              </div>
            </Carousel.Item>
            <Carousel.Item>
              <div className="container mb-5 mt-5 ">
                <div className="row d-flex justify-content-around ">
                  <ProductCard col="col-12 col-sm-6 col-md-6  col-lg-4  " img='https://i.ibb.co/nP8cZL2/abacaxi.png' link='/product' nome="abacaxi"
                    peso={1.00} price={12.90} />
                  <ProductCard col="col-12 col-sm-6 col-md-6  col-lg-4  " img='https://i.ibb.co/nP8cZL2/abacaxi.png' link='/product' nome="abacaxi"
                    peso={1.00} price={12.90} />
                  <ProductCard col="col-12 col-sm-6 col-md-6  col-lg-4  " img='https://i.ibb.co/nP8cZL2/abacaxi.png' link='/product' nome="abacaxi"
                    peso={1.00} price={12.90} />
                </div>
              </div>
            </Carousel.Item>
            <Carousel.Item>

              <div className="container mb-5 mt-5 ">
                <div className="row d-flex justify-content-around ">
                  <ProductCard col="col-12 col-sm-6 col-md-6  col-lg-4  " img='https://i.ibb.co/nP8cZL2/abacaxi.png' link='/product' nome="abacaxi"
                    peso={1.00} price={12.90} />
                  <ProductCard col="col-12 col-sm-6 col-md-6  col-lg-4  " img='https://i.ibb.co/nP8cZL2/abacaxi.png' link='/product' nome="abacaxi"
                    peso={1.00} price={12.90} />
                  <ProductCard col="col-12 col-sm-6 col-md-6  col-lg-4  " img='https://i.ibb.co/nP8cZL2/abacaxi.png' link='/product' nome="abacaxi"
                    peso={1.00} price={12.90} />
                </div>
              </div>
            </Carousel.Item>
          </Carousel>
        </div>
      </div>



      <div className="row  tela3 ">
        <div className="container mb-5 mt-5 ">
          <Carousel variant="dark">
            <Carousel.Item>
              <div className="container mb-5 mt-5 ">
                <div className="row d-flex justify-content-around ">
                  <ProductCard col="col-12 col-sm-6 col-md-6   " img='https://i.ibb.co/nP8cZL2/abacaxi.png' link='/product' nome="abacaxi"
                    peso={1.00} price={12.90} />
                  <ProductCard col="col-12 col-sm-6 col-md-6    " img='https://i.ibb.co/nP8cZL2/abacaxi.png' link='/product' nome="abacaxi"
                    peso={1.00} price={12.90} />
                </div>
              </div>
            </Carousel.Item>
            <Carousel.Item>
              <div className="container mb-5 mt-5 ">
                <div className="row d-flex justify-content-around ">
                  <ProductCard col="col-12 col-sm-6 col-md-6   " img='https://i.ibb.co/nP8cZL2/abacaxi.png' link='/product' nome="abacaxi"
                    peso={1.00} price={12.90} />
                  <ProductCard col="col-12 col-sm-6 col-md-6    " img='https://i.ibb.co/nP8cZL2/abacaxi.png' link='/product' nome="abacaxi"
                    peso={1.00} price={12.90} />

                </div>
              </div>
            </Carousel.Item>
            <Carousel.Item>
              <div className="container mb-5 mt-5 ">
                <div className="row d-flex justify-content-around ">
                  <ProductCard col="col-12 col-sm-6 col-md-6   " img='https://i.ibb.co/nP8cZL2/abacaxi.png' link='/product' nome="abacaxi"
                    peso={1.00} price={12.90} />
                  <ProductCard col="col-12 col-sm-6 col-md-6    " img='https://i.ibb.co/nP8cZL2/abacaxi.png' link='/product' nome="abacaxi"
                    peso={1.00} price={12.90} />

                </div>
              </div>
            </Carousel.Item>
            <Carousel.Item>
              <div className="container mb-5 mt-5 ">
                <div className="row d-flex justify-content-around ">
                  <ProductCard col="col-12 col-sm-6 col-md-6   " img='https://i.ibb.co/nP8cZL2/abacaxi.png' link='/product' nome="abacaxi"
                    peso={1.00} price={12.90} />
                  <ProductCard col="col-12 col-sm-6 col-md-6    " img='https://i.ibb.co/nP8cZL2/abacaxi.png' link='/product' nome="abacaxi"
                    peso={1.00} price={12.90} />

                </div>
              </div>
            </Carousel.Item>
            <Carousel.Item>
              <div className="container mb-5 mt-5 ">
                <div className="row d-flex justify-content-around ">
                  <ProductCard col="col-12 col-sm-6 col-md-6   " img='https://i.ibb.co/nP8cZL2/abacaxi.png' link='/product' nome="abacaxi"
                    peso={1.00} price={12.90} />
                  <ProductCard col="col-12 col-sm-6 col-md-6    " img='https://i.ibb.co/nP8cZL2/abacaxi.png' link='/product' nome="abacaxi"
                    peso={1.00} price={12.90} />

                </div>
              </div>
            </Carousel.Item>
            <Carousel.Item>
              <div className="container mb-5 mt-5 ">
                <div className="row d-flex justify-content-around ">
                  <ProductCard col="col-12 col-sm-6 col-md-6   " img='https://i.ibb.co/nP8cZL2/abacaxi.png' link='/product' nome="abacaxi"
                    peso={1.00} price={12.90} />
                  <ProductCard col="col-12 col-sm-6 col-md-6    " img='https://i.ibb.co/nP8cZL2/abacaxi.png' link='/product' nome="abacaxi"
                    peso={1.00} price={12.90} />

                </div>
              </div>
            </Carousel.Item>
          </Carousel>
        </div>
      </div>


      <div className="row  tela5 ">
        <div className="container mb-5 mt-5 ">
          <Carousel variant="dark">
            <Carousel.Item>
              <div className="container mb-5 mt-5 ">
                <div className="row d-flex justify-content-around ">
                  <ProductCard col="col-12   " img='https://i.ibb.co/nP8cZL2/abacaxi.png' link='/product' nome="abacaxi"
                    peso={1.00} price={12.90} />
                </div>
              </div>
            </Carousel.Item>
            <Carousel.Item>
              <div className="container mb-5 mt-5 ">
                <div className="row d-flex justify-content-around ">
                  <ProductCard col="col-12   " img='https://i.ibb.co/nP8cZL2/abacaxi.png' link='/product' nome="abacaxi"
                    peso={1.00} price={12.90} />
                </div>
              </div>
            </Carousel.Item>
            <Carousel.Item>
              <div className="container mb-5 mt-5 ">
                <div className="row d-flex justify-content-around ">
                  <ProductCard col="col-12   " img='https://i.ibb.co/nP8cZL2/abacaxi.png' link='/product' nome="abacaxi"
                    peso={1.00} price={12.90} />
                </div>
              </div>
            </Carousel.Item>
            <Carousel.Item>
              <div className="container mb-5 mt-5 ">
                <div className="row d-flex justify-content-around ">
                  <ProductCard col="col-12   " img='https://i.ibb.co/nP8cZL2/abacaxi.png' link='/product' nome="abacaxi"
                    peso={1.00} price={12.90} />
                </div>
              </div>
            </Carousel.Item>            <Carousel.Item>
              <div className="container mb-5 mt-5 ">
                <div className="row d-flex justify-content-around ">
                  <ProductCard col="col-12   " img='https://i.ibb.co/nP8cZL2/abacaxi.png' link='/product' nome="abacaxi"
                    peso={1.00} price={12.90} />
                </div>
              </div>
            </Carousel.Item>            <Carousel.Item>
              <div className="container mb-5 mt-5 ">
                <div className="row d-flex justify-content-around ">
                  <ProductCard col="col-12   " img='https://i.ibb.co/nP8cZL2/abacaxi.png' link='/product' nome="abacaxi"
                    peso={1.00} price={12.90} />
                </div>
              </div>
            </Carousel.Item>            <Carousel.Item>
              <div className="container mb-5 mt-5 ">
                <div className="row d-flex justify-content-around ">
                  <ProductCard col="col-12   " img='https://i.ibb.co/nP8cZL2/abacaxi.png' link='/product' nome="abacaxi"
                    peso={1.00} price={12.90} />
                </div>
              </div>
            </Carousel.Item>            <Carousel.Item>
              <div className="container mb-5 mt-5 ">
                <div className="row d-flex justify-content-around ">
                  <ProductCard col="col-12   " img='https://i.ibb.co/nP8cZL2/abacaxi.png' link='/product' nome="abacaxi"
                    peso={1.00} price={12.90} />
                </div>
              </div>
            </Carousel.Item>            <Carousel.Item>
              <div className="container mb-5 mt-5 ">
                <div className="row d-flex justify-content-around ">
                  <ProductCard col="col-12   " img='https://i.ibb.co/nP8cZL2/abacaxi.png' link='/product' nome="abacaxi"
                    peso={1.00} price={12.90} />
                </div>
              </div>
            </Carousel.Item>            <Carousel.Item>
              <div className="container mb-5 mt-5 ">
                <div className="row d-flex justify-content-around ">
                  <ProductCard col="col-12   " img='https://i.ibb.co/nP8cZL2/abacaxi.png' link='/product' nome="abacaxi"
                    peso={1.00} price={12.90} />
                </div>
              </div>
            </Carousel.Item>            <Carousel.Item>
              <div className="container mb-5 mt-5 ">
                <div className="row d-flex justify-content-around ">
                  <ProductCard col="col-12   " img='https://i.ibb.co/nP8cZL2/abacaxi.png' link='/product' nome="abacaxi"
                    peso={1.00} price={12.90} />
                </div>
              </div>
            </Carousel.Item>            <Carousel.Item>
              <div className="container mb-5 mt-5 ">
                <div className="row d-flex justify-content-around ">
                  <ProductCard col="col-12   " img='https://i.ibb.co/nP8cZL2/abacaxi.png' link='/product' nome="abacaxi"
                    peso={1.00} price={12.90} />
                </div>
              </div>
            </Carousel.Item>
          </Carousel>

        </div>
      </div>

      <Footer />
    </>
  )
}

export default Home