import axios from 'axios'
import { isUndef } from '@/utils'

export const request = axios.create({
  baseURL: 'https://conduit.productionready.io/api'
})
export default ({ store }) => {
  request.interceptors.request.use(config => {
    const { user } = store.state.user
    !isUndef(user) && (config.headers.Authorization = `Token ${user.token}`)
    return config
  }, err => {
    return Promise.reject(err)
  })
  request.interceptors.response.use(e => {
    console.log(e.data)
    return e
  }, err => {
    return Promise.reject(err)
  })
}
