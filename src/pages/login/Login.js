import './Login.css'
import Header from '../../components/header/Header'
import Footer from '../../components/footer/Footer'
import { Link } from 'react-router-dom'
import Button from '../../components/button/Button'
import Title from '../../components/title/Title'
import InputGroup from '../../components/inputGroup/InputGroup' 

function Login() {
    return (
        <>

            <Header />

            <div className="container ">
                <div className="row mt-5 mb-5">
                    <div className="col-12 col-md-6 forms mx-auto border">
                       
                            <div className="row ">
                                <div className="text-center col-12">
                                    <Title label = "Login"/>
                                </div>


                                    <form id="feedbackForm" className="">

                                    <InputGroup required label="Email: " info="seu email" id="email-login" type="email" col="col-12 " /> 
                                    <InputGroup required label="Senha: " info="sua senha" id="password-login" type="password" col="col-12 " /> 

                                        <div className="col-12 text-center mt-2"> 
                                        <p>Esqueceu sua senha? <Link to="/passwordRecovery">Clique aqui.</Link></p>
                                        <div className="d-grid gap-2 col-6 mx-auto mb-2">
                                            <Button success label="Acessar" link="/myAccount">Logar</Button>
                                        </div>

                                        <div className="form-group col-12  d-grid gap-2 mx-auto">
                                            <p>Ainda não tem conta? <Button success link="/register" label="Cadastre-se"></Button></p>
                                        </div>

                                        </div>

                                    </form>


                            </div>


                       
                    </div>
                </div>
            </div>


            <Footer />

        </>

    )
}

export default Login;












