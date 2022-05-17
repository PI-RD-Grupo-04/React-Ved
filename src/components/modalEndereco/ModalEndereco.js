import './ModalEndereco.css'
import Button from '../../components/button/Button'
import InputMask from 'react-input-mask'
import InputGroup from '../inputGroup/InputGroup'
import React, { useState, useEffect } from 'react'  
import axios from 'axios' 

function ModalEndereco(props) { 
  //  const [endereco, setEndereco] = useState('')
    const [cep, setCep] = useState(0) 
    const [endereco, setEndereco] = useState()  
    console.log(cep)
    
    useEffect(() => {
    }, []) 

    
    function getCep (cep)  {
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
                                <InputMask mask="99999-999" onChange={(e) => {
                                    setCep(e.target.value) 
                                    }} onBlur={ () => {getCep(cep)}}
                                 className="form-control"  id="cep" placeholder='digite o cep do endereço' required  />

                                <InputGroup  required label="Cep: " mask="99999-999" info="seu cep"  col="col-12 col-sm-6" />
                                <InputGroup required label="Rua: " info="seu rua" id="rua" type="text" col="col-12 col-sm-6" />
                                <InputGroup required label="N°: " info="numero do local" id="numeracao " type="text" col="col-12 col-sm-6" />
                                <InputGroup required label="Complemento: " info="seu complemento" id="Complemento" type="" col="col-12 col-sm-6" />
                                <InputGroup required label="Bairro: " info="seu bairro" id="bairro" type="text" col="col-12 col-sm-6" />
                                <InputGroup required label="Cidade: " info="sua cidade" id="cidade" type="text" col="col-12 col-sm-6" />
                                <InputGroup required label="Estado: " info="estado" id="estado" type="text" col="col-12 col-sm-6" />
                                <div className="modal-footer justify-content-between mt-3">
                                    <button type="button" className="btn btn-delete" data-bs-dismiss="modal">Cancelar</button>
                                    <button type="button" className="btn btn-success">Salvar</button>
                                    {/* <Button label='Cancelar' delete />
                                            <Button label='Salvar' success /> */}
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