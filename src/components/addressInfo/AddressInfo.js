import React, { useState } from 'react'
//import './AddressInfo.css'

function AddressInfo(props) {

    return (
        <>
                <div className="col-12 border">
                    <input type="checkbox" id={props.id} name={props.id} value={props.id}/>
                        <label for={props.id}>Avenida: {props.av}</label>
                        <label for={props.id}>N°: {props.n}</label>
                        <label for={props.id}>complemento: {props.complement}</label>
                        <label for={props.id}>Bairro: {props.district}</label>
                        <label for={props.id}>CEP: {props.zipcode}</label>
                        <label for={props.id}>Cidade: {props.city}</label>
                        <label for={props.id}>Estado: {props.states}</label>
                        <label for={props.id}>País: {props.country}</label>
                </div>
        </>
    )
}

export default AddressInfo