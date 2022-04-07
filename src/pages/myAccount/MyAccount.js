import './MyAccount.css'
import Header from '../../components/header/Header'
import Footer from '../../components/footer/Footer'
import CustomerMenu from '../../components/customerMenu/CustomerMenu'
import Title from '../../components/title/Title' 
import InputGroup from '../../components/inputGroup/InputGroup' 
import Button from '../../components/button/Button'

function MyAccount() {
   
   
   
   
    return (
        <>
            <Header />
            <div className="container mt-3 mb-4  ">
                <div className="row ">
                    <div className="col-2 col-sm-3 ">
                        <CustomerMenu />
                    </div>

                    <div className="col-12 col-sm-9 order-md-last  align-items-center justify-content-center  mb-3">
                       <Title label="Meus Dados"/>
                       <form id="feedbackForm" >
                                {/* <!--  inicio do formulario de cadastro --> */}
                                {/* <!--  campo nome --> */}
                                <div className="row border">
                                    <InputGroup value="Roberval" required info="Primeiro Nome" label="Nome: " type="text" id="Nome" col="col-12 col-sm-6" />
                                    <InputGroup value="dos Santos" required label="Sobrenome: " info="Sobrenome"  type="text" id="sobrenome" col="col-12 col-sm-6" />
                                    <InputGroup info="---" label="Nome Social: " id="Nome-Social" col="col-12 col-sm-6" />
                                    <InputGroup block value="11111111111"  required label="CPF: " info="Apenas Números " mask="999.999.999-99" type="number" id="cpf" col="col-12 col-sm-6" />
                                    <InputGroup block value="121219999" required mask="99/99/9999" info="dia/mês/ano" label="Data de Nasc.: " id="nascimento" type="text" col="col-12 col-sm-3" />
                                    <InputGroup block value="ved@ved.com" required label="Email: " info="seu email" id="email" type="email" col="col-12 col-sm-5" />
                                    <InputGroup value="11999999999"  required mask="(99) 99999-9999" info="fixo ou celular " label="Telefone: " id="telefone" type="number" col="col-12 col-sm-4" />
                                    <InputGroup  info="Digite a Senha"   info1="Confirme a Senha" password col="col-12" />
                                    <div class="d-grid justify-content-center align-items-center gap-2   align-cen  ter mt-3 mb-3">

                                    <Button  success label="Atualizar Dados" confirm></Button >

                                    </div> 
                                   
                                </div>


                            </form>
                    </div >

                </div>
            </div>

            <Footer />
        </>
    )
}
export default MyAccount

