<template>
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
      <span class="date">{{ article.createdAt | dateFormatter }}</span>
    </div>

    <button
      class="btn btn-sm btn-outline-secondary"
      :class="{
        active: article.author.following,
      }"
      :disabled="followDisabled"
      @click="followHandler(!article.author.following, article.author.username)"
    >
      <i class="ion-plus-round"></i>
      &nbsp; Follow {{ article.author.username }}
      <!-- <span class="counter">(10)</span> -->
    </button>
    &nbsp;
    <button
      class="btn btn-sm btn-outline-primary"
      :class="{
        active: article.favorited,
      }"
      :disabled="favoriteDisabled"
      @click="setFavorite(!article.favorited, article.slug)"
    >
      <i class="ion-heart"></i>
      &nbsp; Favorite Post
      <span class="counter">({{ article.favoritesCount }})</span>
    </button>
  </div>
</template>

<script>
import { followHandler } from '@/api/users'
import { setFavorite } from '@/api/article'

export default {
  name: 'article-meta',
  props: {
    article: {
      type: Object,
      default: {},
    },
  },
  data() {
    return {
      favoriteDisabled: false,
      followDisabled: false,
    }
  },
  methods: {
    async setFavorite(type, slug) {
      this.favoriteDisabled = true
      const { data: articleData } = await setFavorite(type, slug)
      this.favoriteDisabled = false
      const { article } = articleData
      this.$emit('update', article)
    },
    async followHandler(type, username) {
      this.followDisabled = true
      const { data: profileData } = await followHandler(type, username)
      this.followDisabled = false
      const { profile } = profileData
      this.$emit('update', profile)
    },
  },
}
</script>
