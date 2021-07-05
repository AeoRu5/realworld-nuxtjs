import { GETUSER, SETUSER, COMMIT_SETUSER } from "./actionTypes"
import { currentUser } from '@/api/users'

export default {
  namespaced: true,
  state() {
    return {
      user: null
    }
  },
  mutations: {
    async [GETUSER](state) {
      const { data } = await currentUser()
      const { user } = data
      this.commit(COMMIT_SETUSER, user)
    },
    [SETUSER](state, user) {
      state.user = user
    },
  },
}