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
              <li class="nav-item">
                <nuxt-link
                  class="nav-link"
                  :to="{ name: 'home', query: { tab: 'your_feed' } }"
                  :class="{ active: tab === 'your_feed' }"
                >
                  Your Feed
                </nuxt-link>
              </li>
              <li class="nav-item">
                <nuxt-link
                  :to="{ name: 'home', query: { tab: 'global_feed' } }"
                  class="nav-link"
                  :class="{ active: tab === 'global_feed' }"
                  >Global Feed</nuxt-link
                >
              </li>
              <li v-if="tag" class="nav-item">
                <span class="nav-link" :class="{ active: tab === 'tag' }"
                  >#{{ tag }}</span
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
								:class="{active: article.favorited}"
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

        <div class="col-md-3">
          <div class="sidebar">
            <p>Popular Tags</p>

            <div class="tag-list">
              <nuxt-link
                :to="{ name: '', query: { tab: 'tag', page, tag } }"
                v-for="tag in tags"
                :key="tag"
                class="tag-pill tag-default"
              >
                {{ tag }}
              </nuxt-link>
            </div>
          </div>
        </div>

        <nav>
          <ul class="pagination">
            <li
              class="page-item"
              :class="{
                active: item === page,
              }"
              v-for="item in totalPage"
              :key="item"
            >
              <nuxt-link
                class="page-link"
                :to="{
                  name: 'home',
                  query: {
                    page: item,
                    tag: $route.query.tag,
                    tab: tab,
                  },
                }"
                >{{ item }}</nuxt-link
              >
            </li>
          </ul>
        </nav>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import { getTags } from '@/api/tag'
import { getArticles, getFeed, favorite, unfavorite } from '@/api/article'

const TAB = {
  GLOBAL_FEED: 'global_feed',
  YOUR_FEED: 'your_feed',
  TAG: 'tag',
}

const limit = 20

export default {
  name: 'Home',
  watchQuery: ['page', 'tab', 'tag'],
  data () {
    return {
      articles: [],
      articlesCount: 0,
      tags: [],
    }
  },
  computed: {
    totalPage () {
      return Math.ceil(this.articlesCount / limit)
    }
  },
  async asyncData ({ query, store }) {
    try {
      const { page = 1, tab = TAB.GLOBAL_FEED, tag } = query
      const { user } = store.state
      const loadArticles = user && tab === TAB.YOUR_FEED ? getFeed : getArticles
      const offset = (page - 1) * limit
      const [articleRes, tagRes] = await Promise.all([
        loadArticles({
          limit,
          offset,
          tag,
        }),
        getTags(),
      ])
      articleRes.data.articles.forEach((item) => item.disabled = false)
      return {
        articles: articleRes.data.articles,
        articlesCount: articleRes.data.articlesCount,
        limit,
        page: Number(page),
        tags: tagRes.data.tags,
        tab,
        tag
      }
    } catch (error) {
      console.log(error)
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

<style></style>
