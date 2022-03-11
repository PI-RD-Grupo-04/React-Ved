import './Login.css'
import Header from '../../components/header/Header'
import Footer from '../../components/footer/Footer'


function Login() {
    return (
        <>

            <Header />

            <div className="container ">
                <div className="row mt-5 mb-5">
                    <div className="col-12 col-md-5 mx-auto border">
                        <div className="white">
                            <div className="row text-center">
                                <div className="text-center col-12">
                                    <h2 className="title-main">Login</h2>
                                </div>

                                <div className="text-center col-12">


                                    <form id="feedbackForm" className="text-center">

                                        <div className="form-group form-title" >
                                            <label for="name">Seu e-mail</label>
                                            <input type="text" className="form-control" id="name" name="name" placeholder="" aria-describedby="nameHelp" />
                                            <span id="nameHelp" className="form-text text-muted"/>

                                        </div>


                                        <div className="form-group form-title" >
                                            <label for="email">Sua senha</label>
                                            <input type="password" className="form-control" id="email" name="email" placeholder="" aria-describedby="emailHelp"/>
                                            <span id="emailHelp" className="form-text text-muted"/>

                                        </div>
                                        
                                        <p>Esqueceu sua senha? <a href="./RecuperarSenha.html">Clique aqui.</a></p>
                                            <div className="d-grid gap-2 col-6 mx-auto mb-5">
                                            <a href="./minhaConta.html" className="btn btn-success btn-block" type="button">Logar</a>

                                        </div>

                                        <div className="form-group">
                                            <p>Ainda não tem conta? <a href="./cadastrar.html" className="btn  btn-outline-success btn-suport" >Cadastre-se</a></p>
                                        </div>  
                                                                               


                                    </form>

                                </div>
                            </div>


                        </div>
                    </div>
                </div>
            </div>


            <Footer />

        </>

    )
}

export default Login;












