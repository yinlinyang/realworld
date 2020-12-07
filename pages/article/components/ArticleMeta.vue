<template>
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
      class="btn btn-sm"
      :class="{ 'btn-outline-secondary': article.author.following }"
      :disabled="followLoading"
      @click="handleFollowChange"
    >
      <i class="ion-plus-round"></i>
      &nbsp; {{ article.author.following ? 'UnFollow' : 'Follow' }}
      {{ article.author.username }}
    </button>
    &nbsp;&nbsp;
    <button
      class="btn btn-sm"
      :class="{ 'btn-outline-primary': article.favorited }"
      :disabled="changFavoriteStatusIng"
      @click="handleFavoriteChange"
    >
      <i class="ion-heart"></i>
      &nbsp; Favorite {{ article.author.username }}
      <span class="counter">({{ article.favoritesCount }})</span>
    </button>
  </div>
</template>

<script>
import { follow, unFollow } from '@/api/user'
import { favorite, unfavorite } from '@/api/article'

export default {
  name: 'ArticleMeta',
  props: {
    article: {
      type: Object,
      default: {}
    }
  },
  data () {
    return {
      followLoading: false,
      changFavoriteStatusIng: false
    }
  },
  methods: {
    async handleFollowChange () {
      const { author: { following, username } } = this.article
      this.followLoading = true
      try {
        const { data } = following ? await unFollow(username) : await follow(username)
        // ?
        Object.assign(this.article.author, data.profile)
      } catch (error) {
        console.log(error)
      }
      this.followLoading = false
    },
    async handleFavoriteChange () {
      const article = this.article
      try {
        if (this.changFavoriteStatusIng) return
        this.changFavoriteStatusIng = true
        const { slug } = article
        const api = article.favorited ? unfavorite : favorite
        const res = await api(slug)
        Object.assign(article, res.data.article)
        this.changFavoriteStatusIng = false
      } catch (error) {
        console.log(error)
      }
    }
  }
}
</script>

<style>
</style>