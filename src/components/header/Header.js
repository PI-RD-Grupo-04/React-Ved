import { Link } from 'react-router-dom'
import './Header.css'
import logo from '../asserts/imagens/Header/logo.png'
import menuhamburguer from '../asserts/imagens/Header/hamburger_menu.png'
import lupa from '../asserts/imagens/Header/icon-seach.png'
import cart from '../asserts/imagens/Users_icon/shopping-cart.png'
import NavBar from '../navBar/NavBar'


function Header() {
    return (
        <>
            <header>
                <div className="container ">
                    <div className="row align-items-center">
                        {/* LOGO */}
                        <div className="logo-img col-1">
                            <Link to="/"><img src={logo} width="80px" alt="Logo Ved"
                                title="VED - Alimentos Organicos" /></Link>
                        </div>
                        {/* END BLOCK*/}
                        <div className="col-1 block-null"></div>
                        {/* CAMPO PARA MOBILE */}
                        <div className="canvas-mobile row justify-content-between align-items-center ">
                            {/* OFF CANVAS PARA MOBILE */}

                            {/*}  **************** BUTTON menu CANVAS **************** */}
                            <div className="col-2 mt-3 mb-3">
                                <a className="btn border canvas-btn " data-bs-toggle="offcanvas" href="#offcanvasExample" role="button"
                                    aria-controls="offcanvasExample">
                                    <img src={menuhamburguer} />
                                </a>
                            </div>

                            {/*}**************** LOGO **************** */}
                            <div className="col-7 d-flex  justify-content-center">
                                <Link to="/" ><img src={logo} width="80vw" alt="Logo Ved"
                                    title="VED - Alimentos Organicos" /></Link>
                            </div>

                            {/*} **************** CESTA **************** */}
                            <div className="col-3 mt-3 mb-3  icon-cesta-mobile">
                                <span className="badge bg-success bg-position-mobile">1</span>
                                <Link to="/cesta"><img src={cart} width="60px" /></Link>
                            </div>
                        </div>

                        {/*} search */}
                        <div className="col-12 col-md-6 search-mobile">
                            <form className="d-flex">
                                <div className="input-group mt-3 mb-3">
                                    <input type="text" className="form-control" placeholder="Busque Aqui..." aria-label="Recipient's username"
                                        aria-describedby="button-addon2" />
                                    <button className="btn  button-search" type="button" id="button-addon2"><img
                                        src={lupa} width="24px" /></button>
                                </div>
                            </form>
                        </div>
                        {/*} End search */}

                        {/*} begin icones usuario */}
                        <div className="col-4 icon-user justify-content-between">
                            <div className="col-4 mt-3 mb-1">
                                <Link className="icon-perfil icon-config" to='/Login'>Login </Link>
                            </div>
                            <div className="col-4 mt-3 mb-1">
                                <Link className="icon-fav icon-config" to='/favorites'>Favoritos</Link>
                            </div>
                            <div className="col-4 mt-3 mb-1">
                                <Link className="icon-cesta icon-config" to='/cesta'>Cesta</Link>
                                <span className="badge bg-success bg-position">1</span>
                            </div>
                        </div>
                        {/*} end icones usuario */}
                    </div>
                </div>

                {/*} ******************* CORPO DO CANVAS   ********************/}
                <div className="offcanvas offcanvas-start" tabindex="-1" id="offcanvasExample" aria-labelledby="offcanvasExampleLabel">
                    <div className="offcanvas-header">
                        <h4 className="offcanvas-title title-canvas" id="offcanvasExampleLabel">Menu</h4>

                        <button type="button" className="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                    </div>
                    {/*} CORPO CANVAS   *****************/}
                    <div className="offcanvas-body ">
                        <div className="flex-column">
                            <ul className="ul-canvas-header" />
                            <li className="nav-item-canvas dropdown">
                                <a className="nav-link " data-bs-toggle="collapse" href="#collapseExample" role="button" aria-expanded="false"
                                    aria-controls="collapseExample">
                                     Categorias <svg className="mr" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-down-up" viewBox="0 0 16 16">
                                        <path fill-rule="evenodd" d="M11.5 15a.5.5 0 0 0 .5-.5V2.707l3.146 3.147a.5.5 0 0 0 .708-.708l-4-4a.5.5 0 0 0-.708 0l-4 4a.5.5 0 1 0 .708.708L11 2.707V14.5a.5.5 0 0 0 .5.5zm-7-14a.5.5 0 0 1 .5.5v11.793l3.146-3.147a.5.5 0 0 1 .708.708l-4 4a.5.5 0 0 1-.708 0l-4-4a.5.5 0 0 1 .708-.708L4 13.293V1.5a.5.5 0 0 1 .5-.5z" />
                                    </svg>

                                </a>

                                {/*} CORPO */}
                                <div className="collapse" id="collapseExample">
                                    <div className="card card-body">
                                        <Link to="/category" className="dropdown-item">Frutas</Link>
                                        <Link to="/category" className="dropdown-item">Verduras</Link>
                                        <Link to="/category" className="dropdown-item" >Mercearia</Link>
                                    </div>
                                </div>

                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="./categorias.html">Novidades</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="./planos.html">Planos</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="./sobreNos.html">Sobre Nós</a>
                            </li>
                            <hr />

                            <li className="welcome">
                                <h3 className="title-canvas">Sua Area</h3>
                            </li>
                            <hr />
                           <Link  to="/login"><li className="link-canvas">Fazer Login</li></Link> 
                            <li><a href="./cesta.html">Cesta</a></li>
                            <li><a href="./meusFavoritos.html">Favorito</a></li>
                            <ul />
                        </div>
                    </div>
                </div>
            </header>
            <NavBar />
        </>
    )
}

export default Header