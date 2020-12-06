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

export const getArticle = (slug) => {
  return request({
    method: 'get',
    url: `${api.articles}/${slug}`,
  })
}

export const createArticles = (data) => {
  return request({
    method: 'post',
    url: api.articles,
    data
  })
}

export const modifyArticle = (slug, data) => {
  return request({
    method: 'put',
    url: `${api.articles}/${slug}`,
    data,
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