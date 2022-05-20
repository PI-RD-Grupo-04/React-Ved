import React, { useState, createContext } from 'react' 


const ClientContext = createContext({})

function ClientProvider(props) {

    const [client, setCliente] = useState({nome: 'Jefferson', id: 1}) 

    const logado = (cliente) => {
        setCliente(cliente) 
        localStorage.nome = "jeff"
    }

    
    return (
        <ClientContext.Provider
            value={{client, logado}}>
            {props.children}
        </ClientContext.Provider>
    )

}

export { ClientProvider }
export default ClientContext 
