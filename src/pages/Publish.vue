<template>
  <b-container>
    <b-row>
      <b-col class="text-center pt-4">
        <b-form @submit="onSubmit" @reset="onReset" v-if="show">
          <b-form-group
            label="Title"
            label-for="title"
          >
            <b-form-input
              id="title"
              v-model="form.title"
              required
              placeholder="Title"
            ></b-form-input>
          </b-form-group>

          <b-form-group
            label="Category"
            label-for="categoryId"
          >
            <b-form-select id="categoryId" v-model="form.categoryId" :options="categories.map(c => ({value: c.id, text: c.name}))"></b-form-select>
          </b-form-group>
          <b-form-group
            label="Description"
            label-for="description"
          >
            <b-form-textarea id="description" v-model="form.description" placeholder="Description"></b-form-textarea>
          </b-form-group>
          <b-form-group
            label="Video"
            label-for="video"
          >
            <b-form-file
              id="video"
              v-model="form.video"
              placeholder="Choose a video..."
              drop-placeholder="Drop video here..."
            ></b-form-file>
          </b-form-group>
          <b-button type="submit" variant="primary">Submit</b-button>
        </b-form>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
import { mapGetters } from 'vuex'
import { createVideo } from '../api/video'

export default {
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
        title: '',
        categoryId: null,
        description: '',
        video: null
      },
      show: true
    }
  },
  methods: {
    async onSubmit(evt) {
      evt.preventDefault()
      const confirm = await createVideo({
        token: this.user.token,
        title: this.form.title,
        categoryId: this.form.categoryId,
        description: this.form.description,
        video: this.form.video
      })
      if (confirm) {
        this.$bvToast.toast(`Video published`, {
          title: 'Video published succesfully',
          autoHideDelay: 1000,
          solid: true
        })  
         this.onReset(evt)
      }
    },
    onReset(evt) {
      evt.preventDefault()
      this.form.title = ''
      this.form.categoryId = null
      this.form.description = ''
      this.form.video = null

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
