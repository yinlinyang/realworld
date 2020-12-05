import { request } from '@/plugins/request'

const api = {
  login: '/api/users/login',
  users: '/api/users',
  user: '/api/user',
}

export const login = (data) => {
  return request({
    method: 'post',
    url: api.login,
    data,
  })
}

export const register = (data) => {
  return request({
    method: 'post',
    url: api.users,
    data,
  })
}

export const getUser = () => {
  return request({
    method: 'get',
    url: api.user,
  })
}

export const updateUser = (data) => {
  return request({
    method: 'put',
    url: api.user,
    data
  })
}
