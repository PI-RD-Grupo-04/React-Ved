import './ShippingPolicy.css'
import Header from '../../components/header/Header'
import Footer from '../../components/footer/Footer'


function ShippingPolicy() {
    return (
        <>
            <Header />
            <div className="container" >
                <h1>Política de Frete</h1>

                <h2>Envio dos produtos:</h2>

                <div className="row">
                    <p>
                        Todos os produtos serão enviados de acordo com a forma escolhida pelo cliente, em até 2 dias úteis da confirmação do pagamento. O prazo para a entrega varia de acordo com a forma de envio escolhida.
                    </p>

                </div>

                <h2>Fique atento:</h2>

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
                        A VED espera que tenham uma excelente experiência de compra. Para qualquer dúvida não exite em nos contar por e-mail ou WhatsApp.
                    </p>

                </div>
            </div>
            <Footer />
        </>
    )
}

export default ShippingPolicy