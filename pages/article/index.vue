<template>
  <div class="article-page">
    <div class="banner">
      <div class="container">
        <h1>{{ article.title }}</h1>

        <ArticleMeta :article="article" />
      </div>
    </div>

    <div class="container page">
      <div class="row article-content">
        <div class="col-md-12" v-html="article.body"></div>
      </div>

      <hr />

      <div class="article-actions">
        <ArticleMeta :article="article" />
      </div>

      <div class="row">
        <div class="col-xs-12 col-md-8 offset-md-2">
          <form class="card comment-form" @submit.prevent="handleSubmit">
            <div class="card-block">
              <textarea
                class="form-control"
                placeholder="Write a comment..."
                rows="3"
                v-model="content"
              ></textarea>
            </div>
            <div class="card-footer">
              <img :src="user.image" class="comment-author-img" />
              <button class="btn btn-sm btn-primary">Post Comment</button>
            </div>
          </form>

          <div class="card" v-for="comment in comments" :key="comment.id">
            <div class="card-block">
              <p class="card-text">
                {{ comment.body }}
              </p>
            </div>
            <div class="card-footer">
              <nuxt-link
                :to="{
                  name: 'profile',
                  params: { username: comment.author.username },
                }"
                class="comment-author"
              >
                <img :src="comment.author.image" class="comment-author-img" />
              </nuxt-link>
              &nbsp;
              <nuxt-link
                :to="{
                  name: 'profile',
                  params: { username: comment.author.username },
                }"
                class="comment-author"
                >{{ comment.author.username }}</nuxt-link
              >
              <span class="date-posted">{{ comment.createdAt | date('MMMM DD, YYYY') }}</span>
              <span
                class="mod-options"
                v-if="user.username === comment.author.username"
              >
                <i
                  class="ion-trash-a"
                  @click="handleDeleteComment(comment)"
                ></i>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { getArticle, getComments, addComment, deleteComment } from '@/api/article'
import ArticleMeta from './components/ArticleMeta'
import { mapState } from 'vuex'

export default {
  name: 'ArticleIndex',
  components: {
    ArticleMeta
  },
  computed: {
    ...mapState(['user'])
  },
  data () {
    return {
      content: ''
    }
  },
  async asyncData ({ params }) {
    const { slug } = params
    try {
      const [articleRes, commentsRes] = await Promise.all([
        getArticle(slug),
        getComments(slug)
      ])
      return {
        article: articleRes.data.article,
        comments: commentsRes.data.comments
      }
    } catch (error) {
      console.log(error)
    }
  },
  methods: {
    async handleSubmit () {
      try {
        const { params } = this.$route
        const { slug } = params
        const content = this.content
        await addComment(slug, { comment: { body: content } })
        this.content = ''
        this.getComment()
      } catch (error) {
        console.log(error)
      }
    },
    async getComment () {
      try {
        const { params } = this.$route
        const { slug } = params
        const { data } = await getComments(slug)
        this.comments = data.comments
      } catch (error) {
        console.log(error)
      }
    },
    async handleDeleteComment (comment) {
      try {
        const { id } = comment
        const { params: { slug } } = this.$route
        await deleteComment(slug, id)
        const { data } = await getComments(slug)
        this.comments = data.comments
      } catch (error) {
        console.log(error)
      }
    }
  }
}
</script>

<style>
</style>