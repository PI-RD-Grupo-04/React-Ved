import './AboutUs.css'
import Header from '../../components/header/Header'
import Footer from '../../components/footer/Footer'

function AboutUs() {
    return (
        <>
            <Header/>
          
            <div className="container">

                <h1>Sobre a VED</h1>
                <br/><br/><br/>

                <div className="row">
                    <p>
                        Buscamos oferecer muito mais que alimentos saudáveis! Pensando nisso, fomos ao campo para mostrar a origem dos
                        nossos ingredientes. Você sabe de onde vem a abobrinha que vai para o seu prato? Aqui embaixo você consegue
                        entender um pouco sobre nossa parceria com agricultores familiares e orgânicos e ver quem está por trás desses
                        itens fresquinhos que chegam a sua casa!
                    </p>
                </div>

                <div className="row">
                    <p>
                        Com essa iniciativa, oferecemos a você a oportunidade de conhecer a origem dos seus alimentos, ao mesmo tempo
                        que oferecemos aos nossos produtores melhores condições para se desenvolverem, fortalecendo a agricultura
                        familiar e orgânica no Brasil .
                    </p>
                </div>

                <div className="row">
                    <p>
                        Encontrar alimentos orgânicos, agroecológicos e de qualidade não é uma tarefa fácil. Por um preço acessível
                        então, fica ainda mais difícil! Mas decidimos encarar este desafio, encurtando a cadeia e beneficiando também o
                        produtor.
                    </p>
                </div>
                <br/><br/><br/>
            
                <h2>Entenda como essa parceria ajuda vários produtores:</h2>
                <br/><br/><br/>

                <div className="row">
                    <p>
                        1. Garantia antecipada de compra de seus produtos a preços justos. Os produtores podem plantar já sabendo a
                        renda que terão, já que seus produtos têm destino certo: o seu prato!
                    </p>
                </div>

                <div className="row">
                    <p>
                        2. Acompanhamento técnico desde o plantio até a colheita. Nosso time dedicado visita os agricultores
                        rotineiramente para acompanhar o cultivo.
                    </p>
                </div>

                <div className="row">
                    <p>
                        3. Compartilhamento de nossa demanda futura com cada um deles. Com isso, eles podem se planejar e cultivar de
                        acordo com nosso consumo. A VED Alimentos Orgânicos cresce, eles crescem junto!
                    </p>
                </div>

                <div className="row">
                    <p>
                        4. Auxílio financeiro para a compra de sementes e insumos. A VED Alimentos Orgânicos dá a opção de pagar
                        antecipadamente por parte dos insumos, descontando o valor em produtos após a colheita. Isso garante segurança
                        financeira ao agricultor.
                    </p>
                </div>
                <br/> <br/> <br/>
            </div> 

            <Footer/>
        </>
    )
}

 export default AboutUs