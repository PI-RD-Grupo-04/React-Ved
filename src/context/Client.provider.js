import React, { useState, createContext, useEffect } from 'react'
import { baseCliente, baseLogin } from '../environments'
import axios from 'axios'


const ClientContext = createContext({})

function ClientProvider(props) {

    const [client, setCliente] = useState(null)
    const [nome, setNome] = useState('')
    const [token, setToken] = useState('')

    useEffect(() => {
        getCliente(1)
        const logado = localStorage.getItem('client')
        logado ? setCliente(JSON.parse(logado)) : setCliente(null)
    }, [])


    const getCliente = (cliente) => {
        axios.get(`${baseCliente}/${cliente}`)
            .then((response) => {
                setCliente(response.data)
                localStorage.user = JSON.stringify(response.data)
            })
            .catch((error) => {
                console.error(error.messege)
            })
    }

    const LogarCliente = async (login) => {
        let success = false
        await axios.post(`${baseLogin}auth`, login)
            .then((response) => {
                setNome(response.data.nome)
                localStorage.setItem('nome', JSON.stringify(response.data.nome))
                setCliente(response.data.id)
                localStorage.setItem('client', JSON.stringify(response.data.id))
                setToken(response.data.token)
                localStorage.setItem('token', JSON.stringify(response.data.token))
                axios.defaults.headers.common["Authorization"] = `Bearer ${response.data.token}`
                success = true
            })
            .catch((error) => {
                console.error(error.messege)
            })

        return success
    }


    const sairClient = () => {
        //limpa tudo da memoria e revoga tudo da memoria
        console.log('sair')
        localStorage.removeItem('token')
        localStorage.removeItem('id')
        localStorage.removeItem('nome')
        delete axios.defaults.headers.common["Authorization"]
        setCliente(null)
    }


    function BuscaClient() {
        setCliente(JSON.parse(localStorage.getItem('client')))
    }

    return (
        <ClientContext.Provider
            value={{
                client, getCliente, LogarCliente, BuscaClient,
                Autorizado: !!client, sairClient, nome
            }}>
            {props.children}
        </ClientContext.Provider>
    )

}

export { ClientProvider }
export default ClientContext 
