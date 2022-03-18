import './HowToBuy.css'
import Header from '../../components/header/Header'
import Footer from '../../components/footer/Footer'
import { Accordion } from 'react-bootstrap'

import Title from '../../components/title/Title'

function HowToBuy() {
    return (
        <>
            <Header />
            <div className="container">
                <Title label = "Como comprar?"/>
               
                <div className="row">
                    <p>
                        1) Basta navegar entre as diversas páginas de produtos (categorias, novidades, ofertas, destaques) e clicar sobre o ícone Comprar. Ou clique em Ver Detalhes para mais informações sobre o produto. Após isso o produto será inserido em seu carrinho de compras.
                    </p>
                </div>

                <div className="row">
                    <p>
                        2) Continue navegando em nosso site até escolher todos os produtos que você deseja adquirir. Agora basta clicar no link a direita Finalizar que você concluirá sua compra.
                    </p>
                </div>

                <div className="row">
                    <p>
                        3) Agora entre com o seu e-mail e senha. Caso não for cadastrado, cadastre-se rapidamente clicando no link de Cadastro.
                    </p>
                </div>

                <div className="row">
                    <p>
                        4) Feito isso, escolha a forma de envio do produto. Trabalhamos com envio via Correio e também no caso escolha nosso plano feirinha, temos entrega pelos nossos parceiros conforme plano escolhido.
                    </p>
                </div>

                <div className="row">
                    <p>
                        5) Agora basta escolher a forma de pagamento.
                    </p>
                </div>

                <div className="row">
                    <p>
                        6) Demais instruções serão enviadas via e-mail para você após a finalização da compra.
                    </p>
                </div>
                <br /><br /><br />
            </div>

                <div className = "telamenor1">

                <h1 className = "mb-5">Para Comprar em Nossa Loja Siga os Passos:</h1>

            <Accordion>
                    <Accordion.Item eventKey="0">
                        <Accordion.Header>1º Passo</Accordion.Header>
                        <Accordion.Body>
                        Basta navegar entre as diversas páginas de produtos (categorias, novidades, ofertas, destaques) e clicar sobre o ícone Comprar. Ou clique em Ver Detalhes para mais informações sobre o produto. Após isso o produto será inserido em seu carrinho de compras.
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="1">
                        <Accordion.Header>2º Passo</Accordion.Header>
                        <Accordion.Body>
                        Continue navegando em nosso site até escolher todos os produtos que você deseja adquirir. Agora basta clicar no link a direita Finalizar que você concluirá sua compra.

                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="2">
                        <Accordion.Header>3º Passo</Accordion.Header>
                        <Accordion.Body>
                        Agora entre com o seu e-mail e senha. Caso não for cadastrado, cadastre-se rapidamente clicando no link de Cadastro.
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="3">
                        <Accordion.Header>4º Passo</Accordion.Header>
                        <Accordion.Body>
                        Feito isso, escolha a forma de envio do produto. Trabalhamos com envio via Correio e também no caso escolha nosso plano feirinha, temos entrega pelos nossos parceiros conforme plano escolhido.
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="4">
                        <Accordion.Header>5º Passo</Accordion.Header>
                        <Accordion.Body>
                        Agora basta escolher a forma de pagamento.
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="5">
                        <Accordion.Header>6º Passo</Accordion.Header>
                        <Accordion.Body>
                        Demais instruções serão enviadas via e-mail para você após a finalização da compra.
                        </Accordion.Body>
                    </Accordion.Item>
                </Accordion>
                </div>

            <Footer />
        </>
    )
}
export default HowToBuy