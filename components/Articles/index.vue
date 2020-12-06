<template>
  <div>
    <Article v-for="article in articles" :key="article.slug" :article="article" />
  </div>
</template>

<script>
import Article from './Article'

export default {
  name: 'Articles',
  components: {
    Article,
  },
  props: {
    articles: {
      type: Array,
      default: () => []
    }
  }
}
</script>

<style>
</style>