  <template>
  <div class="auth-page">
    <div class="container page">
      <div class="row">
        <div class="col-md-6 offset-md-3 col-xs-12">
          <h1 class="text-xs-center">Sign up</h1>
          <p class="text-xs-center">
            <nuxt-link to="/login">Have an account?</nuxt-link>
          </p>

          <ul class="error-messages">
            <template v-for="(message, field) in errors" >
              <li :key="field">{{ field }} {{ message }}</li>
            </template>
          </ul>

          <form @submit.prevent="onSubmit">
            <fieldset class="form-group" v-if="!isLogin">
              <input
                class="form-control form-control-lg"
                type="text"
                placeholder="Your Name"
                v-model="user.username"
              />
            </fieldset>
            <fieldset class="form-group">
              <input
                class="form-control form-control-lg"
                type="text"
                placeholder="Email"
                v-model="user.email"
              />
            </fieldset>
            <fieldset class="form-group">
              <input
                class="form-control form-control-lg"
                type="password"
                placeholder="Password"
                v-model="user.password"
              />
            </fieldset>
            <button class="btn btn-lg btn-primary pull-xs-right">
              Sign up
            </button>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>
  
<script>
import { login, register } from '@/api/user'
import { mapMutations } from 'vuex'

const Cookie = process.client ? require('js-cookie') : null

export default {
  name: "Login",
  middleware: ['notAuthenticated'],
  data () {
    return {
      user: {
        username: 'ccc.yyy@gmail.com',
        email: 'ccc.yyy@gmail.com',
        password: '',
      },
      errors: []
    }
  },
  computed: {
    isLogin () {
      return this.$route.name === 'login'
    }
  },
  methods: {
    ...mapMutations(['setUser']),
    async onSubmit () {
      try {
        const user = this.user
        const { data } = this.isLogin ? await login({ user }) : await register({ user })
        this.$router.push('/')
        Cookie.set('user', data.user)
        this.setUser(data.user)
      } catch (err) {
        console.log(err)
        if (err && err.response) {
          this.errors = err.response.data.errors
        }
      } finally {

      }
    }
  }
}
</script>
  
<style>
</style>