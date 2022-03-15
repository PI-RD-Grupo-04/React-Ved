import './OrderDetails.css'
import Header from '../../components/header/Header'
import Footer from '../../components/footer/Footer'
import ItemBasket from '../../components/itemBasket/ItemBasket'

function OrderDetails() {


    return (
        <>
            <Header />
            <div className="container col-12 d-flex">
                    <h1 className="title row">Compra Finalizada com Sucesso</h1>


                <div className="container col-6">
                    <ul>
                        <ItemBasket valor={10} qty={1} nome="larissa" />
                        <ItemBasket valor={13} qty={1} nome="Will" />
                        <ItemBasket valor={28} qty={1} nome="Jeff" />
                    </ul>
                </div>

                <div className="container col-6">
                    <div className="mb-3 text-center mt-3">
                    </div>
                    <ul>
                        <ItemBasket valor={10} qty={1} nome="larissa" />
                        <ItemBasket valor={13} qty={1} nome="Will" />
                        <ItemBasket valor={28} qty={1} nome="Jeff" />
                    </ul>
                </div>

            </div>
            <Footer />
        </>
    )
}

export default OrderDetails