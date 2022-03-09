import './HowToBuy.css'
import Header from '../../components/header/Header'
import Footer from '../../components/footer/Footer'

function HowToBuy() {
    return (
        <>
            <Header />
            <div className="container">    
                <h1>Para Comprar em Nossa Loja Siga os Passos:</h1>
                <br/><br/><br/>

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
                        6) Demais instruções serão enviadas via e-mail para você após a finalização de sua venda.
                    </p>
                </div>
                <br/><br/><br/>    
            </div>
            <Footer />
        </>
    )
}

 export default HowToBuy