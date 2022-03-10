import './Favorites.css'
import Header from '../../components/header/Header'
import Footer from '../../components/footer/Footer'
import CustomerMenu from '../../components/customerMenu/CustomerMenu'
import ProductCard from '../../components/productCard/ProductCard'


function Favorites() {

    return (
        <>
            <Header />
            <div className="container mt-3 mb-4  ">
                <div className="row ">
                    <div className="col-2 col-sm-3 ">
                        <CustomerMenu />
                    </div>
                    <div class="col-12 col-md-9 order-md-last  mb-3">
                        <h3 class="text-center title-main"> Meus Favoritos </h3>
                        {/* inicio produtos */}
                        <div class="row">
                            {/* ********************* item unidade  *********************/}
                            <div class="col-12 col-sm-6 col-lg-4">
                            <ProductCard link ='https://i.ibb.co/nP8cZL2/abacaxi.png' nome ='Abacaxi' peso ={1.0}  price ={12.90}/>
                            </div>
                            <div class="col-12 col-sm-6 col-lg-4">
                            <ProductCard link ='https://i.ibb.co/nP8cZL2/abacaxi.png' nome ='Abacaxi' peso ={1.0}  price ={12.90}/>
                            </div>
                            <div class="col-12 col-sm-6 col-lg-4">
                            <ProductCard link ='https://i.ibb.co/nP8cZL2/abacaxi.png' nome ='Abacaxi' peso ={1.0}  price ={12.90}/>
                            </div>
                            <div class="col-12 col-sm-6 col-lg-4">
                            <ProductCard link ='https://i.ibb.co/nP8cZL2/abacaxi.png' nome ='Abacaxi' peso ={1.0}  price ={12.90}/>
                            </div>
                            <div class="col-12 col-sm-6 col-lg-4">
                            <ProductCard link ='https://i.ibb.co/nP8cZL2/abacaxi.png' nome ='Abacaxi' peso ={1.0}  price ={12.90}/>
                            </div>
                            <div class="col-12 col-sm-6 col-lg-4">
                            <ProductCard link ='https://i.ibb.co/nP8cZL2/abacaxi.png' nome ='Abacaxi' peso ={1.0}  price ={12.90}/>
                            </div>
                            <div class="col-12 col-sm-6 col-lg-4">
                            <ProductCard link ='https://i.ibb.co/nP8cZL2/abacaxi.png' nome ='Abacaxi' peso ={1.0}  price ={12.90}/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <Footer />

        </>
    )


}

export default Favorites;