import './ModalEndereco.css'
import Button from '../../components/button/Button'

function ModalEndereco() {

    return (

        <>

            {/*  <!-- BUTTON DO MODAL --> */}
         
                <button  type="button" className="btn btn-suport mb-2" data-bs-toggle="modal" data-bs-target="#exampleModal">
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
                            {/*  <!-- CORPO DO MODAL PARA CADASTRAR ENDEREÇOS --> */}
                            <div className="row border  pb-3 pt-3">
                                <div className="row ">
                                    {/* <!-- campo Rua --> */}
                                    <div className="col-12">
                                        <div className="form-group form-title" >
                                            <label for="Rua" className="form-label">Rua:</label>
                                            <input type="text" className="form-control" id="Rua" placeholder="" required />
                                            <div className="invalid-feedback">Apenas Letras</div>
                                        </div>
                                    </div>
                                    {/*  <!--**campo Número * --> */}
                                    <div className="col-12">
                                        <div className="form-group form-title" >
                                            <label for="N°" className="form-label">N°:</label>
                                            <input type="text" className="form-control" id="N°" placeholder="" required />
                                            <div className="invalid-feedback">Apenas Números</div>
                                        </div>
                                        {/*  <!--**Campo Complemento * --> */}
                                        <div className="col-12">
                                            <div className="form-group form-title" >
                                                <label for="Complemento" className="form-label">Complemento:</label>
                                                <input type="text" className="form-control" id="Complemento" placeholder="" required />
                                                <div className="invalid-feedback">Apenas Letras </div>
                                            </div>
                                        </div>
                                        <div className="form-group form-title" >
                                            <label for="CEP" className="form-label">CEP:</label>
                                            <input type="text" className="form-control" id="CEP" placeholder="" required />
                                            <div className="invalid-feedback">Apenas Números</div>
                                        </div>
                                        <div className="form-group form-title" >
                                            <label for="Bairro" className="form-label">Bairro:</label>
                                            <input type="text" className="form-control" id="Bairro" placeholder="" required />
                                            <div className="invalid-feedback">Apenas Letras</div>
                                        </div>
                                        <div className="form-group form-title" >
                                            <label for="Cidade" className="form-label">Cidade:</label>
                                            <input type="text" className="form-control" id="Cidade" placeholder="" required />
                                            <div className="invalid-feedback">Apenas Letras</div>
                                        </div>
                                        <div className="form-group form-title" >
                                            <label for="Estado" className="form-label">Estado:</label>
                                            <input type="text" className="form-control" id="Estado" placeholder="" required />
                                            <div className="invalid-feedback">Apenas Letras</div>
                                        </div>
                                        {/* <!-- FIM DO CORPO DO MODAL --> */}
                                        <div className="modal-footer justify-content-between">
                                            <button type="button" className="btn btn-delete" data-bs-dismiss="modal">Cancelar</button>
                                            <button type="button" className="btn btn-success">Salvar</button>
                                            {/* <Button label='Cancelar' delete />
                                            <Button label='Salvar' success /> */}
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/*  <!-- ******* FIM DO MODAL ******* --> */}
                        </div>
                    </div>
                </div>
            </div>



        </>


    )
}


export default ModalEndereco