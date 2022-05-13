import { Link } from 'react-router-dom'
import Header from '../../components/header/Header'
import Footer from '../../components/footer/Footer'
import Button from '../../components/button/Button'
import './Register.css'
import Title from '../../components/title/Title'
import InputGroup from '../../components/inputGroup/InputGroup'


function Register(props) {


    return (
        <>
            <Header />
            <div class="container ">
                <div class="row mt-5 mb-5">
                    <div class="forms col-12 col-md-8 mx-auto border">
                        <div class="row">
                            <div class="col-12">

                                <Title label="Nova Conta" />

                            </div>
                            {/* <!--  campo de recuperar senha--> */}
                            <div class="col-12 text-center">
                                <span>Já Possui uma Conta?<Link className='link' to="/Login"> Clique Aqui.</Link></span>
                            </div>
                            {/* <!--  começo do campo de inputs --> */}

                            <form id="feedbackForm" >
                                {/* <!--  inicio do formulario de cadastro --> */}
                                {/* <!--  campo nome --> */}
                                <div className="row">
                                    <InputGroup required info="Primeiro Nome" label="Nome: " type="text" id="Nome" col="col-12 col-sm-6" />
                                    <InputGroup required label="Sobrenome: " info="Sobrenome"  type="text" id="sobrenome" col="col-12 col-sm-6" />
                                    
                                    <InputGroup  label="Nome Social: " info="Não Obrigatório" id="Nome-Social" col="col-12 col-sm-6" />
                                    <InputGroup required label="CPF: " info="Apenas Números " mask="999.999.999-99" type="number" id="cpf" col="col-12 col-sm-6" />
                                    <InputGroup required  label="Data de Nasc.: " data id="nascimento"  col="col-12 col-sm-3" />
                                    <InputGroup required label="Email: " info="seu email" id="email" type="email" col="col-12 col-sm-5" />
                                    <InputGroup required mask="(99) 99999-9999" info="fixo ou celular " label="Telefone: " id="telefone" type="number" col="col-12 col-sm-4" />
                                    <InputGroup  info="Digite a Senha"   info1="Confirme a Senha"    password     col="col-12" />
                                    <div class="d-grid justify-content-center align-items-center gap-2   align-cen  ter mt-3 mb-3">

                                        <Button link="/Login" success label="Cadastrar" confirm></Button >

                                    </div> 
                                   
                                </div>


                            </form>

                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default Register