import './Address.css'
import Header from '../../components/header/Header'
import Footer from '../../components/footer/Footer'
import CustomerMenu from '../../components/customerMenu/CustomerMenu'
import AddressInfo from '../../components/addressInfo/AddressInfo'



function Address() {

    return (
        <>
            <Header />
            <div className="container mt-3 mb-4  ">
                <div className="row ">
                    <div className="col-2 col-sm-3 ">
                        <CustomerMenu />
                    </div>


                    <div class="col-12 col-md-9 order-md-last  mb-3">
                        <AddressInfo />
                        {/*  ************************MODEL PARA CADASTRO DE CARTÃO ********************* */}

                        {/*  DIVISÃO DOS BUTTONS */}
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


                        {/*  ****************** CAMPO DO MODAL ****************** */}
                    </div>
                </div>
            </div>

            <Footer />

        </>
    )

}

export default Address;