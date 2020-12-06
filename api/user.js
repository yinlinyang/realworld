import { request } from '@/plugins/request'

const api = {
  login: '/api/users/login',
  users: '/api/users',
  user: '/api/user',
  profile: 'api/profiles',
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

export const getProfile = (username) => {
  return request({
    method: 'get',
    url: `${api.profile}/${username}`,
  })
}


export const follow = (username) => {
  return request({
    method: 'post',
    url: `${api.profile}/${username}/follow`,
  })
}

export const unFollow = (username) => {
  return request({
    method: 'delete',
    url: `${api.profile}/${username}/follow`,
  })
}