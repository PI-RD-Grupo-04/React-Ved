import './Login.css'
import Header from '../../components/header/Header'
import Footer from '../../components/footer/Footer'
import { Link } from 'react-router-dom'
import Button from '../../components/button/Button'


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
                                            <input type="text" className="form-control" id="name" name="name" aria-describedby="nameHelp" />
                                            <span id="nameHelp" className="form-text text-muted" />

                                        </div>


                                        <div className="form-group form-title" >
                                            <label for="email">Sua senha</label>
                                            <input type="password" className="form-control" id="email" name="email" aria-describedby="emailHelp" />
                                            <span id="emailHelp" className="form-text text-muted" />

                                        </div>

                                        <p>Esqueceu sua senha? <Link to="/passwordRecovery">Clique aqui.</Link></p>
                                        <div className="d-grid gap-2 col-6 mx-auto mb-2">
                                            <Button success label="Acessar">Logar</Button>
                                        </div>

                                        <div className="form-group col-6  d-grid gap-2 mx-auto">
                                            <p>Ainda não tem conta? <Button success link="/register" label="Cadastre-se"></Button></p>
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












