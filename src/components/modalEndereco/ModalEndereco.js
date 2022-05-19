import './ModalEndereco.css'
import Button from '../../components/button/Button'
import InputMask from 'react-input-mask'
import InputGroup from '../inputGroup/InputGroup'
import React, { useState, useEffect } from 'react'
import axios from 'axios'

function ModalEndereco(props) {

    const [cep, setCep] = useState(0)
    const [endereco, setEndereco] = useState() 
    const [address, setAddress] = useState(props.address)

    console.log(cep)

    useEffect(() => {
    }, [])


    function getCep(cep) {
        return axios.get(`https://viacep.com.br/ws/${cep}/json/ `)
            .then((response) => {
                setEndereco(response.data)
            })
            .catch((error) => {
                console.error(error.messege)
            })
    }
    console.log(endereco)


    return (

        <>
            {/*  <!-- BUTTON DO MODAL --> */}
            <button type="button" className="btn btn-suport mb-2" data-bs-toggle="modal" data-bs-target="#exampleModal">
                Cadastrar Novo Endereço
            </button>

            {/*  <!-- ****************** CAMPO DO MODAL ****************** --> */}
            <div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel"
                aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h4 className="text-center" id="exampleModalLabel">Novo Endereço
                            </h4>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <div className="row ">
                                <div className="col-12 col-sm-6">
                                     <label for='cep' className=" text-input">Cep:</label>
                                    <InputMask mask="99999-999" onChange={(e) => {
                                        setCep(e.target.value)
                                    }} onBlur={() => { getCep(cep) }}
                                        className="form-control mb-3" id="cep" placeholder='digite o cep do endereço' required  />
                                </div>

                                <div className="col-12 col-sm-6">
                                     <label for='rua' className=" text-input">Rua:</label>
                                    <InputMask required onChange={(event) => {}} className="form-control mb-3" placeholder="r" id="rua"   />
                                </div>

                                <div className="col-12 col-sm-6">

                                     <label for='numeracao' className=" text-input">N°:</label>
                                    <InputMask required onChange={(event) => {}} className="form-control mb-3" placeholder="Numero da Residencia"  id="numeracao "   />
                                </div>

                                <div className="col-12 col-sm-6">
                                     <label for='complemento' className=" text-input">Complemento:</label>
                                    <InputMask required onChange={(event) => {}} className="form-control mb-3" placeholder="c" info="seu complemento" id="Complemento" type=""  />
                                </div>

                                <div className="col-12 col-sm-6">
                                     <label for='cidade' className=" text-input">Cidade:</label>
                                    <InputMask required onChange={(event) => {}} className="form-control mb-3" placeholder="cc" info="sua cidade" id="cidade"   />
                                </div>

                                <div className="col-12 col-sm-6">
                                     <label for='municipio' className=" text-input">Município:</label>
                                    <InputMask required onChange={(event) => {}} className="form-control mb-3" placeholder="Informe seu Município"  id="estado"   />
                                </div>
                                <div className="col-12 col-sm-6">
                                     <label for='uf' className=" text-input">UF:</label>
                                    <InputMask required onChange={(event) => {}} className="form-control mb-3" placeholder="uf" id="estado"   />
                                </div>

                                <div className="modal-footer justify-content-between mt-3">
                                    <button type="button" className="btn btn-delete" data-bs-dismiss="modal">Cancelar</button>
                                    <button type="button" className="btn btn-success">Salvar</button>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>



        </>


    )
}


export default ModalEndereco