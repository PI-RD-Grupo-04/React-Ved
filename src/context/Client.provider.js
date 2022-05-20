import React, { useState, createContext } from 'react'

const ClientContext = createContext({})

function ClientProvider(props) {


    const [cliente, setCliente] = useState({})

    useEffect(() => {
        getCliente()
    }, [])

    const getCliente = (cep) => {
        axios.get(`base`)
            .then((response) => {
                setCliente(response.data)
            })
            .catch((error) => {
                console.error(error.messege)
            })
    }

}

export { ClientProvider }
export default ClientContext 
