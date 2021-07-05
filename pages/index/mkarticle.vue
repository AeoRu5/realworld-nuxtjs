<template>
  <div class="editor-page">
    <div class="container page">
      <div class="row">
        <div class="col-md-10 offset-md-1 col-xs-12">
          <form>
            <fieldset>
              <fieldset class="form-group">
                <input
                  v-model="title"
                  type="text"
                  class="form-control form-control-lg"
                  placeholder="Article Title"
                />
              </fieldset>
              <fieldset class="form-group">
                <input
                  v-model="description"
                  type="text"
                  class="form-control"
                  placeholder="What's this article about?"
                />
              </fieldset>
              <fieldset class="form-group">
                <textarea
                  v-model="body"
                  class="form-control"
                  rows="8"
                  placeholder="Write your article (in markdown)"
                ></textarea>
              </fieldset>
              <fieldset class="form-group">
                <input
                  v-model="tagList"
                  type="text"
                  class="form-control"
                  placeholder="Enter tags"
                  disabled
                />
                <div class="tag-list">
                  <div
                    class="tag-pill tag-default"
                    style="cursor: pointer"
                    v-for="(tag, tagIdx) in tags"
                    :key="tagIdx"
                    @click="addTag(tag)"
                  >
                    {{ tag }}
                  </div>
                </div>
              </fieldset>
              <div
                class="btn btn-lg pull-xs-right btn-primary"
                @click="articlesHandler"
              >
                Publish Article
              </div>
            </fieldset>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { isDef } from '@/utils'
import { getTags, articlesHandler } from '@/api/article'

export default {
  name: 'mk-article',
  middleware: ['authenticated'],
  data() {
    return {
      title: '',
      description: '',
      body: '',
      tagList: [],
      tags: [],
    }
  },
  async mounted() {
    const { data: tagData } = await getTags()
    const tags = tagData.tags
      .map((tag) => tag.replace(new RegExp(decodeURI('%E2%80%8C'), 'g'), ''))
      .filter((tag) => tag.length)
    this.tags = tags
  },
  methods: {
    async articlesHandler() {
      const { data: articleData } = await articlesHandler('POST', {
        article: {
          title: this.title,
          description: this.description,
          body: this.body,
          tagList: this.tagList,
        },
      })
      const { article } = articleData
      if (isDef(article)) {
        this.$router.push('/')
      }
    },
    addTag(tag) {
      const tagList = this.tagList
      tagList.push(tag)
      this.tagList = [...new Set(tagList)]
    },
  },
}
</script>