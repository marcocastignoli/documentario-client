<template>
  <div id="app">
    <b-container>
      <b-row>
        <b-col class="text-center pt-4">
          <h1>{{category.name}}</h1>
        </b-col>
      </b-row>
      <b-row class="pt-3">
        <b-col class="text-center pt-4">
          <b-card
            v-for="video in videos"
            :key="video.id"
            :title="video.title"
            class="mb-2"
          >
            <b-card-text>
              {{video.description}}
              <b-embed type="video" aspect="16by9" controls poster="poster.png">
                <source :src="`http://localhost:8888/stream/?path=${video.path}`" type="video/mp4">
              </b-embed>
            </b-card-text>
          </b-card>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import { getVideos } from '../api/video'

export default {
  data() {
    return {
      category: {},
      page: 0,
      videos: []
    }
  },
  computed: {
    ...mapGetters('auth', {
      user: 'user'
    }),
    ...mapGetters('category', {
      categories: 'categories'
    })
  },
  watch: {
    '$route' () {
      this.loadCategory()
    }
  },
  mounted() {
    this.loadCategory()
  },
  methods: {
    loadCategory() {
      this.category = this.categories.find(c => c.id === parseInt(this.$route.params.id))
      getVideos({
        token: this.user.token,
        page: this.page,
        categoryId: this.category.id
      }).then(res => {
        this.videos = res.data
      })
    }
  },
}
</script>

<style>
</style>
