import './PaymentCards.css'
import Header from '../../components/header/Header'
import Footer from '../../components/footer/Footer'
import CustomerMenu from '../../components/customerMenu/CustomerMenu'
import CardInfo from '../../components/cardInfo/CardInfo'
import ModelPayCard from '../../components/modelPayCard/ModelPayCard'
import Button from '../../components/button/Button'
import Title from '../../components/title/Title'


function PaymentCards() {
    return (
        <>
            <Header />
            <div class="container mt-3 mb-4  ">

                <div class="row ">
                    {/* <!--************* Parte esquerda da pagina começo *********************--> */}
                    <div class="col-2 col-sm-3  ">
                        <CustomerMenu />
                    </div>
                    {/* <!--************* COMEÇO DIREITA da pagina começo  *********************-->  */}
                    <div class="col-12 col-sm-9 order-md-last  mb-3">
                        <Title label="Meus Cartões" />
                        {/* <!-- area do primeira cartão --> */}
                        <div class="row border mb-3 pb-3 pt-3">
                            <div class="row ">
                                <CardInfo nome="Visa" numero="*************23" mes="10" ano="24" />
                                <CardInfo nome="MasterCard" numero="*************14" mes="10" ano="24" />
                            </div>
                        </div>

                        {/* <!-- ************************MODEL PARA CADASTRO DE CARTÃO ********************* --> */}
                        {/* <!-- DIVISÃO DOS BUTTONS --> */}
                        <div className='mt-5 row '>
                            <div className="col-12 d-grid gap-2 col-sm-8   mb-2 ">
                                <ModelPayCard />
                            </div>

                            <div className="col-12 d-grid gap-2  col-sm-4  ">
                                <Button label='Excluir' delete />
                            </div>

                        </div>

                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default PaymentCards