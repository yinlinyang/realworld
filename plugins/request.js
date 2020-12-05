import axios from 'axios'

const request = axios.create({
  baseURL: 'https://conduit.productionready.io',
})

export default function ({ store }) {
  request.interceptors.request.use(
    function (config) {
      // Do something before request is sent 
      const {user} = store.state
      if (user && user.token) config.headers.authorization = `Token ${user.token}`
      return config
    },
    function (error) {
      // Do something with request error
      return Promise.reject(error)
    }
  )
}

export { request }
