import axios from 'axios'

export default axios.create({
    // esse é o endereço da aplicação
    // é so passa /users para então entrar na rota
    // sim, o axios tem esse poder!!
    baseURL: 'http://localhost:3333'  
})