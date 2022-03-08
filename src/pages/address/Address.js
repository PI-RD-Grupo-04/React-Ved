import './Address.css'
import Header from '../../components/header/Header'
import Footer from '../../components/footer/Footer'
import CustomerMenu from '../../components/customerMenu/CustomerMenu'
import AddressInfo from '../../components/addressInfo/AddressInfo'



function Address() {

    return (
        <>
            <Header />
            <CustomerMenu />
            {/* ************* COMEÇO DIREITA da pagina começo  **********************/}
            <div className="col-12 col-md-9 order-md-last  mb-3">
                {/*  inicio pag lado direito Meus Endereços */}
                <h3 className="text-center title-main">Meus Endereços</h3>

                <div className="row mb-3 pb-3 pt-3 ">
                    <AddressInfo />
                    {/*  ************************MODEL PARA CADASTRO DE CARTÃO ********************* */}

                    {/*  DIVISÃO DOS BUTTONS */}
                    <div className="row">
                        {/*  BUTTON DO MODAL */}
                        <div className="col-6">
                            <button type="button" className="btn btn-suport" data-bs-toggle="modal" data-bs-target="#exampleModal">
                                Cadastrar Endereço
                            </button>
                        </div>
                        {/*  BUTTON DO EXCLUIR CARTÃO */}
                        <div className="col-6">
                            <button className=" btn btn-delete " type="submit">Excluir Cartão</button>
                        </div>

                    </div>

                    {/*  ****************** CAMPO DO MODAL ****************** */}






                </div>
            </div>



            <Footer />

        </>
    )


}

export default Address;