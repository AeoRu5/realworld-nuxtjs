<template>
  <div class="home-page">
    <div class="banner">
      <div class="container">
        <h1 class="logo-font">conduit</h1>
        <p>A place to share your knowledge.</p>
      </div>
    </div>
    <div class="container page">
      <div class="row">
        <div class="col-md-9">
          <div class="feed-toggle">
            <ul class="nav nav-pills outline-active">
              <li v-if="user && !isUndef(user)" class="nav-item">
                <nuxt-link
                  class="nav-link"
                  :class="{
                    active: tab === 'your_feed',
                  }"
                  :to="{
                    path: '/',
                    query: {
                      tab: 'your_feed',
                    },
                  }"
                  >Your Feed</nuxt-link
                >
              </li>
              <li class="nav-item">
                <nuxt-link
                  class="nav-link"
                  :class="{
                    active: isUndef(tab) && isUndef(tag),
                  }"
                  to="/"
                  >Global Feed</nuxt-link
                >
              </li>
              <li v-if="isDef(tag)" class="nav-item">
                <nuxt-link
                  class="nav-link"
                  :class="{
                    active: isDef(tag),
                  }"
                  :to="{}"
                  >#{{ tag }}</nuxt-link
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
                    path: '/',
                    query: {
                      tag,
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
        <div class="col-md-3">
          <div class="sidebar">
            <p>Popular Tags</p>

            <div class="tag-list">
              <nuxt-link
                :to="{
                  path: '/',
                  query: {
                    tag,
                  },
                }"
                v-for="(tag, tagIdx) in tags"
                :key="tagIdx"
                class="tag-pill tag-default"
                >{{ tag }}</nuxt-link
              >
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {
  getTags,
  articlesHandler,
  getArticlesFeed,
  setFavorite,
} from '@/api/article'
import { isDef, isUndef } from '@/utils'

export default {
  name: 'home',
  async asyncData({ query, store }) {
    const limit = 8
    const tab = query.tab || undefined
    const tag = query.tag || undefined
    const author = query.author || undefined
    const pageNumber = Number(query.pageNumber) || 1
    const [{ data: tagData }, { data: articleData }] = await Promise.all([
      getTags(),
      isDef(tab) && isDef(store.state.user.user)
        ? getArticlesFeed({
            limit,
            offset: (pageNumber - 1) * limit,
          })
        : articlesHandler('GET', {
            tag,
            limit,
            author,
            offset: (pageNumber - 1) * limit,
          }),
    ])
    const tags = tagData.tags
      .map((tag) => tag.replace(new RegExp(decodeURI('%E2%80%8C'), 'g'), ''))
      .filter((tag) => tag.length)
    const { articles, articlesCount } = articleData
    return {
      tab,
      tags,
      tag,
      pageNumber,
      articles,
      articlesCount,
      pagination: Math.ceil(articlesCount / limit),
    }
  },
  watchQuery: ['pageNumber', 'tab', 'tag', 'author'],
  computed: {
    user() {
      return this.$store.state.user.user
    },
  },
  methods: {
    isDef,
    isUndef,
    async setFavorite(type, slug) {
      const index = this.articles.findIndex((article) => slug === article.slug)
      this.$set(this.articles[index], 'favoriteDisabled', true)
      const { data: articleData } = await setFavorite(type, slug)
      const { article } = articleData
      this.$set(this.articles, index, article)
    },
    changePage(pageNumber) {
      this.pageNumber = pageNumber
    },
  },
}
</script>