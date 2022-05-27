import React, { useState, createContext, useEffect } from 'react'
import { baseCliente, baseLogin } from '../environments'
import axios from 'axios'


const ClientContext = createContext({})

function ClientProvider(props) {

    const [client, setCliente] = useState(null)
    const [nome, setNome] = useState('')
    const [token, setToken] = useState('')
    const [clienteDados, setClienteDados] = useState({})
    const [logiin, setLogiin] = useState({})

    useEffect(() => {
        let logado = localStorage.getItem('cliente')
        logado ? setCliente(JSON.parse(logado)) : setCliente(null)
    }, [])


    const getCliente = (cliente) => {
        axios.get(`${baseCliente}/${cliente}`)
            .then((response) => {
                setClienteDados(response.data)
                localStorage.cliente = JSON.stringify(response.data)
            })
            .catch((error) => {
                console.error(error.messege)
            })
    }

    const LogarCliente = async (login) => {
        let success = false
        setLogiin(login)
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
                getCliente(response.data.id)
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

    function Atualizar() {
        setClienteDados(JSON.parse(localStorage.getItem('cliente')))


    }

    return (
        <ClientContext.Provider
            value={{
                client, getCliente, LogarCliente,Atualizar ,
                Autorizado: !!client, sairClient, nome, clienteDados
            }}>
            {props.children}
        </ClientContext.Provider>
    )

}

export { ClientProvider }
export default ClientContext 
