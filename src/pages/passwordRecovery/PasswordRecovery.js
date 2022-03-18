import './PasswordRecovery.css'
import Header from '../../components/header/Header'
import Footer from '../../components/footer/Footer'
import { Link } from 'react-router-dom'
import Title from '../../components/title/Title'

export default function PasswordRecovery() {
    return (
        <>

            <Header />
            <div className="row mt-5 mb-5">
                <div className="col-12 col-xl-6 col-lg-6 col-md-6 col-sm-12 col-xs-6 mx-auto border">
                    <div className="white">
                        <div className="row text-center">
                            <div className="text-center col-12 mb-3">
                                <Title label="Recuperar Senha" />

                            </div>
                            <div className="text-center col-12">

                                <form id="feedbackForm" className="text-center">
                                    <div className="form-group" >
                                        <label for="name">Seu e-mail</label>
                                        <input type="text" className="form-control" id="name" name="name" placeholder="" aria-describedby="nameHelp" />

                                        <span id="nameHelp" className="form-text text-muted" />
                                    </div>

                                    <div className="d-grid gap-2 col-12 col-sm-6 mx-auto mt-3 mb-5">
                                        <Link to="/passwordChange" className="btn btn-success btn-block" type="button">Enviar</Link>
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






