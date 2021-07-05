import { COMMIT_SETUSER } from "@/store/actionTypes"
import { isUndef } from '@/utils'

export default {
  actions: {
    nuxtServerInit({ commit }, { req }) {
      const cookieparser = process.server ? require('cookieparser') : undefined
      const parsed = req.headers.cookie ? cookieparser.parse(req.headers.cookie) : {}
      if (!isUndef(parsed.USER)) {
        try {
          commit(COMMIT_SETUSER, JSON.parse(parsed.USER))
        } catch (err) {
          console.dir(err)
        }
      }
    }
  },
}