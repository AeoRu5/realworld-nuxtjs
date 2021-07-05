import { request } from '@/plugins/request'

export const authentication = (params) => {
  return request({
    method: 'POST',
    url: '/users/login',
    data: {
      user: params
    },
  })
}
export const registration = (params) => {
  return request({
    method: 'POST',
    url: '/users',
    data: {
      user: params
    },
  })
}
export const currentUser = (method = 'GET', data) => {
  const config = {
    method,
    url: '/user',
  }
  method === 'PUT' && (config.data = data)
  return request(config)
}
export const getProfile = (username) => {
  return request({
    method: 'GET',
    url: `/profiles/${username}`,
  })
}
export const followHandler = (type, username) => {
  return request({
    method: type ? 'POST' : 'DELETE',
    url: `/profiles/${username}/follow`,
  })
}
