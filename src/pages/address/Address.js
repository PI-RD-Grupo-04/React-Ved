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
                    <div className="col-2 col-sm-3 ">
                        <CustomerMenu />
                    </div>


                    <div class="col-12 col-md-9 order-md-last  mb-3">
                        <AddressInfo />
                        <AddressInfo />
                        <AddressInfo />
                        <AddressInfo />
                        <AddressInfo />



                        <div className=' d-flex mt-5  '>
                            {/*  BUTTON DO EXCLUIR CARTÃO */}
                            <div className=" col-12  col-sm-9  d-flex justify-content-start">
                                <ModalEndereco />
                            </div>
                            <div className="col-12  col-sm-3  d-flex justify-content-start">
                                <Button label='Excluir' delete />
                            </div>


                            {/*  DIVISÃO DOS BUTTONS */}
                            {/*  BUTTON DO MODAL */}

                       
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