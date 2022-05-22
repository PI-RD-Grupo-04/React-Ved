import './Addressinfo.css'

function AddressInfo(props) {

    const checkCEP = (e) => {
        const cep = e.target.value.replace(/\D/g, '');
        fetch('URL: viacep.com.br/ws/01001000/json/')
        .then(res => res.json()).then(data => {
            console.log(data);
        });

    }

    return (
        <>
            <div className="col-12 mb-1">

                <label className="margin" for={props.id}>Avenida: {props.av}</label>
                <label className="margin" for={props.id}>N°: {props.n}</label>
                <label className="margin" for={props.id}>Complemento: {props.complement}</label>
                <label className="margin" for={props.id}>Bairro: {props.district}</label>
                <label className="margin" for={props.id}>CEP: {props.zipcode} OnBlur {checkCEP}</label>
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