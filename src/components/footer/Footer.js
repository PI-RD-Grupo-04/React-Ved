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
                    <li className="btn-link"> <a href="./Faq-politicas.html">FAQs e Política da Empresa </a>
                    </li>
                    <li className="btn-link"> <a href="./comoComprar.html">Como Comprar</a> </li>
                    <li className="btn-link"> <a href="./seguranca.html">Segurança</a> </li>
                    <li className="btn-link"> <a href="./politicaFrete.html">Políticas de Frete</a> </li>
                    <li className="btn-link"> <a href="./contato.html">Contato</a> </li>
                  </ul>
                </div>
                <div className="col-sm-6 col-md-4 col-lg-4 col-12">
                  <ul className="list-unstyled">
                    <li><strong>Atendimento</strong></li>
                    <li className="btn-link"> <a href="#"><img src={iconWhatsapp} width="20px" /> (11)
                      98765-1243</a>
                    </li>
                    <li className="btn-link"> <a href="#"><img src={iconEmail} width="20px" />
                      Ved@sac.com.br</a>
                    </li>
                  </ul>
                </div>
                <div className="col-sm-6 col-md-4 col-lg-4 col-12">
                  <ul className="list-unstyled">
                    <li><strong>Minha Conta</strong></li>
                    <li className="btn-link"> <a href="#">Meus Dados</a> </li>
                    <li className="btn-link"> <a href="#">Meus Pedidos</a> </li>
                    <li className="btn-link"> <a href="#">Meus Favoritos</a> </li>
                    <li className="btn-link"> <a href="#">Criar uma conta</a> </li>
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





