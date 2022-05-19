import './Category.css'
import Header from '../../components/header/Header'
import Footer from '../../components/footer/Footer'
import React, { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import ProductCard from '../../components/productCard/ProductCard'
import hamburger_menu from '../../components/asserts/imagens/Header/hamburger_menu.png'
import { InputGroup, Dropdown, DropdownButton, FormControl } from 'react-bootstrap'
import { baseCategoria, baseHome } from '../../environments'
import axios from 'axios'


export default function Category() {

    const { buscar } = useParams()
 
    const [busca, setBusca] = useState([])
    const [categorias, setCategorias] = useState([])
    const [novidade, setNovidade] = useState([])

    useEffect(() => {
      
        if (buscar == 'novidade') {
            listaNovidade()
        }else {
            getBuscarProduto()
        }
        getBuscarCategoria()
        listaProdutos()
        listaCategorias()
        listaNovidade()

    }, [])

    const getBuscarProduto = () => {
        axios.get(`${baseCategoria}/palavra/${buscar}`)
            .then((response) => {
                setBusca(response.data)
                console.log(response.data)
            })
            .catch((error) => {
                console.error(error.messege)
            })
    }

    const getBuscarCategoria = () => {
        axios.get(`${baseCategoria}/${buscar}/categoria`)
            .then((response) => {
                setBusca(response.data)
                console.log(response.data)
            })
            .catch((error) => {
                console.error(error.messege)
            })
    }

    const listaProdutos = () => {
        return busca.map(item => {
            return (
                < >
                    <ProductCard key={item.id} col="col-12 col-sm-6 col-md-6 col-lg-6 col-xl-4" img={item.url} link={`/product/${item.id}`} nome={item.nomeProduto} status={item.statusProduto}
                        descri={item.descricao} price={item.preco} />
                </>
            )
        })
    }

    const listaNovidade = () => {
        axios.get(`${baseHome}/novidade`)
            .then((response) => {
                setBusca(response.data)
            })
            .catch((error) => {
                console.error(error.messege)
            })
    }

    const listaCategorias = () => {
        axios.get(`${baseCategoria}`)
            .then((response) => {
                setCategorias(response.data)
            })
            .catch((error) => {
                console.error(error.messege)
            })
    }

    const menuCategoria = () => {
        return categorias.map(cate => {
            return (
                <li className="nav-item menuletra"><Link to={`/category/${cate.id}`} className="nav-link menuletra" href={cate.id}>{cate.descricao}</Link></li>
            )
        })
    }

    return (
        <>
            <Header />
            <div className="container mt-5 mb-4  ">
                <div className="row ">
                    <div className="col-3 borda-menu color-menu2">
                        <div className="row text-left text-left">
                            <nav className="navlateral border-menu ">
                                <ul className="nav flex-column">
                                    <li className="nav-item mt-3 ">

                                        <h2 className="text-category">Categoria</h2>
                                        <hr />
                                    </li>
                                    {menuCategoria()}

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




                    <div className="col-sm-12 col-lg-9 ladodireito ">
                        <div className="row justify-content-between ">


                            <div className="col-12 col-sm-6  menucanvas">

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

                            <p className="text-left  produtoencoontrado col-lg-8"> Produtos Encontrados: Frutas</p>

                            <div className="dropfilter col-sm-6 col-lg-4  ">
                                <div className="d-flex flex-row-reverse bd-highligh align-items-center">
                                    <Dropdown>
                                        <Dropdown.Toggle variant="success" id="dropdown-basic">
                                            Filtro
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

                            {listaProdutos()}
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