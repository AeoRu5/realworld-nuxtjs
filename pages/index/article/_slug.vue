<template>
  <div class="article-page">
    <div class="banner">
      <div class="container">
        <h1>{{ article.title }}</h1>
        <article-meta :article="article" @update="updated" />
      </div>
    </div>

    <div class="container page">
      <div class="row article-content">
        <div class="col-md-12" v-html="article.body"></div>
      </div>

      <hr />

      <div class="article-actions">
        <article-meta :article="article" @update="updated" />
      </div>

      <div class="row">
        <div class="col-xs-12 col-md-8 offset-md-2">
          <article-comment :slug="slug" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import MarkdownIt from 'markdown-it'
import { isDef } from '@/utils'
import { articleDetail } from '@/api/article'
import ArticleMeta from './components/article-meta.vue'
import ArticleComment from './components/article-comment.vue'

export default {
  name: 'article-detail',
  middleware: ['noslug'],
  head() {
    return {
      title: `${this.article.title} - Realworld`,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: this.article.description,
        },
      ],
    }
  },
  async asyncData({ route }) {
    const { data: articleData } = await articleDetail(route.params.slug)
    const { article } = articleData
    const md = new MarkdownIt()
    article.body = md.render(article.body)
    return {
      article,
      slug: route.params.slug,
    }
  },
  components: {
    ArticleMeta,
    ArticleComment,
  },
  methods: {
    updated(data) {
      if (isDef(data.author)) {
        this.article = article
      } else {
        this.$set(this.article, 'author', data)
      }
    },
  },
}
</script>