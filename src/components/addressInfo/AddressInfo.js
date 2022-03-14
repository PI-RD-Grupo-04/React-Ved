import React, { useState } from 'react'
import './Addressinfo.css'

function AddressInfo(props) {

    return (
        <>
                <div className="col-12 border"> 
                    <input type="checkbox" id={props.id} name={props.id} value={props.id}/> 
                        <label className="margin"  for={props.id}>Avenida: {props.av}</label>
                        <label className="margin"  for={props.id}>N°: {props.n}</label>
                        <label className="margin"  for={props.id}>complemento: {props.complement}</label>
                        <label className="margin"  for={props.id}>Bairro: {props.district}</label>
                        <label className="margin"  for={props.id}>CEP: {props.zipcode}</label>
                        <label className="margin"  for={props.id}>Cidade: {props.city}</label>
                        <label className="margin"  for={props.id}>Estado: {props.states}</label>
                        <label className="margin"  for={props.id}>País: {props.country}</label>
                </div>
        </>
    )
}

export default AddressInfo