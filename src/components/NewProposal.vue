<template>
  <div>
    <b-form @submit="onSubmit" @reset="onReset" v-if="show">
      <b-form-group
        label="Link"
        label-for="link"
      >
        <b-form-input
          id="link"
          v-model="form.link"
          required
          placeholder="Link"
        ></b-form-input>
      </b-form-group>

      <b-form-group
        label="Category"
        label-for="categoryId"
      >
        <b-form-select v-model="form.categoryId" :options="categories.map(c => ({value: c.id, text: c.name}))"></b-form-select>
      </b-form-group>


      <b-button type="submit" variant="primary">Submit</b-button>
    </b-form>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import { createProposal } from '../api/proposal'

export default {
  name: 'new-proposal',
  computed: {
    ...mapGetters('category', {
      categories: 'categories'
    }),
    ...mapGetters('auth', {
      user: 'user'
    }),
  },
  data() {
    return {
      form: {
        link: '',
        categoryId: null,
      },
      show: true
    }
  },
  methods: {
    async onSubmit(evt) {
      evt.preventDefault()
      const confirm = await createProposal({
        token: this.user.token,
        link: this.form.link,
        categoryId: this.form.categoryId
      })
      if (confirm) {
        this.$bvModal.hide('modal-proposal-create')
        this.$emit('submit')
      }
    },
    onReset(evt) {
      evt.preventDefault()
      this.form.link = ''
      this.form.categoryId = null

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
