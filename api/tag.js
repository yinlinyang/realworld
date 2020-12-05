import { request } from '@/plugins/request'

const api = {
  tags: '/api/tags'
}

export const getTags = () => {
  return request({
    method: 'get',
    url: api.tags
  })
}