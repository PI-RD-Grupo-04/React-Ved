import './Faq.css'
import Header from '../../components/header/Header'
import Footer from '../../components/footer/Footer'

function Faq() {
    return (
        <>
            <Header />
            <div className="container">
                <h1>FAQ</h1>
                <br/><br/><br/>
                <h2>Entrega em caixa postal:</h2>
                <br/>
                <div class="row">
                    <p>
                        Não efetuamos entregas em caixa postal. Entrega sujeita à devolução.
                    </p>
                </div>
                <br/><br/>
                <h2>Fique Atento:</h2>
                <br/>
                <div class="row">
                    <p>
                        O prazo de entrega passa a contar após a aprovação do pagamento. Assim que seu pagamento for aprovado será notificado por e-mail.
                    </p>
                </div>

                <div class="row">
                    <p>
                        Todos os pedidos estão sujeitos à análise e aprovação de dados cadastrais, e confirmação de estoque.
                    </p>
                </div>
                <br/><br/>
                <h2>Políticas da Empresa:</h2>
                <br/>

                <div class="row">
                    <p>
                        Para saber o valor e prazo do frete, clique no produto, em seguida você será redirecionado para seu carrinho, onde poderá finalizar seu pedido, lá todos os prazos serão calculados automaticamente, e caso decida mudar algum item poderá fazer todas alterações que desejar tranquilamente e assim que estiver certo poderá finalizar seu pedido.
                    </p>
                </div>
                <br/><br/>
                <h2>Políticas de Preço:</h2>
                <br/>

                <div class="row">
                    <p>
                        ATENÇÃO!! Os preços dentro de nossa loja virtual podem ser diferentes de loja física devido a diferenciação de custos operacionais.
                    </p>
                </div>
                <br/><br/><br/>
            </div>

            <Footer />
        </>
    )
}

 export default Faq