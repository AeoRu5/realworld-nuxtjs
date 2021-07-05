<template>
  <div>
    <!-- 顶部导航栏 start -->
    <nav class="navbar navbar-light">
      <div class="container">
        <nuxt-link class="navbar-brand" to="/">conduit</nuxt-link>
        <ul class="nav navbar-nav pull-xs-right">
          <li class="nav-item">
            <!-- Add "active" class when you're on that page" -->
            <nuxt-link class="nav-link" to="/">Home</nuxt-link>
          </li>
          <template v-if="user && !isUndef(user)">
            <li class="nav-item">
              <nuxt-link class="nav-link" to="/mkarticle">
                <i class="ion-compose"></i>&nbsp;New Post
              </nuxt-link>
            </li>
            <li class="nav-item">
              <nuxt-link class="nav-link" to="/setting">
                <i class="ion-gear-a"></i>&nbsp;Settings
              </nuxt-link>
            </li>
            <li class="nav-item">
              <nuxt-link
                class="nav-link"
                :to="{
                  path: `/profile/${user.username}`,
                }"
              >
                <img class="user-pic" :src="user.image" />
                {{ user.username }}
              </nuxt-link>
            </li>
          </template>
          <template v-else>
            <li class="nav-item">
              <nuxt-link
                class="nav-link"
                :to="{
                  path: '/login',
                  query: {
                    sign_in: true,
                  },
                }"
                >Sign in</nuxt-link
              >
            </li>
            <li class="nav-item">
              <nuxt-link
                class="nav-link"
                :to="{
                  path: '/login',
                  query: {
                    sign_in: false,
                  },
                }"
                >Sign up</nuxt-link
              >
            </li>
          </template>
        </ul>
      </div>
    </nav>
    <!-- 顶部导航栏 end -->
    <!-- 子路由 start -->
    <nuxt-child />
    <!-- 子路由 end -->
    <!-- 底部 start -->
    <footer>
      <div class="container">
        <nuxt-link to="/" class="logo-font">conduit</nuxt-link>
        <span class="attribution">
          An interactive learning project from
          <a to="https://thinkster.io">Thinkster</a>. Code &amp; design licensed
          under MIT.
        </span>
      </div>
    </footer>
    <!-- 底部 end -->
  </div>
</template>

<script>
import { isUndef } from '@/utils'

export default {
  name: 'Layout',
  computed: {
    user() {
      return this.$store.state.user.user
    },
  },
  created() {
    console.log('v0.0.2')
  },
  methods: {
    isUndef,
  },
}
</script>