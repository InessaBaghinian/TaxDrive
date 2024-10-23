import axios from 'axios'
import Cookies from 'js-cookie'

const axiosClient = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  withCredentials: true,
})

axiosClient.interceptors.request.use((config) => {
  const token = Cookies.get('driveTaxToken')
  if (token) {
    config.headers.Authorization = `Bearer ${token}`
  }
  return config
})

axiosClient.interceptors.response.use(
  (response) => response,

  (error) => {
    // the range of 2xx cause this function to trigger
    // Do something with response error
    if (error.response && error.response.status === 401) {
      // Handle 401 error here

      Cookies.remove('driveTaxToken')
      window.location.href = '/login'
    }
    return Promise.reject(error)
  }
)

export default axiosClient