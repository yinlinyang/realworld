<template>
	<div class="settings-page">
		<div class="container page">
			<div class="row">
				<div class="col-md-6 offset-md-3 col-xs-12">
					<h1 class="text-xs-center">Your Settings</h1>

					<form @submit.prevent="handleModifyUser">
						<fieldset>
							<fieldset class="form-group">
								<input
									class="form-control"
									type="text"
									placeholder="URL of profile picture"
									v-model="user.image"
								/>
							</fieldset>
							<fieldset class="form-group">
								<input
									class="form-control form-control-lg"
									type="text"
									placeholder="Your Name"
									v-model="user.username"
								/>
							</fieldset>
							<fieldset class="form-group">
								<textarea
									class="form-control form-control-lg"
									rows="8"
									placeholder="Short bio about you"
									v-model="user.bio"
								></textarea>
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
								Update Settings
							</button>
						</fieldset>
					</form>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import { mapMutations } from 'vuex'
import {updateUser, getUser} from '@/api/user'

export default {
	name: 'Settings',
	middleware: ['authenticated'],
	data () {
		return {
			user: {}
		}
	},
	async asyncData () {
		let user = {}
		try {
			const {data} = await getUser()
			user = data.user
		} catch (error) {
			console.log(error)
		}
		return { user }
	},
	methods: {
		...mapMutations(['setUser']),
		async handleModifyUser () {
			const user = this.user	
			try {
				const {data} = await updateUser({user})
				this.setUser(data.user)
				this.$router.push({
					name: 'profile',
					params: {username: data.user.username}
				})
			} catch (error) {
				console.log(error)	
			}
		}
	}
}
</script>

<style>
</style>