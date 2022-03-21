import { Link } from 'react-router-dom' 
import React, { useState } from 'react'
import { Modal} from 'react-bootstrap' 
import ok from '../asserts/imagens/ok.png'
import error from '../asserts/imagens/error.png'
import './Button.css'


function Button(props) {
  const [show, setShow] = useState(false);
  let btn = ' ml-0 btn-lg mb-3 text-center '
  btn += props.card ? 'btn-add-card ' : ''
  btn += props.suporte ? 'btn-suport ' : ''
  btn += props.delete ? 'btn-delete ' : ''
  btn += props.success ? 'btn-success ' : ''
  btn += props.plans ? 'btn-Plano ' : ''
  btn += props.cart ? ' btnCardDel ' : '' 
  btn += props.img ? 'button-search ' : '' 
  btn += props.none ? "none " : ''

  let link = props.link ? props.link : null


  let img, label, color = '';
  img = props.confirm ? ok : error
  color = props.confirm ? 'ok' : 'error'
  label = props.confirm ? "Sucesso!" : "Error! tente novamente!"


  //btn-outline-success





  return (
    <>
      {link != null 
        ? <Link to={link} onClick={props.modal ? () => setShow(true) : null}  className={btn} type="submit">{props.label}</Link>
        : <button onClick={props.modal ? () => setShow(true) : null} className={btn} type="submit">{props.label}</button>}
           
            {props.modal ? <div>
              <Modal
                show={show}
                onHide={() => setShow(false)}
                dialogClassName="modal-10w"
                aria-labelledby="example-custom-modal-styling-title"

            >
                <Modal.Header className={color} closeButton>
                    <Modal.Title className="d-flex text-center align-items-center justify-content-center" id="example-custom-modal-styling-title">
                        <div><img src={img} width="30px" height="30px" /> </div>
                        <div className='mt-3 margin-text' ><h5 >{label}</h5></div>
                    </Modal.Title>
                </Modal.Header>

            </Modal></div> : null}
    </>
  )



}

export default Button