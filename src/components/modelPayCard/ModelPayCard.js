import React, { useState } from 'react'
import Button from '../../components/button/Button'
import InputMask from 'react-input-mask';

//import './ModelPayCard.css'

function ModelPayCard(props) {

    const [nome, setNome] = useState('')

    const modeloFuncao = () => {
        setNome('SeuNome')
    }

    return (
        <>

            <button type="button" class="btn btn-suport" data-bs-toggle="modal" data-bs-target="#exampleModal">
                Cadastrar Cartão
            </button>
            {/* ***************  */}
            <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog">
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
                                                <InputMask mask="9999 9999 9999 9999" class="form-control" id="cc-number" placeholder="" required />
                                            <div class="invalid-feedback">Nº Cartão Obrigatorio</div>
                                        </div>
                                        {/* <!--******NOME do cartão ***** --> */}
                                        <div class="col-12">
                                            <label for="cc-name" class="form-label">Nome do Titular</label>
                                            <input type="text" class="form-control" id="cc-name" placeholder="" required />
                                            <small class="text-muted">Nome conforme exibido no
                                                cartão</small>
                                            <div class="invalid-feedback">Nome Obrigatorio</div>
                                        </div>
                                        {/* <!--******CPF do cartão ***** --> */}
                                        <div class="col-12">
                                            <label for="cpf-titular" class="form-label">CPF do Titular do
                                                Cartão</label>
                                                <InputMask mask="999.999.999-99 " class="form-control" id="cpf-titular" placeholder="" required />
                                            <div class="invalid-feedback">Numero do Cartão Obrigatorio</div>
                                        </div>
                                        <div class="col-6 col-md-6">
                                            {/* <!--******BANDEIRA do cartão ***** --> */}
                                            <p for="bandeira-card" class="form-label">Bandeira</p>
                                            {/* <img src= width="80px"/> */}
                                            <div class="invalid-feedback">Cartão Invalido</div>
                                        </div>
                                        {/* <!--******VENCIMENTO do cartão ***** --> */}
                                        <div class="col-6 col-sm-6">
                                            {/* <!-- vencimento do cartão --> */}
                                            <label for="cc-expiration" class="form-label">Vencimento</label>
                                            <InputMask mask="99/99"  class="form-control" id="cc-expiration" placeholder="" required />
                                            <div class="invalid-feedback">Data de Expiração Obrigatoria</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* <!-- FIM DO CORPO DO MODAL --> */}
                        </div>
                        <div class="modal-footer justify-content-between">
                            <button type="button" className="btn btn-delete" data-bs-dismiss="modal">Cancelar</button>
                            <button type="button" className="btn btn-success">Salvar</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ModelPayCard