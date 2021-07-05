<template>
  <div class="settings-page">
    <div class="container page">
      <div class="row">
        <div class="col-md-6 offset-md-3 col-xs-12">
          <h1 class="text-xs-center">Your Settings</h1>
          <ul class="error-messages">
            <template v-for="(messages, field) in errors">
              <li v-for="(message, index) in messages" :key="index">
                {{ field }} {{ message }}
              </li>
            </template>
          </ul>
          <form>
            <fieldset>
              <fieldset class="form-group">
                <input
                  v-model="image"
                  class="form-control"
                  type="text"
                  placeholder="URL of profile picture"
                />
              </fieldset>
              <fieldset class="form-group">
                <input
                  v-model="username"
                  class="form-control form-control-lg"
                  type="text"
                  placeholder="Your Name"
                />
              </fieldset>
              <fieldset class="form-group">
                <textarea
                  v-model="bio"
                  class="form-control form-control-lg"
                  rows="8"
                  placeholder="Short bio about you"
                ></textarea>
              </fieldset>
              <fieldset class="form-group">
                <input
                  v-model="email"
                  class="form-control form-control-lg"
                  type="text"
                  placeholder="Email"
                />
              </fieldset>
              <fieldset class="form-group">
                <input
                  v-model="password"
                  class="form-control form-control-lg"
                  type="password"
                  placeholder="Password"
                />
              </fieldset>
              <div
                class="btn btn-lg btn-primary pull-xs-right"
                @click="currentUser"
              >
                Update Settings
              </div>
            </fieldset>
          </form>
          <hr />
          <div class="btn btn-outline-danger" @click="logout">
            Or click here to logout.
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { isDef } from '@/utils'
import { currentUser } from '@/api/users'
import { COMMIT_SETUSER } from '@/store/actionTypes'
const Cookie = process.client ? require('js-cookie') : undefined

export default {
  name: 'setting',
  middleware: ['authenticated'],
  data() {
    return {
      image: '',
      username: '',
      bio: '',
      email: '',
      password: '',
      errors: {},
    }
  },
  created() {
    this.image = this.user.image
    this.username = this.user.username
    this.bio = this.user.bio
    this.email = this.user.email
  },
  computed: {
    user() {
      return this.$store.state.user.user
    },
  },
  methods: {
    async currentUser() {
      try {
        const { data: userData } = await currentUser('PUT', {
          user: {
            image: this.image,
            username: this.username,
            bio: this.bio,
            email: this.email,
            password: this.password,
          },
        })
        const { user } = userData
        if (isDef(user)) {
          this.$store.commit(COMMIT_SETUSER, user)
          Cookie.set('USER', user)
        }
      } catch (err) {
        console.dir(err)
        this.errors = err.response.data.errors
      }
    },
    logout() {
      Cookie.remove('USER')
      location.reload()
    },
  },
}
</script>