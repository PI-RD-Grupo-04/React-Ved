import './Footer.css'
import iconWhatsapp from '../asserts/imagens/Footer/iconWhatsapp.png'
import iconBc from '../asserts/imagens/Footer/iconBc.png'
import iconBoleto from '../asserts/imagens/Footer/iconBoleto.jpg'
import iconBradesco from '../asserts/imagens/Footer/iconBradesco.png'
import iconElo from '../asserts/imagens/Footer/iconElo.png'
import iconEmail from '../asserts/imagens/Footer/iconEmail.png'
import iconItau from '../asserts/imagens/Footer/iconItau.png'
import iconMastercard from '../asserts/imagens/Footer/iconMastercard.png'
import iconNu from '../asserts/imagens/Footer/iconNu.png'
import iconPix from '../asserts/imagens/Footer/iconPix.png'
import iconVisa from '../asserts/imagens/Footer/iconVisa.png'
import seloOrganic from '../asserts/imagens/Footer/seloOrganic.png'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <>
      <footer className="footertext fluid">
        <div className="container-fluid mt-4 mb-4">
          <div className="row justify-content-around">

            <div className="col-6 col-md-8 col-lg-7">
              <div className="row text-justif">
                <div className="col-sm-6 col-md-4 col-lg-4 col-12">
                  <ul className="list-unstyled ">
                    <li><strong>Institucional</strong></li>

                    <Link to="/faq">
                      <li className="btn-link">FAQs e Política da Empresa </li>
                    </Link>

                    <Link to="/howToBuy">
                      <li className="btn-link">Como Comprar</li>
                    </Link>

                    <Link to="/policySecurity">
                      <li className="btn-link">Segurança</li>
                    </Link>

                    <Link to="/">
                      <li className="btn-link">Políticas de Frete</li>
                    </Link>

                    <Link to="/contact">
                      <li className="btn-link">Contato</li>
                    </Link>

                  </ul>
                </div>
                <div className="col-sm-6 col-md-4 col-lg-4 col-12">
                  <ul className="list-unstyled">
                    <li><strong>Atendimento</strong></li>
                    <li className="btn-link"> <a href="https://web.whatsapp.com/"><img src={iconWhatsapp} width="20px" />
                      (11)98765-1243</a>
                    </li>
                    <li className="btn-link"> <a href="https://gmail.com/"><img src={iconEmail} width="20px" />
                      ved@sac.com.br</a>
                    </li>
                  </ul>
                </div>
                <div className="col-sm-6 col-md-4 col-lg-4 col-12">
                  <ul className="list-unstyled">
                    <li><strong>Minha Conta</strong></li>

                    <Link to="/myAccount">
                      <li className="btn-link"> Meus Dados</li>
                    </Link>

                    <Link to="/requests">
                      <li className="btn-link">Meus Pedidos</li>
                    </Link>

                    <Link to="/favorites">
                      <li className="btn-link"> Meus Favoritos</li>
                    </Link>

                    <Link to="/register">
                      <li className="btn-link">Criar uma conta</li>
                    </Link>


                  </ul>
                </div>
              </div>
            </div>
            <div className="col-3 text-center">
              <ul className="list-unstyled">
                <li><strong>Certificados e Pagamentos</strong></li>
                <li className="btn-link"> <img src={seloOrganic} width="60px" /> </li>
                <li><strong>Formas de Pagamentos</strong></li>
                <li><img src={iconPix} width="30px" /> <img src={iconVisa} width="30px" /> <img src={iconElo}
                  width="30px" />
                  <img src={iconMastercard} width="30px" /><img src={iconBoleto} width="30px" />
                </li>
                <li><strong>Bancos</strong></li>
                <li> <img src={iconItau} width="30px" /><img src={iconNu} width="30px" /><img
                  src={iconBc} width="30px" /><img src={iconBradesco} width="30px" /></li>
                <li className="btn-link"> <a href="#"></a> </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="row  text-center  col-12 rodape">
          <p>©️ 2022 VED - Alimentos Orgânicos. Todos os direitos reservados.</p>
        </div>
      </footer>
    </>

  );
}

export default Footer





