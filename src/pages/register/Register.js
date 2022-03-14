import { Link } from 'react-router-dom'
import Header from '../../components/header/Header'
import Footer from '../../components/footer/Footer'
import Button from '../../components/button/Button'
import './Register.css'

function Register(props) {


    return (
        <>
            <Header />
            <div class="container text-center">
                <div class="row mt-5 mb-5">
                    <div class="col-12 col-md-7 mx-auto border">
                        <div class="row">
                            <div class="col-12">
                                {/* <!--  titulo da pagina de cadastro --> */}
                                <h2 class="title-main">Nova Conta</h2>
                            </div>
                            {/* <!--  campo de recuperar senha--> */}
                            <div class="col-12">
                                <span>Já Possui uma Conta?<Link className='link' to="/Login"> Clique Aqui.</Link></span>
                            </div>
                            {/* <!--  começo do campo de inputs --> */}
                            <div class="col-12">

                                <form id="feedbackForm" class="text-center">
                                    {/* <!--  inicio do formulario de cadastro --> */}
                                    {/* <!--  campo nome --> */}
                                    <div class="form-group form-title" >
                                        <label for="Nome" class="form-label">Nome:</label>
                                        <input type="text" class="form-control" id="nome" placeholder="" required />
                                        <div class="invalid-feedback">Apenas Letras</div>
                                    </div>
                                    {/* <!--  campo nome social --> */}
                                    <div class="form-group form-title" >
                                        <label for="Nome-social" class="form-label">Nome Social:</label>
                                        <input type="text" class="form-control" id="nome-social" placeholder="" required />
                                        <div class="invalid-feedback">Apenas Letras</div>
                                    </div>
                                    {/* <!--  campo nome --> */}
                                    <div class="form-group form-title" >
                                        <label for="cpf" class="form-label">CPF:</label>
                                        <input type="text" class="form-control" id="cpf" placeholder="" required />
                                        <div class="invalid-feedback">CPF Inválido!</div>
                                    </div>
                                    {/* <!--  campo nome --> */}
                                    <div class="form-group form-title" >
                                        <label for="form-email" class="form-label">Email:</label>
                                        <input type="email" class="form-control" id="form-email" required />
                                        {/* <span class="msg-email  msg-error invalid-email " >campo inválido</span>
                                        <span class="msg-email ok msg-success valid-email" >ok</span> */}
                                    </div>
                                    {/* <!--  campo nome social --> */}
                                    <div class="form-group form-title" >
                                        <label for="data-nasc" class="form-label">Data de Nascimento:</label>
                                        <input type="text" class="form-control" id="data-nasc" placeholder="" required />
                                        <div class="invalid-feedback">Apenas Letras</div>
                                    </div>
                                    {/* <!--  campo nome --> */}
                                    <div class="form-group form-title" >
                                        <label for="tel-cel" class="form-label">Telefone Celular:</label>
                                        <input type="tel" class="form-control" id="tel-cel" placeholder="" required />
                                        <div class="invalid-feedback">Apenas Letras</div>
                                    </div>
                                    {/* <!--  campo nome social --> */}
                                    <div class="form-group form-title" >
                                        <label for="nova-senha" class="form-label">Nova Senha:</label>
                                        <input type="password" class="form-control" id="nova-senha" placeholder="" required />
                                        <div class="invalid-feedback">Apenas Letras</div>
                                    </div>
                                    {/* <!--  campo nome --> */}
                                    <div class="form-group form-title" >
                                        <label for="confirma-senha" class="form-label">Confirmação Senha:</label>
                                        <input type="password" class="form-control" id="confirma-senha" placeholder="" required />
                                        <div class="invalid-feedback">Apenas Letras</div>
                                    </div>

                                    <div class="d-grid gap-2 mx-auto mt-3 mb-3">
                                        <Button link="/Login" success label="Cadastrar"></Button >

                                    </div>

                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default Register