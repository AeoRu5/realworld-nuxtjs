<template>
  <div class="auth-page">
    <div class="container page">
      <div class="row">
        <div class="col-md-6 offset-md-3 col-xs-12">
          <h1 class="text-xs-center">{{ sign_in ? 'Sign in' : 'Sign up' }}</h1>
          <p class="text-xs-center">
            <nuxt-link
              :to="{
                path: '/login',
                query: {
                  sign_in: !sign_in,
                },
              }"
              >{{ sign_in ? 'Need' : 'Have' }} an account?</nuxt-link
            >
          </p>

          <ul class="error-messages">
            <template v-for="(messages, field) in errors">
              <li v-for="(message, index) in messages" :key="index">
                {{ field }} {{ message }}
              </li>
            </template>
          </ul>

          <form @submit.prevent="onSubmit">
            <fieldset v-if="!sign_in" class="form-group">
              <input
                v-model="username"
                class="form-control form-control-lg"
                type="text"
                placeholder="Your Name"
                required
              />
            </fieldset>
            <fieldset class="form-group">
              <input
                v-model="email"
                class="form-control form-control-lg"
                type="email"
                placeholder="Email"
                required
              />
            </fieldset>
            <fieldset class="form-group">
              <input
                v-model="password"
                class="form-control form-control-lg"
                type="password"
                placeholder="Password"
                required
              />
            </fieldset>
            <button class="btn btn-lg btn-primary pull-xs-right">
              {{ sign_in ? 'Sign in' : 'Sign up' }}
            </button>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { authentication, registration } from '@/api/users'
import { COMMIT_SETUSER } from '@/store/actionTypes'
const Cookie = process.client ? require('js-cookie') : undefined

export default {
  name: 'Login-register',
  middleware: 'notAuthenticated',
  data() {
    return {
      username: '',
      email: '',
      password: '',
      errors: {},
    }
  },
  computed: {
    sign_in() {
      return this.$route.query.sign_in === 'true'
    },
  },
  methods: {
    async onSubmit() {
      const { username, email, password } = this
      try {
        const { data } = this.sign_in
          ? await authentication({ email, password })
          : await registration({ username, email, password })
        const { user } = data
        this.$store.commit(COMMIT_SETUSER, user)
        Cookie.set('USER', user)
        this.$router.push('/')
      } catch (err) {
        console.dir(err)
        this.errors = err.response.data.errors
      }
    },
  },
}
</script>