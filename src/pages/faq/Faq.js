import './Faq.css'
import Header from '../../components/header/Header'
import Footer from '../../components/footer/Footer'
import Paragraph from '../../components/paragraph/Paragraph'
import Title from '../../components/title/Title'

function Faq() {
    return (
        <>
            <Header />
            <div className="container">
                <h1 className="faq ">FAQ</h1>

                <h2 className='faq2'>Entrega em caixa postal:</h2>
                <br />
               
                <Paragraph>
                    Não efetuamos entregas em caixa postal. Entrega sujeita à devolução.
                </Paragraph>
                <br /><br />
                <h2 className='faq2'>Fique Atento:</h2>
                <br />
                
                <Paragraph>
                O prazo de entrega passa a contar após a aprovação do pagamento. Assim que seu pagamento for aprovado, você será notificado por e-mail.
                </Paragraph>
                
                <Paragraph>
                Todos os pedidos estão sujeitos à análise, aprovação de dados cadastrais e confirmação de estoque.
                </Paragraph>
                <br /><br />
                <h2>Política da Empresa:</h2>
                <br />

                <Paragraph>
                Para saber o valor e prazo do frete, clique no produto, em seguida você será redirecionado para seu carrinho, onde poderá finalizar seu pedido, lá todos os prazos serão calculados automaticamente, e caso decida mudar algum item poderá fazer todas alterações que desejar tranquilamente e assim que estiver certo poderá finalizar seu pedido.
                </Paragraph>
                <br /><br />
                <h2 className='faq2'>Política de Preço:</h2>
                <br />

                <Paragraph>
                ATENÇÃO!! Os preços dentro de nossa loja virtual podem ser diferentes de loja física devido a diferenciação de custos operacionais.
                </Paragraph>
                <br /><br /><br />
               
                <Paragraph>
                Não efetuamos entregas em caixa postal. Sujeito à devolução.
                </Paragraph>
                <br /><br />

            </div>

            <Footer />
        </>
    )
}

export default Faq