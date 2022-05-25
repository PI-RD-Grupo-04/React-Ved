import './Addressinfo.css'
import ClientContext from '../../context/Client.provider'

function AddressInfo(props) {

    

    return (
        <>
            <div className="col-12 mb-1 border-address">
                <label className="margin" for={props.id}>Avenida: {props.av}</label>
                <label className="margin" for={props.id}>N°: {props.n}</label>
                <label className="margin" for={props.id}>Complemento: {props.complement}</label>
                <label className="margin" for={props.id}>Bairro: {props.district}</label>
                <label className="margin" for={props.id}>CEP: {props.zipcode} </label>
                <label className="margin" for={props.id}>Cidade: {props.city}</label>
                <label className="margin" for={props.id}>Estado: {props.states}</label> 
                <label className="margin" for={props.id}>Estado: {props.uf}</label>
                <div className="col-12 col-sm-4   ">
                    <button onClick={() =>  props.delete(props.id)} className="btn-delete"> Excluir</button>
                </div>
            </div>
        </>
    )
}

export default AddressInfo