const axios = require('axios')

export const api = axios.create({
    baseURL: 'https://flashcard-api-mayck.herokuapp.com'
})