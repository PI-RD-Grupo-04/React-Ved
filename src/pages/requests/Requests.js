import './Requests.css'
import Header from '../../components/header/Header'
import Footer from '../../components/footer/Footer'
import CustomerMenu from '../../components/customerMenu/CustomerMenu'
import OrderStatus from '../../components/orderStatus/OrderStatus'
import Title from '../../components/title/Title'



function Request() {

    return (
        <>
            <Header />
            <div className="container mt-3 mb-4  ">
                <div className="row ">
                    <div className="col-2 col-sm-3">
                        <CustomerMenu />
                    </div>
                    <div className="col-12 col-sm-9 order-md-last  mb-3 ">
                        <Title label="Meus Pedidos" />
                        <div className="row border py-3 ">

                            <OrderStatus waiting pedido={127543} />
                            <OrderStatus delivered pedido={123549} />
                            <OrderStatus delivering pedido={123549} />
                            <OrderStatus canceled pedido={123549} />

                        </div>
                    </div>
                </div>



            </div>


            <Footer />

        </>
    )


}

export default Request;