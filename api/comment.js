import { request } from '@/plugins/request'

export const commentsHandler = (slug, method = 'GET', params) => {
  let url = `/articles/${slug}/comments`
  method === 'DELETE' && (url += `/${params}`)
  const config = {
    method,
    url,
  }
  method === 'POST' && (config.data = params)
  return request(config)
}
