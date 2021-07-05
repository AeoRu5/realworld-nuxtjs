<template>
  <div>
    <form class="card comment-form">
      <div class="card-block">
        <textarea
          v-model="comment"
          class="form-control"
          placeholder="Write a comment..."
          rows="3"
        ></textarea>
      </div>
      <div class="card-footer">
        <img :src="user.image" class="comment-author-img" />
        <div class="btn btn-sm btn-primary" @click="commentsHandler">
          Post Comment
        </div>
      </div>
    </form>

    <div v-for="comment in comments" :key="comment.id" class="card">
      <div class="card-block">
        <p class="card-text">
          {{ comment.body }}
        </p>
      </div>
      <div class="card-footer">
        <a href="" class="comment-author">
          <img :src="comment.author.image" class="comment-author-img" />
        </a>
        &nbsp;
        <a href="" class="comment-author">{{ comment.author.username }}</a>
        <span class="date-posted">{{ comment.createdAt | dateFormatter }}</span>
      </div>
    </div>
  </div>
</template>

<script>
import { commentsHandler } from '@/api/comment'

export default {
  name: 'article-comment',
  props: {
    slug: {
      type: String,
      default: '',
    },
  },
  data() {
    return {
      comment: '',
      comments: [],
    }
  },
  computed: {
    user() {
      return this.$store.state.user.user
    },
  },
  async mounted() {
    const { data: commentsData } = await commentsHandler(this.slug)
    const { comments } = commentsData
    this.comments = comments
  },
  methods: {
    async commentsHandler(slug) {
      const { data: commentData } = await commentsHandler(this.slug, 'POST', {
        comment: {
          body: this.comment,
        },
      })
      const { comment } = commentData
      this.comment = ''
      this.comments.unshift(comment)
    },
  },
}
</script>