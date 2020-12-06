<template>
  <div class="profile-page">
    <div class="user-info">
      <div class="container">
        <div class="row">
          <div class="col-xs-12 col-md-10 offset-md-1">
            <img :src="profile.image" class="user-img" />
            <h4>{{ profile.name }}</h4>
            <p>
              {{ profile.bio }}
            </p>
            <button
              class="btn btn-sm btn-outline-secondary action-btn"
              @click="handleFollowChange"
							:disabled="followLoading"
            >
              <i class="ion-plus-round"></i>
              &nbsp; {{ profile.following ? 'Unfollow' : 'Follow' }}
              {{ profile.username }}
            </button>
          </div>
        </div>
      </div>
    </div>

    <div class="container">
      <div class="row">
        <div class="col-xs-12 col-md-10 offset-md-1">
          <div class="articles-toggle">
            <ul class="nav nav-pills outline-active">
              <li class="nav-item">
                <nuxt-link
                  class="nav-link"
                  :class="{ active: articleType !== 'favorited' }"
                  :to="{ name: 'profile' }"
                >
                  My Articles
                </nuxt-link>
              </li>
              <li class="nav-item">
                <nuxt-link
                  class="nav-link"
									:class="{ active: articleType === 'favorited' }"
                  :to="{
                    name: 'profile',
                    params: { articleType: 'favorited' },
                  }"
                >
                  Favorited Articles
                </nuxt-link>
              </li>
            </ul>
          </div>

				<Articles :articles="articles" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { getProfile, follow, unFollow } from '@/api/user'
import { getArticles } from '@/api/article'
import { Articles } from '@/components'
export default {
	name: 'Profile',
	watchParams: ['articleType', 'username'],
  components: {
    Articles,
	},
	data () {
		return {
			followLoading: false
		}
	},
  async asyncData ({ params }) {
    const { username, articleType } = params
    try {
      const limit = 20
      const offset = 0
      const option = {
        limit,
        offset
      }
      if (articleType === 'favorited') {
        option.favorited = username
      } else {
        option.author = username
      }

      const [profileRes, articlesRes] = await Promise.all([
        getProfile(username),
        getArticles(option)
			])
			
			articlesRes.data && articlesRes.data.articles && articlesRes.data.articles.forEach((item) => {
				item.disabled = false
			});
      return {
        profile: profileRes.data.profile,
        articles: articlesRes.data.articles,
        articleType
      }
    } catch (error) {
      console.log(error)
      return {
        profile: {},
        articles: [],
        articleType
      }
    }
  },
  methods: {
    async handleFollowChange () {
			const { following, username } = this.profile
			this.followLoading = true
			try {
				const { data } = following ? await unFollow(username) : await follow(username)
				console.log(data)
				this.profile = data.profile
			} catch (error) {
				console.log(error)
			}
			this.followLoading = false
		}
  }
}
</script>

<style>
</style>