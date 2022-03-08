import './Requests.css'
import Header from '../../components/header/Header'
import Footer from '../../components/footer/Footer'
import CustomerMenu from '../../components/customerMenu/CustomerMenu'



function Request() {

    return (
        <>
            <Header />

            <div className="container mt-3 mb-4  ">
                <div className="row ">
                    <div className="col-2 col-sm-3">
                        <CustomerMenu />
                    </div>
                    <div className="col-12 col-sm-9 order-md-last  mb-3">
                        <h3 className="text-center title-main"> Meus Pedidos </h3>
                        <div className="row border py-3 ">

                            <div className="col-12 size-text ">
                                {/* nome do titular do cartão */}
                                <input type="checkbox" id="Pedido-01" name="pedido-01" value="pedido-01" />
                                <label for="pedido-01 ">Pedido:</label>
                                <label for="pedido-01">#125354 :</label>
                                <label for="pedido-01" className="p-caminho">A caminho</label>
                            </div>
                        </div>

                        <div className="row border py-3 mt-3">
                            <div className="col-12 size-text">
                                {/* nome do titular do cartão */}
                                <input type="checkbox" id="Pedido-01" name="pedido-01" value="pedido-01" />
                                <label for="pedido-01 ">Pedido:</label>
                                <label for="pedido-01">#145544 :</label>
                                <label for="pedido-01" className="p-analise">Aguardando</label>
                            </div>
                        </div>

                        <div className="row border py-3 mt-3">
                            <div className="col-12 size-text">
                                {/* nome do titular do cartão */}
                                <input type="checkbox" id="Pedido-01" name="pedido-01" value="pedido-01" />
                                <label for="pedido-01 ">Pedido:</label>
                                <label for="pedido-01">#003245 :</label>
                                <label for="pedido-01" className="p-entregue">Entregue</label>
                            </div>
                        </div>

                        <div className="row border py-3 mt-3">
                            <div className="col-12 size-text">
                                {/* nome do titular do cartão */}
                                <input type="checkbox" id="Pedido-01" name="pedido-01" value="pedido-01" />
                                <label for="pedido-01 ">Pedido:</label>
                                <label for="pedido-01">#003245 :</label>
                                <label for="pedido-01" className="p-cancelado">Cancelado</label>
                            </div>
                        </div>
                    </div>
                </div>
            </div>






            <Footer />

        </>
    )


}

export default Request;