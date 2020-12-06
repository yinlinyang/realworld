<template>
  <div class="editor-page">
    <div class="container page">
      <div class="row">
        <div class="col-md-10 offset-md-1 col-xs-12">
          <form @submit.prevent="handleSubmit">
            <fieldset>
              <fieldset class="form-group">
                <input
                  type="text"
                  class="form-control form-control-lg"
                  placeholder="Article Title"
                  v-model="article.title"
                />
              </fieldset>
              <fieldset class="form-group">
                <input
                  type="text"
                  class="form-control"
                  placeholder="What's this article about?"
                  v-model="article.description"
                />
              </fieldset>
              <fieldset class="form-group">
                <textarea
                  class="form-control"
                  rows="8"
                  placeholder="Write your article (in markdown)"
                  v-model="article.body"
                ></textarea>
              </fieldset>
              <fieldset class="form-group">
                <input
                  type="text"
                  class="form-control"
                  placeholder="Enter tags"
                  v-model="article.tags"
                />
                <div class="tag-list"></div>
              </fieldset>
              <button
                class="btn btn-lg pull-xs-right btn-primary"
                type="button"
                @click="handleSubmit"
              >
                Publish Article
              </button>
            </fieldset>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { createArticles, getArticle, modifyArticle } from '@/api/article'
export default {
  name: 'Editor',
  middleware: ['authenticated'],
  data () {
    return {
      article: {
        title: '',
        description: '',
        body: '',
        tags: ''
      }
    }
  },
  created () {
    const { params } = this.$route
    if (params && params.slug) {
      this.getArticle()
    }
  },
  methods: {
    async handleSubmit () {
      try {
        const { title, body, description, tags } = this.article
        const { params } = this.$route
        const { slug } = params
        const options = {
          title: title && title.trim(),
          body: body && body.trim(),
          description: description && description.trim(),
          tagList: tags && tags.trim().split(',')
        }
        const { data } = slug ? await modifyArticle(slug, options) : await createArticles(options)
        this.$router.push({ name: 'article', params: { slug: data.article.slug } })
      } catch (error) {
        console.log(error)
      }
    },
    async getArticle () {
      const { params } = this.$route
      const { slug } = params
      const { data } = await getArticle(slug)
      console.log(data)
      const { article } = data
      article.tags = article.tagList.join(',')
      this.article = article
    }
  },
}
</script>

<style>
</style>