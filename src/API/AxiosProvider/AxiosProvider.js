import axios from "axios";
import { toast } from "react-toastify";
const AxiosInstance = axios.create({
  baseURL: 'http://localhost:4000/api/v1',
  // baseURL: 'http://192.168.0.61:4000/api/v1/',
  timeout: 2350000,
  // headers: {'X-Custom-Header': 'foobar'}
})

AxiosInstance.interceptors.response.use(response => {
  return response
}, error => {
  if (error.response.status === 401) {
    localStorage.removeItem('mytoken')
    setTimeout(NavigateTimeout, 1500)


    toast.error("Your session is expried please login again.")
  }

  return Promise.reject()

}
)

const NavigateTimeout = () => {
  window.location.replace('/')

}

export default AxiosInstance