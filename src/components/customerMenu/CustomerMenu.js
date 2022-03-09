import './CustomerMenu.css'
import menuhamburguer from '../asserts/imagens/Header/hamburger_menu.png'
import { Link } from 'react-router-dom'
function CustomerMenu() {


    return (



        <>
            {/* ************** BEGIN Parte do Menu lateral  **************   */}
            <div className="text-left menu-lateral-mobile">
                <main className="flex-fill cor-nav">
                    <div className="list-group  ">
                        <h3 className="text-center mt-2 menu-title"> Atalhos</h3>
                        <Link to="/bill" className="list-group-item list-group-item-action  ">
                            <i className="bnt-hover fs-6"></i> Dados Pessoais
                        </Link>
                        <Link to="/requests" className="list-group-item list-group-item-action">
                            <i className="bi-mailbox fs-6"></i> Meus Pedidos
                        </Link>
                        <Link to="/address" className="list-group-item list-group-item-action">
                            <i className="bi-house-door fs-6"></i> Meus Endereços
                        </Link>
                        <Link to="/favorites" className="list-group-item list-group-item-action">
                            <i className="bi-truck fs-6"></i> Meus Favoritos
                        </Link>
                        <Link to="" className="list-group-item list-group-item-action">
                            <i className="bi-heart fs-6"></i> Meus Cartões
                        </Link>
                        <Link to="/Login" className="list-group-item list-group-item-action">
                            <i className="bi-door-open fs-6"></i> Sair
                        </Link>
                    </div>
                </main>
            </div>
            {/* ************** END Parte do Menu lateral  **************   */}



            {/* ************** COMEÇO da parte do OFFCANVAS  **************   */}
            <div className="col-3 menu-lateral-canvas">
                <div className="col-2 mt-3 mb-3">
                    <a className="btn border canvas-btn " data-bs-toggle="offcanvas" to="#offcanvasMenuLateral" role="button"
                        aria-controls="offcanvasMenuLateral">
                        <img src={menuhamburguer} />
                    </a>
                </div>
                {/* COMEÇO DO CANVAS */}
                <div className="offcanvas offcanvas-start" tabindex="-1" id="offcanvasMenuLateral"
                    aria-labelledby="offcanvasMenuLateral">
                    <div className="offcanvas-header">
                        <h3 className="offcanvas-title text-center" id="offcanvasMenuLateral">Atalhos</h3>
                        <button type="button" className="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                    </div>


                    <div className="offcanvas-body ">
                        <div className="flex-column">
                            <ul className="ul-canvas-menu">
                                <Link to="/bill">
                                    <li className="li-item-menuLateral">Dados Pessoais</li>
                                </Link>
                                <Link to ="/requests">
                                    <li className="li-item-menuLateral">Meus Pedidos</li>
                                </Link>
                                <Link to ="/address">
                                    <li className="li-item-menuLateral">Meus Endereços</li>
                                </Link>
                                <Link to ="/favorites">
                                    <li className="li-item-menuLateral">Meus Favoritos</li>
                                </Link>
                                <Link to ="./meusCartoes.html">
                                    <li className="li-item-menuLateral">Meus Cartões</li>
                                </Link>
                                <hr />
                                <Link to ="/Login">
                                    <li className="li-item-menuLateral">Sair</li>
                                </Link>
                            </ul>
                        </div>
                    </div>
                </div>
                {/* corpo canvas */}

                {/* ****END  CANVAS DO MENU LATERAL */}
            </div>

        </>




    )






}


export default CustomerMenu;