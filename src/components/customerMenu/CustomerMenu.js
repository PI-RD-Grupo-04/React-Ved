import './CustomerMenu.css'
import menuhamburguer from '../asserts/imagens/Header/hamburger_menu.png'

function CustomerMenu() {


    return (



        <>
            {/* ************** BEGIN Parte do Menu lateral  **************   */}
            <div className="text-left menu-lateral-mobile">
                <main className="flex-fill cor-nav">
                    <div className="list-group  ">
                        <h3 className="text-center mt-2 menu-title"> Atalhos</h3>
                        <a href="./minhaConta.html" className="list-group-item list-group-item-action  ">
                            <i className="bnt-hover fs-6"></i> Dados Pessoais
                        </a>
                        <a href="./meusPedidos.html" className="list-group-item list-group-item-action">
                            <i className="bi-mailbox fs-6"></i> Meus Pedidos
                        </a>
                        <a href="./meusEndereços.html" className="list-group-item list-group-item-action">
                            <i className="bi-house-door fs-6"></i> Meus Endereços
                        </a>
                        <a href="./meusFavoritos.html" className="list-group-item list-group-item-action">
                            <i className="bi-truck fs-6"></i> Meus Favoritos
                        </a>
                        <a href="./meusCartoes.html" className="list-group-item list-group-item-action">
                            <i className="bi-heart fs-6"></i> Meus Cartões
                        </a>
                        <a href="./login.html" className="list-group-item list-group-item-action">
                            <i className="bi-door-open fs-6"></i> Sair
                        </a>
                    </div>
                </main>
            </div>
            {/* ************** END Parte do Menu lateral  **************   */}



            {/* ************** COMEÇO da parte do OFFCANVAS  **************   */}
            <div className="col-3 menu-lateral-canvas">
                <div className="col-2 mt-3 mb-3">
                    <a className="btn border canvas-btn " data-bs-toggle="offcanvas" href="#offcanvasMenuLateral" role="button"
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
                                <a href="./minhaConta.html">
                                    <li className="li-item-menuLateral">Dados Pessoais</li>
                                </a>
                                <a href="./meusPedidos.html">
                                    <li className="li-item-menuLateral">Meus Pedidos</li>
                                </a>
                                <a href="./meusEndereços.html">
                                    <li className="li-item-menuLateral">Meus Endereços</li>
                                </a>
                                <a href="./meusFavoritos.html">
                                    <li className="li-item-menuLateral">Meus Favoritos</li>
                                </a>
                                <a href="./meusCartoes.html">
                                    <li className="li-item-menuLateral">Meus Cartões</li>
                                </a>
                                <hr />
                                <a href="./login.html">
                                    <li className="li-item-menuLateral">Sair</li>
                                </a>
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