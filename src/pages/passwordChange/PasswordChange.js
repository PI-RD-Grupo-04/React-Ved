import './PasswordChange.css'
import Header from '../../components/header/Header'
import Footer from '../../components/footer/Footer'
import { Link } from 'react-router-dom'
import Title from '../../components/title/Title'
import React, { useState } from 'react'
import iconCancel from '../../components/asserts/imagens/iconCancel.png'
import iconOk from '../../components/asserts/imagens/iconOk.png'

export default function PasswordChange() {


    const [senhaOk, setSenhaOk] = useState('d-none')
    const [senhaError, setSenhaError] = useState('d-none')

    const [senhaConfirmOk, setSenhaconfirmOk] = useState('d-none')
    const [senhaConfirmError, setSenhaConfirmError] = useState('d-none')



    const [senha, setSenha] = useState('')
    const [senhaConfirmar, setSenhaConfirmar] = useState('')

    return (
        <>
            <Header />
            <div className="container ">
                <div className="row mt-5 mb-5">
                    <div className="col-12 col-xl-6 col-lg-6 col-md-6 col-sm-6 col-xs-6 mx-auto border">
                        <div className="white">
                            <div className="row text-center">
                                <div className="text-center col-12">
                                    <Title label="Alterar sua Senha" />
                                </div>

                                <div className="text-center col-12 mt-4">

                                    <form id="feedbackForm" className="text-center">

                                        <div className="col-12 ">
                                            <label for="form-senha  " className="form-label">Digite sua nova senha</label>
                                            <input type="password" onChange={(e) => {
                                                if (e.target.value.length <= 8) {
                                                    setSenhaOk('msg-success displayFeedbackError ');
                                                    setSenhaError('msg-error d-flex')
                                                } else {
                                                    setSenhaOk('msg-success displayFeedbackOk ');
                                                    setSenhaError('msg-error displayFeedbackError ')
                                                }
                                                console.log(senha);
                                                setSenha(e.target.value)




                                            }}
                                                className="form-control" id="form-senha" />

                                            <span className={senhaError}>A senha deve conter no mínimo 8 caracteres</span>
                                            <div className={senhaOk + " "} >
                                                <img src={iconOk} width='24px' height='24px' />
                                            </div>

                                        </div>
                                        <div className="col-12  mt-1">
                                            <label for="form-senha-confirma " className="form-label">Confirme sua nova senha</label>
                                            <input type="password" onChange={(ev) => {
                                                setSenhaConfirmar(ev.target.value)
                                                console.log(senhaConfirmar);
                                                if (ev.target.value != senha) {
                                                    setSenhaconfirmOk('msg-success displayFeedbackError ');
                                                    setSenhaConfirmError('msg-error d-flex')


                                                } else {
                                                    setSenhaconfirmOk('msg-success displayFeedbackOk ');
                                                    setSenhaConfirmError('msg-error displayFeedbackError ')
                                                }
                                            }}
                                                className="form-control" id="form-senha-confirma" />

                                            <span className={senhaConfirmError} >Senha Divergente</span>
                                            <div className={senhaConfirmOk + " "} >
                                                <img src={iconOk} width='24px' height='24px' />
                                            </div>

                                        </div>

                                        <div className="d-grid gap-2 col-12 col-sm-6  mx-auto mb-5 mt-5">
                                            <Link to="/login" className="btn btn-success btn-block" type="submit">Salvar</Link>
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

