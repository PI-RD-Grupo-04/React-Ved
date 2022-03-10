import './Address.css'
import Header from '../../components/header/Header'
import Footer from '../../components/footer/Footer'
import CustomerMenu from '../../components/customerMenu/CustomerMenu'
import AddressInfo from '../../components/addressInfo/AddressInfo'
import ModalEndereco from '../../components/modalEndereco/ModalEndereco'
import Button from '../../components/button/Button'

function Address() {

    return (
        <>
            <Header />
            <div className="container mt-3 mb-4  ">
                <div className="row ">
                 
                    <div class="col-2 col-sm-3  ">
                        <CustomerMenu />
                    </div>

                    {/* <!--************* COMEÇO DIREITA da pagina começo  *********************-->  */}
                    <div class="col-12 col-sm-9 order-md-last  mb-3">
                        <h1 class=" cardh1 justify-content-between align-items-center title-main text-center mb-3">Meus endereços</h1>
                        {/* <!-- area do primeira cartão --> */}
                        <div class="row border mb-3 pb-3 pt-3">
                            <div class="row ">
                            <AddressInfo />
                            </div>
                        </div>

                        <div className='mt-5 row '>
                            <div className="col-12 d-grid gap-2 col-sm-8    ">
                                <ModalEndereco />
                            </div>

                            <div className="col-12 d-grid gap-2  col-sm-4   ">
                                <Button label='Excluir' delete />
                            </div>

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