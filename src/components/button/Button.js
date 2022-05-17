import { Link } from 'react-router-dom'
import React, { useState } from 'react'
import { Modal } from 'react-bootstrap'
import ok from '../asserts/imagens/ok.png'
import error from '../asserts/imagens/error.png'
import { useHistory } from "react-router-dom";
import './Button.css'


function Button(props) {

  let btn = ' ml-0 btn-lg mb-3 text-center '
  btn += props.card ? 'btn-add-card ' : ''
  btn += props.suporte ? 'btn-suport ' : ''
  btn += props.delete ? 'btn-delete ' : ''
  btn += props.success ? 'btn-success ' : ''
  btn += props.plans ? 'w-100 btn-Plano ' : ''
  btn += props.cart ? 'btnCardDel ' : ''
  btn += props.img ? 'button-search ' : ''
  btn += props.none ? "none " : ''
  btn += props.plans2 ? 'btn-Plano ' : '' 
  

 

  let link = props.link ? props.link : null


  let img, label, color = '';

  label = props.confirm ? "Sucesso!" : "Error! tente novamente!"


  //btn-outline-success



    return (
      <>

        {link != null 
        ? <Link to={link}  className={btn} type="submit">{props.label}</Link>
        : <button className={btn} >{props.label}</button>
        }
           

      </>
    )



  }

  export default Button