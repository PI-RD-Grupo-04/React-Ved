import './PasswordChange.css'
import Header from '../../components/header/Header'
import Footer from '../../components/footer/Footer'

export default function PasswordChange() {
    return (
        <>

            <Header />


            <div className="container ">
                <div className="row mt-5 mb-5">
                    <div className="col-12 col-xl-6 col-lg-6 col-md-6 col-sm-6 col-xs-6 mx-auto border">
                        <div className="white">
                            <div className="row text-center">
                                <div className="text-center col-12">
                                    <h2 className="title-main">Alterar sua Senha</h2>
                                </div>

                                <div className="text-center col-12 mt-4">

                                    <form id="feedbackForm" className="text-center">

                                        <div className="col-12 form-title">
                                            <label for="form-senha form-title " className="form-label">Digite sua nova senha</label>
                                            <input type="password" className="form-control" id="form-senha"/>
                                              
                                              
                                            {/* <span className="msg-pass  msg-error error-pass" >Senha Fraca! A senha deve conter no mínimo 8 caracteres</span>
                                            <span className="msg-pass  msg-success valid-pass" >ok</span> */}


                                        </div>

                                        <div className="col-12 form-title mt-1">
                                            <label for="form-senha-confirma " className="form-label">Confirme sua nova senha</label>
                                            <input type="password" className="form-control" id="form-senha-confirma"/>
                                          
                                          
                                           {/* <span className="msg-password  msg-error error-pass2" >senha divergentes</span>
                                            <span className="msg-passoword  msg-success valid-pass2" >ok</span> */}

                                        </div>

                                        <div className="d-grid gap-2 col-3 mx-auto mb-5 mt-5">
                                            <a href="./login.html" className="btn btn-success btn-block" type="button">Salvar</a>
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
