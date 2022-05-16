import axios from 'axios'
import { URL } from '../config/api.config'

async function login(data) {
  return await axios
    .post(`${URL}/auth/login`, data)
    .then((response) => {
      return response.data
    })
    .catch((error) => console.log(error))
    // Used as example
    .finally()
}

const AuthService = {
  login,
}

export default AuthService
