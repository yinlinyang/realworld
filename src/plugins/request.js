import axios from 'axios'

const request = axios.create({
  baseURL: 'http://realworld.api.fed.lagounews.com',
})

export {
  request
}

export default request