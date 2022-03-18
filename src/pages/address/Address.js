import './Address.css'
import Header from '../../components/header/Header'
import Footer from '../../components/footer/Footer'
import CustomerMenu from '../../components/customerMenu/CustomerMenu'
import AddressInfo from '../../components/addressInfo/AddressInfo'
import ModalEndereco from '../../components/modalEndereco/ModalEndereco'
import Button from '../../components/button/Button'
import Title from '../../components/title/Title'

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
                        <Title label="Meus endereços"/>
                        {/* <!-- area do primeira cartão --> */}
                        <div class="row  mb-3 pb-3 pt-3">
                            <div class="row ">
                            <AddressInfo av= "Santos" n= "230" complement= "Casa" district= "Vila São Paulo" zipcode= "11740-000" city= "Santos" states= "Sao Paulo" country= "Brasil" />
                            <AddressInfo av= "Condessa de Vimieiros" n= "345" complement= "Apto" district= "Centro" zipcode= "11740-000" city= "Itanhaém" states= "Sao Paulo" country= "Brasil" />
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