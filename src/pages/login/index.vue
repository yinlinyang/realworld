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
						<li>That email is already taken</li>
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
import { login, register } from '@/src/api/user'
export default {
	name: "Login",
	data () {
		return {
			user: {
				username: '',
				email: '',
				password: '12345678',
			}
		}
	},
	computed: {
		isLogin () {
			return this.$route.name === 'login'
		}
	},
	methods: {
		async onSubmit () {
			try {
				const user = this.user
				this.isLogin ? await login({user}) : await register({user})
				this.$router.push('/')
			} catch (error) {
				console.log(error)
			}
		}
	}
}
</script>
  
<style>
</style>