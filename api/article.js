import { request } from '@/plugins/request'

const api = {
  articles: '/api/articles',
  feed: '/api/articles/feed',
}

export const getArticles = (data) => {
  return request({
    method: 'get',
    url: api.articles,
    params: data
  })
}

export const getFeed = (data) => {
  return request({
    method: 'get',
    url: api.feed,
    params: data
  })
}

export const favorite = (slug) => {
  return request({
    method: 'post',
    url: `${api.articles}/${slug}/favorite`,
  })
}

export const unfavorite = (slug) => {
  return request({
    method: 'delete',
    url: `${api.articles}/${slug}/favorite`,
  })
}