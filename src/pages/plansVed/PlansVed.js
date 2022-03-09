import './PlansVed.css'
import Header from '../../components/header/Header'
import Footer from '../../components/footer/Footer'
import Button from '../../components/button/Button'

function PlansVed() {
    return (
        <>
            <Header />
            <div className="container mb-5 text-center justify-content-between">
                <h1>Nossos Planos</h1>
                <div className="row mt-5 justify-content-between align-items-center">
                    <div className="item margens  col-lg-3 mb-3 ">
                        <h2 className="topo">PLANO</h2>
                        <h2>MENSAL</h2>
                        <hr/>
                        <h2>R$ 200,00</h2>
                        <p>Parcele em até 4x sem juros</p>
                        <hr/>
                        <Button card/>
                    </div>

                    <div className="item  margens  col-lg-3 mb-3">
                        <h2 className="topo">PLANO</h2>
                        <h2 >SEMESTRAL</h2>
                        <hr/>
                        <h2>R$ 350,00</h2>
                        <p>Parcele em até 4x sem juros</p>
                        <hr/>
                        <button className="w-100 ml-0 btn-success btn-lg btnPlano mb-3" type="submit">Assine</button>
                    </div>

                    <div className="item  margens  col-lg-3 mb-3">
                        <h2 className="topo">PLANO</h2>
                        <h2>ANUAL</h2>
                        <hr/>
                        <h2>R$ 550,00</h2>
                        <p>Parcele em até 4x sem juros</p>
                        <hr/>
                        <button className="w-100 ml-0 btn-success btn-lg btnPlano mb-3" type="submit">Assine</button>
                    </div>

                    <div className="container">
                        <hr/>
                        <h2 className="termos mt-5 text-center termos-h2">Termos:</h2>
                        <div className="row text-center mb-5 texto-p">
                            <p>
                                Programe suas compras e tenha mais tempo para cuidar de você. Nossas asssinaturas combinam saúde e
                                praticidade.
                                Com elas, é possível assinar qualquer item do nosso mercado ou nossas cestas prontas, montadas por nossa
                                equipe
                                com os alimentos da estação, na frequência que desejar - semanal, quinzenal ou mensal.
                                E você pode cancelar ou alterar a assinatura quando quiser!
                            </p>
                        </div>
                    </div>

                </div>

            </div>

            <Footer />
        </>
    )
}

 export default PlansVed