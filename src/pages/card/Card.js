import './Card.css'
import Header from '../../components/header/Header'
import Footer from '../../components/footer/Footer'
import CustomerMenu from '../../components/customerMenu/CustomerMenu'
import CardInfo from '../../components/cardInfo/CardInfo' 



function Card() {
    return (
        <>
            <Header />
            <div class="container mt-3 mb-4  ">

                <div class="row ">
                    {/* <!--************* Parte esquerda da pagina começo *********************--> */}
                    <div class="col-2 col-sm-3  "> 
                       <CustomerMenu/>
                    </div>
                    {/* <!--************* COMEÇO DIREITA da pagina começo  *********************-->  */}
                    <div class="col-12 col-sm-9 order-md-last  mb-3">
                        {/* <!-- Informação do 1º cartao salvo --> */}
                        <h2 class="justify-content-between align-items-center title-main text-center mb-3">Meus Cartões</h2>
                        {/* <!-- area do primeira cartão --> */}
                        <div class="row border mb-3 pb-3 pt-3">
                            <div class="row ">
                                <CardInfo/>
                            </div>
                        </div>

                        {/* <!-- ************************MODEL PARA CADASTRO DE CARTÃO ********************* --> */}
                        {/* <!-- DIVISÃO DOS BUTTONS --> */}
                        <div class="row">
                            {/* <!-- BUTTON DO MODAL --> */}
                            <div class="col-6">
                                <button type="button" class="btn btn-suport" data-bs-toggle="modal" data-bs-target="#exampleModal">
                                    Cadastrar Cartão
                                </button>
                            </div>
                            {/* <!-- BUTTON DO EXCLUIR CARTÃO --> */}
                            <div class="col-6">
                                <button class=" btn btn-delete " type="submit">Excluir Cartão</button>
                            </div>

                        </div>

                        {/* <!-- ****************** CAMPO DO MODAL ****************** --> */}
                        <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                            <div class="modal-dialog">
                                <div class="modal-content">
                                    <div class="modal-header">
                                        <h5 class="modal-title" id="exampleModalLabel">Dados do Novo Cartão</h5>
                                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                    </div>
                                    <div class="modal-body">
                                        {/* <!--  *****************campo para o cadastro do novo cartão ******* --> */}
                                        <div class="cardpay-fix">
                                            {/* <!-- area do primeira cartão --> */}
                                            <div class="row border  pb-3 pt-3">
                                                <div class="row ">
                                                    <div class="col-12">
                                                        {/* <!--******Numero do cartão ***** --> */}
                                                        <label for="cc-number" class="form-label">Nº Cartão do
                                                            Titular</label>
                                                        <input type="text" class="form-control" id="cc-number" placeholder="" required/>
                                                            <div class="invalid-feedback">Nº Cartão Obrigatorio</div>
                                                    </div>
                                                    {/* <!--******NOME do cartão ***** --> */}
                                                    <div class="col-12">
                                                        <label for="cc-name" class="form-label">Nome do Titular</label>
                                                        <input type="text" class="form-control" id="cc-name" placeholder="" required/>
                                                            <small class="text-muted">Nome conforme exibido no
                                                                cartão</small>
                                                            <div class="invalid-feedback">Nome Obrigatorio</div>
                                                    </div>
                                                    {/* <!--******CPF do cartão ***** --> */}
                                                    <div class="col-12">
                                                        <label for="cpf-titular" class="form-label">CPF do Titular do
                                                            Cartão</label>
                                                        <input type="text" class="form-control" id="cpf-titular" placeholder="" required/>
                                                            <div class="invalid-feedback">Numero do Cartão Obrigatorio</div>
                                                    </div>
                                                    <div class="col-6 col-md-6">
                                                        {/* <!--******BANDEIRA do cartão ***** --> */}
                                                        <p for="bandeira-card" class="form-label">Bandeira</p>
                                                        {/* <img src= width="80px"/> */}
                                                            <div class="invalid-feedback">Cartão Invalido</div>
                                                    </div>
                                                    {/* <!--******VENCIMENTO do cartão ***** --> */}
                                                    <div class="col-6 col-sm-6">
                                                        {/* <!-- vencimento do cartão --> */}
                                                        <label for="cc-expiration" class="form-label">Vencimento</label>
                                                        <input type="text" class="form-control" id="cc-expiration" placeholder="" required/>
                                                            <div class="invalid-feedback">Data de Expiração Obrigatoria</div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        {/* <!-- FIM DO CORPO DO MODAL --> */}
                                    </div>
                                    <div class="modal-footer justify-content-between">
                                        <button type="button" class="btn btn-danger" data-bs-dismiss="modal">Cancelar</button>
                                        <button type="button" class="btn btn-success">Salvar</button>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* <!-- ******* FIM DO MODAL ******* --> */}

                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default Card