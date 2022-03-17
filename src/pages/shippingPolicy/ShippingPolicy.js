import './ShippingPolicy.css'
import Header from '../../components/header/Header'
import Footer from '../../components/footer/Footer'
import Title from '../../components/title/Title'


function ShippingPolicy() {
    return (
        <>
            <Header />
            <div className="container" >
                <Title label="Política de Frete"/>
                
                <h3>Envio dos produtos:</h3>

                <div className="row">
                    <p>
                        Todos os produtos serão enviados de acordo com a forma escolhida pelo cliente, em até 2 dias úteis da confirmação do pagamento. O prazo para a entrega varia de acordo com a forma de envio escolhida.
                    </p>

                </div>

                <h3>Fique atento:</h3>

                <div className="row">
                    <p>
                        O prazo de entrega começa a contar após a aprovação do pagamento. Assim que seu pagamento for aprovado você será notificado por e-mail.
                    </p>
                </div>

                <div className="row">
                    <p>
                        Todos os pedidos estão sujeitos à análise e aprovação de dados cadastrais, o que pode causar atrasos na confirmação do pagamento.
                    </p>
                </div>

                <div className="row">
                    <p>
                        O prazo de entrega informado inclui o prazo de processamento do pedido dentro do nosso armazém e o prazo para a realização da entrega pelo transportador. Pode haver atrasos.
                    </p>
                </div>

                <div className="row">
                    <p>
                        No caso do frete econômico faremos 2 tentativas de entrega, caso o destinatário não seja encontrado, será necessário realizar o pagamento de um novo frete para receber o pedido.
                    </p>
                </div>

                <div className="row">
                    <p>
                        E caso ocorra o cancelamento da compra será estornado com abatimento do valor de frete já utilizado.
                    </p>
                </div>

                <div className=" row frase">
                    <p>
                        A VED agradece sua preferência. Qualquer dúvida, crítica ou sugestão, entre em contato conosco que vamos atendê-lo o mais breve e da melhor forma possível.

                    </p>

                </div>
            </div>
            <Footer />
        </>
    )
}

export default ShippingPolicy