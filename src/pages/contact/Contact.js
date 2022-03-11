import './Contact.css'
import Header from '../../components/header/Header'
import Footer from '../../components/footer/Footer'



export default function Contact() {
    return (
        <>

            <Header />


            <div className="container">

                <h1 className="title-h1 mt-5">ENTRE EM CONTATO CONOSCO</h1>
                <br />

                <div className="row">
                    <p>
                        Abaixo listamos as formas de contato disponíveis em nosso e-commerce.
                        Estamos aguardando seu contato! Será um prazer atendê-lo.
                    </p>
                </div>



                <div className="row">
                    <h2>Central de Atendimento ao Cliente</h2>
                    <p>
                        (11) 94356-5923
                    </p>
                    <br />
                </div>

                <div className="row">
                    <h2>Horário de Atendimento</h2>
                    <p>
                        De segunda a sexta das 9:00 às 18:00h e sábado das 09:00 às 16:00h
                    </p>
                    <br />
                </div>

                <div className="row">
                    <h2>E-mail</h2>
                    <p>
                        Entre em contato através do e-mail contato@ved.com.br
                    </p>
                    <br />
                </div>

                <div className="row">
                    <h2>Formulario de contato</h2>
                    <p>
                        Campos marcados com * são de preenchimento obrigatório
                    </p>
                    <br />
                </div>

                <div className="container pb-5">
                    <form id="feedbackForm" className="text-center ">

                        <div className="clname">
                            <label for="name">Nome:</label>
                            <input type="text" className="form-control" id="name" name="name" placeholder="" aria-describedby="nameHelp" />
                            <span id="nameHelp" className="form-text text-muted" />
                        </div>

                        <div className="clemail">
                            <label for="email">E-mail:</label>
                            <input type="email" className="form-control" id="email" name="email" placeholder="" aria-describedby="emailHelp" />
                            <span id="emailHelp" className="form-text text-muted" />
                        </div>

                        <div className="clmensagem">
                            <label for="mensagem">Mensagem:</label>
                            <textarea type="text" className="form-control" id="mensagem" name="mensagem" placeholder="" aria-describedby="mensagemHelp" />
                            <span id="mensagemHelp" className="form-text text-muted" />
                        </div>

                    </form>

                </div>
            </div>
            <Footer />
        </>
    )
}