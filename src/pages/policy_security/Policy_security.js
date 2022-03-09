import './Policy_security.css'
import Header from '../../components/header/Header'
import Footer from '../../components/footer/Footer'

function Policy_security() {
    return (
        <>
            <Header />
            <div class="container">

                <h1>Políticas de Segurança</h1>
                <br/><br/>

                <div class="row">
                    <p>
                        Com relação aos seus dados pessoais de endereçamento, pagamento e conteúdo do pedido, você pode estar certo de
                        que não serão utilizados para outros fins que não o de processamento dos pedidos realizados, não sendo portanto
                        divulgados em hipótese alguma.
                    </p>
                </div>

                <div class="row">
                    <p>
                        Com relação à segurança no tráfego de dados, toda transação que envolver pagamento, seja por cartão de crédito
                        ou não, estará encriptada com a tecnologia SSL (Secure Socket Layer). Isso significa que só nossa empresa terá
                        acesso a estes dados.
                    </p>
                </div>
                <br/><br/>
            </div>

            <Footer />
        </>
    )
}

 export default Policy_security