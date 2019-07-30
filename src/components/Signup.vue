<template>
  <div>
    <b-form @submit="onSubmit" @reset="onReset" v-if="show">
      <b-form-group
        label="Email"
        label-for="email"
        description="We'll never share your email with anyone else."
      >
        <b-form-input
          id="email"
          v-model="form.email"
          type="email"
          required
          placeholder="Email"
        ></b-form-input>
      </b-form-group>

      <b-form-group
        label="Username"
        label-for="username"
      >
        <b-form-input
          id="username"
          v-model="form.username"
          required
          placeholder="username"
        ></b-form-input>
      </b-form-group>

      <b-form-group
        label="Password"
        label-for="input-password"
      >
        <b-form-input
          id="input-password"
          type="password"
          v-model="form.password"
          required
          placeholder="Password"
        ></b-form-input>
      </b-form-group>

      <b-button type="submit" variant="primary">Submit</b-button>
    </b-form>
  </div>
</template>

<script>

import { signup } from '../api/auth'

export default {
  name: 'signup',
  data() {
    return {
      form: {
        email: '',
        username: '',
        password: '',
      },
      show: true
    }
  },
  methods: {
    async onSubmit(evt) {
      evt.preventDefault()
      const confirm = await signup({
        email: this.form.email,
        username: this.form.username,
        password: this.form.password
      })
      if (confirm) {
        const res = await this.$store.dispatch('auth/login', {
          email: this.form.email,
          password: this.form.password
        })
        if (res) {
          this.$bvModal.hide('modal-signup')
        }
      }
    },
    onReset(evt) {
      evt.preventDefault()
      this.form.email = ''
      this.form.username = ''
      this.form.password = ''
      this.show = false
      this.$nextTick(() => {
        this.show = true
      })
    }
  }
}
</script>

<style>

</style>
