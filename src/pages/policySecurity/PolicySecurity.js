import './PolicySecurity.css'
import Header from '../../components/header/Header'
import Footer from '../../components/footer/Footer'
import Paragraph from '../../components/paragraph/Paragraph'

function PolicySecurity() {
    return (
        <>
            <Header />
            <div class="container">

                <h1>Políticas de Segurança</h1>
                <br/><br/>

        
                <Paragraph>
                Com relação aos seus dados pessoais de endereçamento, pagamento e conteúdo do pedido, você pode estar certo de
                        que não serão utilizados para outros fins que não o de processamento dos pedidos realizados, não sendo portanto
                        divulgados em hipótese alguma.
                </Paragraph>
               
                <Paragraph>
                Com relação à segurança no tráfego de dados, toda transação que envolver pagamento, seja por cartão de crédito
                        ou não, estará encriptada com a tecnologia SSL (Secure Socket Layer). Isso significa que só nossa empresa terá
                        acesso a estes dados.
                    </Paragraph>
                <br/><br/>
            </div>

            <Footer />
        </>
    )
}

 export default PolicySecurity