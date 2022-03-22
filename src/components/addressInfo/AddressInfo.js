import './Addressinfo.css'
import CheckInput from '../checkInput/CheckInput'

function AddressInfo(props) {

    return (
        <>
            <div className="col-12 border mb-3">
            <CheckInput id={props.id}>
                <label className="margin" for={props.id}>Avenida: {props.av}</label>
                <label className="margin" for={props.id}>N°: {props.n}</label>
                <label className="margin" for={props.id}>complemento: {props.complement}</label>
                <label className="margin" for={props.id}>Bairro: {props.district}</label>
                <label className="margin" for={props.id}>CEP: {props.zipcode}</label>
                <label className="margin" for={props.id}>Cidade: {props.city}</label>
                <label className="margin" for={props.id}>Estado: {props.states}</label>
                <label className="margin" for={props.id}>País: {props.country}</label>
                </CheckInput>
            </div>
        </>
    )
}

export default AddressInfo