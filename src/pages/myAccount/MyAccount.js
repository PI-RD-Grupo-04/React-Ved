import './MyAccount.css'
import Header from '../../components/header/Header'
import Footer from '../../components/footer/Footer'
import CustomerMenu from '../../components/customerMenu/CustomerMenu'
import Title from '../../components/title/Title'

function MyAccount() {
   
   
   
   
    return (
        <>
            <Header />
            <div className="container mt-3 mb-4  ">
                <div className="row ">
                    <div className="col-2 col-sm-3 ">
                        <CustomerMenu />
                    </div>

                    <div className="col-12 col-sm-9 order-md-last  align-items-center justify-content-center  mb-3">
                       <Title label="Meus Dados"/>
                        <form id="feedbackForm" className="text-center">

                            <div className="form-group">
                                <label for="Nome" className="form-label">Nome:</label>
                                <input type="text" className="form-control" id="Nome"  value="Roberval  " required />
                                <div className="invalid-feedback">Apenas Letras</div>
                            </div>

                            <div className="form-group">
                                <label for="Sobrenome" className="form-label">Sobrenome:</label>
                                <input type="text" className="form-control" id="Sobrenome"  value="dos Santos" required />
                                <div className="invalid-feedback">Apenas Letras</div>
                            </div>

                            <div className="form-group">
                                <label for="Nome-Social" className="form-label">Nome Social:</label>
                                <input type="text" className="form-control" id="Nome-Social"  value="Ved" required />
                                <div className="invalid-feedback">Apenas Letras</div>
                            </div>

                            <div className="form-group mt-3 d-grid gy-2">
                                <label for="CPF" className="form-label">CPF:</label>
                                <h3 id="CPF" className="form-label border">XXX.XXX.XXX-XX</h3>
                                <div className="invalid-feedback">Apenas Números</div>
                            </div>

                            <div className="form-group mt-3 ">
                                <label id="Data De Nascimento" className="form-label">Data De Nascimento:</label>
                                <h3 for="Data De Nascimento" className="form-label border ">16/03/1988</h3>
                                <div className="invalid-feedback">Apenas Números</div>
                            </div>

                            <div className="form-group mt-3 ">
                                <label id="E-mail" className="form-label">E-mail:</label>
                                <h3 for="E-mail" className="form-label border">ved@ved.com</h3>
                                <div className="invalid-feedback">Apenas Letras</div>
                            </div>

                            <div className="form-group">
                                <label for="Telefone Celular" className="form-label">Telefone :</label>
                                <input type="text" className="form-control" id="Telefone Celular"  value="(00) 99999-9999" required />
                                <div className="invalid-feedback">Apenas Números</div>
                            </div>

                            <div className="form-group">
                                <label for="Senha Atual" className="form-label">Senha Atual:</label>
                                <input type="password" className="form-control" id="Senha Atual"   value="**********" required />
                                <div className="invalid-feedback">Letras e Números</div>
                            </div>

                            <div className="form-group">
                                <label for="Nova Senha" className="form-label">Nova Senha:</label>
                                <input type="password" className="form-control" id="Nova Senha"   value="**********" required />
                                <div className="invalid-feedback">Letras e Números</div>
                            </div>

                            <div className="form-group">
                                <label for="Confirmação De Senha" className="form-label">Confirmação De Senha:</label>
                                <input type="password" className="form-control" id="Confirmação De Senha"  value="**********" required />
                                <div className="invalid-feedback">Letras e Números</div>
                            </div>

                            <div className="d-grid gap-2 col-6 mx-auto mt-3 mb-3">
                                <button type="submit" className=" btn btn-success btn-block">Salvar</button>

                            </div>


                        </form >

                    </div >

                </div>
            </div>

            <Footer />
        </>
    )
}
export default MyAccount

