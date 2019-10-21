import axios from 'axios'

export default axios.create({
  baseURL: 'https://www.totrno.com/api/',
  timeout: 5000,
  headers: {
    'Content-Type': 'application/json',
  }
})
