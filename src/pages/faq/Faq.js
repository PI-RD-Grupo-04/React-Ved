import './Faq.css'
import Header from '../../components/header/Header'
import Footer from '../../components/footer/Footer'
import Title from '../../components/title/Title'

function Faq() {
    return (
        <>
            <Header />
            <div className="container">
                <Title label="FAQ"/>
                
                <h3 className='faq2'>Entrega em caixa postal:</h3>

                <div class="row">
                    <p>
                        Não efetuamos entregas em caixa postal. Entrega sujeita à devolução.
                    </p>
                </div>

                <h2 className='faq2'>Fique Atento:</h2>

                <div class="row">
                    <p>
                        O prazo de entrega passa a contar após a aprovação do pagamento. Assim que seu pagamento for aprovado, você será notificado por e-mail.
                    </p>
                </div>

                <div class="row">
                    <p>
                        Todos os pedidos estão sujeitos à análise, aprovação de dados cadastrais e confirmação de estoque.
                    </p>
                </div>

                <h2 className='faq2'>Políticas da Empresa:</h2>

                <div class="row">
                    <p>
                        Para saber o valor e prazo do frete, clique no produto, em seguida você será redirecionado para seu carrinho, onde poderá finalizar seu pedido, lá todos os prazos serão calculados automaticamente, e caso decida mudar algum item poderá fazer todas alterações que desejar tranquilamente e assim que estiver certo poderá finalizar seu pedido.
                    </p>
                </div>

                <h2 className='faq2'>Políticas de Preço:</h2>

                <div class="row">
                    <p>
                        ATENÇÃO!! Os preços dentro de nossa loja virtual podem ser diferentes de loja física devido a diferenciação de custos operacionais.
                    </p>
                </div>

            </div>

            <Footer />
        </>
    )
}

export default Faq