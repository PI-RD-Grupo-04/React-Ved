import React, { useState } from 'react'
import InputMask from 'react-input-mask'
import iconOk from '../asserts/imagens/iconOk.png'

import './InputGroup.css'

function InputGroup(props) {

    const [senhaOk, setSenhaOk] = useState('d-none')
    const [senhaError, setSenhaError] = useState('d-none')

    const [senhaConfirmOk, setSenhaconfirmOk] = useState('d-none')
    const [senhaConfirmError, setSenhaConfirmError] = useState('d-none')

    const [senha, setSenha] = useState('')
    const [senhaConfirmar, setSenhaConfirmar] = useState('')

    let columns = " text-left mt-1 " + props.col;

    function inputa() {
        if (props.data) {
            return (<input type='date' id={props.id} name='dtnasc' />);
        }

        if (props.mask) {
            return (
                (props.block != null)
                    ? <InputMask mask={props.mask} value={props.value}  class="form-control" id={props.id} placeholder={props.info} required disabled />
                    : <InputMask    mask={props.mask} value={props.value} class="form-control" id={props.id} placeholder={props.info} required />
            )
        } else {
            return (props.block != null
                ? <input   value={props.value} type={props.type} disabled className="form-control" id={props.id} placeholder={props.info} required />
                : <input   value={props.value} type={props.type} className="form-control" id={props.id} placeholder={props.info} />)
        }

    }

    function password() {
        return (
            <>
                <div className="row aa ">
                    <div className="col-12 col-sm-6">
                        <label for="form-senha  " className="text-input">Digite sua Senha</label>
                        <input placeholder={props.info} type="password" onChange={(e) => {
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


                        <span className={senhaError}>Senha  no mínimo 8 caracteres</span>

                        <div className={senhaOk + " "} >
                            <img src={iconOk} width='24px' height='24px' />
                        </div>


                    </div>

                    <div className="col-12 col-sm-6">
                        <label for="form-senha-confirma " className="text-input">Confirme sua senha</label>
                        <input placeholder={props.info1} type="password" onChange={(ev) => {
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
                </div>
            </>)

    }


    return (
        <>
            <div className={columns}>
                <label for={props.id} className=" text-input">{props.label}</label>
                {props.password != null
                    ? password()
                    : inputa()}

            </div>
        </>
    )
}

export default InputGroup
