import './Home.css'
import { useEffect, useState } from 'react'
import axios from 'axios'
import Footer from '../../components/footer/Footer'
import Header from '../../components/header/Header'
import { Carousel } from 'react-bootstrap'
import frete from '../../components/asserts/imagens/imgBody/frete.png'
import carrosel1mel from '../../components/asserts/imagens/Carousel/carrosel1mel.jpg'
import item1 from '../../components/asserts/imagens/Carousel/item1.webp'
import item2 from '../../components/asserts/imagens/Carousel/item2.webp'
import ProductCard from '../../components/productCard/ProductCard'
import bannerprincipal from '../../components/asserts/imagens/bannerprincipal.gif'
import Title from '../../components/title/Title'
import CarroseuHome from '../../components/carroseu/CarroseuHome'
import { baseHome } from "../../environments";


function Home() {

  const [oferta, setOferta] = useState([])
  const [novidade, setNovidade] = useState([])

  useEffect(() => {
    axios.get(`${baseHome}/ofertas`)
      .then((response) => {
        setOferta(response.data)
      })
      .catch((error) => {
        console.error(error)
      })
    axios.get(`${baseHome}/novidade`)
      .then((response) => {
        setNovidade(response.data)
      })
      .catch((error) => {
        console.error(error)
      })

  }, [])





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
              src={item2}
              alt="Second slide"
            />
            <Carousel.Caption>
            </Carousel.Caption>
          </Carousel.Item>

          <Carousel.Item interval={500}>
            <img
              className="d-block w-100"
              src={item1}
              alt="
              third slide"
            />
            <Carousel.Caption>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>

        <Carousel.Item interval={500}>
          <img
            className="d-block w-100"
            src={item2}
            alt="Second slide"
          />
          <Carousel.Caption>
          </Carousel.Caption>
        </Carousel.Item>
        {/* *************************************** CAROUSEL BEGIN ************************************ */}
      </div>

      {/* Titulo * */}
      <div className="container title-main mt-1">
        <Title label="OFERTAS ESPECIAIS" > OFERTAS ESPECIAIS</Title>
      </div>
      {/* *************************************** PRODUTOS BEGIN ************************************ */}

      <div className="container  ">
        <div className="row justify-content-space ">
          {
            oferta.map(item => {
              return (
                <ProductCard key={item.id} col="col-12 col-sm-6 col-md-6 col-lg-6 col-xl-3" status={item.statusProduto} img={item.url} link={`/product/${item.id}`} nome={item.nomeProduto}
                  descri={item.descricao} product={item} price={item.preco} />
              )
            })
          }
        </div>
      </div>

      {/* Titulo * */}
      <div className="container title-main mt-5">
        <Title label="NOVIDADES" ></Title>
      </div>


      <CarroseuHome novidades={novidade} />

      <Footer />
    </>
  )
}

export default Home