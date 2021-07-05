<template>
  <div class="profile-page">
    <div class="user-info">
      <div class="container">
        <div class="row">
          <div class="col-xs-12 col-md-10 offset-md-1">
            <img :src="profile.image" class="user-img" />
            <h4>{{ profile.username }}</h4>
            <p>
              {{ profile.bio }}
            </p>
            <nuxt-link
              v-if="user.username === username"
              class="btn btn-sm btn-outline-secondary action-btn"
              to="/setting"
            >
              <i class="ion-gear-a"></i>
              &nbsp; Edit Profile Settings
            </nuxt-link>
            <button
              v-else
              class="btn btn-sm btn-outline-secondary action-btn"
              :class="{
                active: profile.following,
              }"
              :disabled="followDisabled"
              @click="followHandler(!profile.following, profile.username)"
            >
              <i class="ion-plus-round"></i>
              &nbsp; Follow {{ profile.username }}
            </button>
          </div>
        </div>
      </div>
    </div>

    <div class="container">
      <div class="row">
        <div class="col-xs-12 col-md-10 offset-md-1">
          <div class="articles-toggle">
            <ul class="nav nav-pills outline-active">
              <li class="nav-item">
                <nuxt-link
                  class="nav-link"
                  :class="{
                    active: tab === 'my_articles',
                  }"
                  :to="{
                    path: `/profile/${username}`,
                    query: {
                      tab: 'my_articles',
                    },
                  }"
                  >My Articles</nuxt-link
                >
              </li>
              <li class="nav-item">
                <nuxt-link
                  class="nav-link"
                  :to="{
                    path: `/profile/${username}`,
                  }"
                  >Favorited Articles</nuxt-link
                >
              </li>
            </ul>
          </div>
          <div
            class="article-preview"
            v-for="article in articles"
            :key="article.slug"
          >
            <div class="article-meta">
              <nuxt-link
                :to="{
                  path: `/profile/${article.author.username}`,
                }"
                ><img :src="article.author.image"
              /></nuxt-link>
              <div class="info">
                <nuxt-link
                  :to="{
                    path: `/profile/${article.author.username}`,
                  }"
                  class="author"
                  >{{ article.author.username }}</nuxt-link
                >
                <span class="date">{{
                  article.createdAt | dateFormatter
                }}</span>
              </div>
              <button
                class="btn btn-outline-primary btn-sm pull-xs-right"
                :class="{
                  active: article.favorited,
                }"
                :disabled="article.favoriteDisabled"
                @click="setFavorite(!article.favorited, article.slug)"
              >
                <i class="ion-heart"></i> {{ article.favoritesCount }}
              </button>
            </div>
            <nuxt-link
              :to="{
                path: `/article/${article.slug}`,
              }"
              class="preview-link"
            >
              <h1>{{ article.title }}</h1>
              <p>{{ article.description }}</p>
              <span>Read more...</span>
            </nuxt-link>
          </div>
          <nav>
            <ul class="pagination">
              <!-- ngRepeat: pageNumber in $ctrl.pageRange($ctrl.totalPages) -->
              <li
                v-for="page in pagination"
                :key="page"
                class="page-item"
                :class="{ active: pageNumber === page }"
                @click="changePage(page)"
              >
                <nuxt-link
                  class="page-link ng-binding"
                  :to="{
                    path: `/profile/${username}`,
                    query: {
                      tab,
                      pageNumber: page,
                    },
                  }"
                  >{{ page }}</nuxt-link
                >
              </li>
              <!-- end ngRepeat: pageNumber in $ctrl.pageRange($ctrl.totalPages) -->
            </ul>
          </nav>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { isDef } from '@/utils'
import { getProfile, followHandler } from '@/api/users'
import { articlesHandler, setFavorite } from '@/api/article'

export default {
  name: 'profile-detail',
  async asyncData({ route, query }) {
    const limit = 8
    const tab = query.tab || undefined
    const pageNumber = Number(query.pageNumber) || 1
    const [{ data: profileData }, { data: articleData }] = await Promise.all([
      getProfile(route.params.username),
      isDef(tab)
        ? articlesHandler('GET', {
            limit,
            author: route.params.username,
            offset: (pageNumber - 1) * limit,
          })
        : articlesHandler('GET', {
            limit,
            favorited: route.params.username,
            offset: (pageNumber - 1) * limit,
          }),
    ])
    const { profile } = profileData
    const { articles, articlesCount } = articleData
    return {
      tab,
      profile,
      pageNumber,
      articles,
      articlesCount,
      username: route.params.username,
      pagination: Math.ceil(articlesCount / limit),
    }
  },
  watchQuery: ['pageNumber', 'tab'],
  data() {
    return {
      followDisabled: false,
      favoriteDisabled: false,
    }
  },
  computed: {
    user() {
      return this.$store.state.user.user
    },
  },
  methods: {
    async setFavorite(type, slug) {
      const index = this.articles.findIndex((article) => slug === article.slug)
      this.$set(this.articles[index], 'favoriteDisabled', true)
      const { data: articleData } = await setFavorite(type, slug)
      const { article } = articleData
      this.$set(this.articles, index, article)
    },
    async followHandler(type, username) {
      this.followDisabled = true
      const { data: profileData } = await followHandler(type, username)
      this.followDisabled = false
      const { profile } = profileData
      this.profile = profile
    },
  },
}
</script>