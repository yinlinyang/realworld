<template>
  <div>
    <div
      class="article-preview"
    >
      <div class="article-meta">
        <nuxt-link
          :to="{
            name: 'profile',
            params: { username: article.author.username },
          }"
        >
          <img :src="article.author.image" />
        </nuxt-link>
        <div class="info">
          <nuxt-link
            :to="{
              name: 'profile',
              params: { username: article.author.username },
            }"
            class="author"
          >
            {{ article.author.username }}
          </nuxt-link>
          <span class="date">{{ article.createdAt | date('MMMM DD, YYYY') }}</span>
        </div>
        <button
          class="btn btn-outline-primary btn-sm pull-xs-right"
          :disabled="article.disabled"
          :class="{ active: article.favorited }"
          @click="handleFavoriteChange(article)"
        >
          <i class="ion-heart"></i> {{ article.favoritesCount }}
        </button>
      </div>
      <nuxt-link
        class="preview-link"
        :to="{ name: 'article', params: { slug: article.slug } }"
      >
        <h1>{{ article.title }}</h1>
        <p>{{ article.body }}</p>
        <span>Read more...</span>
      </nuxt-link>
    </div>
  </div>
</template>

<script>
import { favorite, unfavorite } from '@/api/article'

export default {
  name: 'Article',
  props: {
    article: {
      type: Object,
      default: () => []
    }
  },
  methods: {
    async handleFavoriteChange (article) {
      try {
        if (article.disabled) return
        article.disabled = true
        const { slug } = article
        const api = article.favorited ? unfavorite : favorite
        const res = await api(slug)
        Object.assign(article, res.data.article)
        article.disabled = false
      } catch (error) {
        console.log(error)
      }
    }
  }
}
</script>

<style>
</style>