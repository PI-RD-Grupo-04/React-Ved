import React, { useEffect, useState } from 'react'
import Button from '../../components/button/Button'
import InputMask from 'react-input-mask'
import CardModal from '../../models/Card'
import { baseCartao } from '../../environments'
import axios from 'axios'
import {Form} from 'react-bootstrap'




function ModelPayCard(props) {
    //import './ModelPayCard.css'

    const [cartao, setCartao] = useState()
    const [cartaomodel, setCartaomodel] = useState(CardModal)
    let cliente = 1


    const postCartao = (cartaomodel) => {
        axios.post(`${baseCartao}/${cliente}/novo`, cartaomodel)
            .then((response) => {
                setCartao(response.data)
            })
            .catch((error) => {
                console.error(error.messege)
            })
    }



    return (
        <>

            <button type="button" class="btn btn-suport" data-bs-toggle="modal" data-bs-target="#exampleModal">
                Cadastrar Cartão
            </button>
            {/* ***************  */}
            <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog">
                <Form> 
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
                                            <InputMask mask="9999 9999 9999 9999" class="form-control" id="cc-number" 
                                                onChange={(event) => { setCartaomodel({ ...cartaomodel, numeroCartao: event.target.value }) }} />
                                            <div class="invalid-feedback">Nº Cartão Obrigatorio</div>
                                        </div>
                                        {/* <!--******NOME do cartão ***** --> */}
                                        <div class="col-12">
                                            <label for="cc-name" class="form-label">Nome do Titular</label>
                                            <input type="text" class="form-control" id="cc-name" 
                                                onChange={(event) => { setCartaomodel({ ...cartaomodel, nomeTitular: event.target.value }) }} />
                                            <small class="text-muted">Nome conforme exibido no
                                                cartão</small>
                                            <div class="invalid-feedback">Nome Obrigatorio</div>
                                        </div>
                                        {/* <!--******CPF do cartão ***** --> */}
                                        <div class="col-12">
                                            <label for="cpf-titular" class="form-label">CPF do Titular do
                                                Cartão</label>
                                            <InputMask mask="999.999.999-99 " class="form-control" id="cpf-titular" 
                                                onChange={(event) => { setCartaomodel({ ...cartaomodel, cpfTitular: event.target.value }) }} />
                                            <div class="invalid-feedback">Numero do Cartão Obrigatorio</div>
                                        </div>
                                        <div class="col-6 col-sm-6">
                                            {/* <!-- vencimento do cartão --> */}
                                            <label for="cc-expiration" class="form-label">Vencimento mês</label>
                                            <InputMask mask="99" class="form-control" id="cc-expiration" 
                                                onChange={(event) => { setCartaomodel({ ...cartaomodel, diaVencimento: event.target.value }) }} />
                                            <div class="invalid-feedback">Data de Expiração Obrigatoria</div>
                                        </div>
                                        <div class="col-6 col-sm-6">
                                            {/* <!-- vencimento do cartão --> */}
                                            <label for="cc-expiration" class="form-label">Vencimento Ano</label>
                                            <InputMask mask="99" class="form-control" id="cc-expiration" 
                                                onChange={(event) => { setCartaomodel({ ...cartaomodel, anoVencimento: event.target.value }) }} />
                                            <div class="invalid-feedback">Data de Expiração Obrigatoria</div>
                                        </div>
                                        <div class="col-6 col-sm-6">
                                            {/* <!-- bandeira--> */}
                                            <label for="cc-expiration" class="form-label">Bandeira</label>
                                            <InputMask class="form-control" id="cc-expiration" 
                                                onChange={(event) => { setCartaomodel({ ...cartaomodel, idBandeira: event.target.value }) }} />
                                            <div class="invalid-feedback">bandeira Obrigatoria</div>
                                        </div>

                                    </div>
                                </div>
                            </div>
                            {/* <!-- FIM DO CORPO DO MODAL --> */}
                        </div>
                        <div class="modal-footer justify-content-between">
                            <button type="button" className="btn btn-delete" data-bs-dismiss="modal">Cancelar</button>
                            <button variant="success" className="my-5 btn-success" onClick={( ) => postCartao(cartaomodel)}>Success</button>
                        </div>
                    </div>
                </Form>
                </div>
            </div>
        </>
    )

}
export default ModelPayCard