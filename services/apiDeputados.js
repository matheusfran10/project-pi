import axios from "axios"

const apiDeputados = axios.create({
    baseURL: 'https://dadosabertos.camara.leg.br/api/v2',
    headers: {
        Authorization:'Bearer'
    }
})

export default apiDeputados