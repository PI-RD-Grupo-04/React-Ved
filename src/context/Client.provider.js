import React, { useState, createContext, useEffect } from 'react'
import { baseCliente, baseLogin } from '../environments' 
import axios from 'axios'
import { useHistory } from 'react-router-dom'

const ClientContext = createContext({})

function ClientProvider(props) {

    const [client, setCliente] = useState(null)
    const [nome, setNome] = useState('')
    const [token, setToken] = useState('')

    const history = useHistory();

    useEffect(() => {
        getCliente(1)
        const logado = localStorage.getItem('client')  
        logado ? setCliente(JSON.parse(logado)) : setCliente(null) 
        create.defaults.headers.Authorization = `Bearer ${token}`
    },[ ])

    const create = axios.create({
        baseURL: 'http://localhost:8080'
      });

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

    const LogarCliente =  async (login) => {
       await create.post(`${baseLogin}auth`, login)
            .then((response) => { 
                setNome(response.data.nome)
                localStorage.setItem('nome', JSON.stringify(response.data.nome))
                setCliente(response.data.id)
                localStorage.setItem('client', JSON.stringify(response.data.id))
                setToken(response.data.token)
                localStorage.setItem('token', JSON.stringify(response.data.token))
            })
            .catch((error) => {
                console.error(error.messege)
            })
    }

   function LoginFlux (dadosClient) { 
    //fazer o metodod de post para o back e aguarda p retorno do token 
    // ja setando na memoria os dados do post.
    LogarCliente(dadosClient)
    //manda as rotas utilizando a liberacao pelo token 
    create.defaults.headers.Authorization = `Bearer ${token}`
    //redireciona depois de logado para a tela home
    history.push('/')
   } 

   const sairClient =  () => {
       //limpa tudo da memoria e revoga tudo da memoria
       console.log('sair') 
       localStorage.removeItem('token')
       localStorage.removeItem('id')
       localStorage.removeItem('nome')
       create.defaults.headers.Authorization = null 
       setCliente(null)
       history.push('/Login')
   }


    function BuscaClient() {
        setCliente(JSON.parse(localStorage.getItem('client')))
    }

    return (
        <ClientContext.Provider
            value={{ client, getCliente, LoginFlux,BuscaClient,
            Autorizado : !!client, sairClient, nome  }}>
            {props.children}
        </ClientContext.Provider>
    )

}

export { ClientProvider }
export default ClientContext 
