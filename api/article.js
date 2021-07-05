import { request } from '@/plugins/request'

export const getTags = () => {
  return request({
    method: 'GET',
    url: '/tags',
  })
}
/**
  @param {String} method //'GET' 'POST'
  // GET
  @param {String} tag
  @param {String} author
  @param {String} favorited
  @param {Number} limit
  @param {Number} offset
  // POST
  data: {
    "article": {
      "title": "How to train your dragon",
      "description": "Ever wonder how?",
      "body": "You have to believe",
      "tagList": ["reactjs", "angularjs", "dragons"]
    }
  }
*/
export const articlesHandler = (method = 'GET', data) => {
  const config = {
    method,
    url: '/articles',
  }
  method === 'GET' && (config.params = data)
  method === 'POST' && (config.data = data)
  return request(config)
}
export const getArticlesFeed = () => {
  return request({
    method: 'GET',
    url: '/articles/feed',
  })
}
export const setFavorite = (type = false, slug) => {
  return request({
    method: type ? 'POST' : 'DELETE',
    url: `/articles/${slug}/favorite`,
  })
}
/**
  @param {String} slug
  @param {String} method 'GET' 'PUT' 'DELETE'
  @param {Object} params
  // PUT
  data: {
    "article": {
      "title": "Did you train your dragon?"
    }
  }
*/
export const articleDetail = (slug, method = 'GET', params = null) => {
  return request({
    method,
    url: `/articles/${slug}`,
    params
  })
}
