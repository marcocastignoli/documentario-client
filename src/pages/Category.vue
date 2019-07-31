<template>
  <div id="app">
    <b-container>
      <b-row>
        <b-col class="text-center pt-4">
          <h1>{{category.name}}</h1>
        </b-col>
      </b-row>
      <b-row class="pt-3">
        <video-post
          v-for="(video, index) in videos"
          :key="video.id"
          :video="video"
          :type="calcGrid(index)"
          @like="onLike(video)"
          @unlike="onUnlike(video)"
        />
      </b-row>
    </b-container>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import { getVideos, like, unlike } from '../api/video'
import VideoPost from '../components/VideoPost'

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
    this.calcGrid()
  },
  methods: {
    calcGrid(n) {
      if (n%3 === 0) {
        return 'full'
      } else {
        return 'half'
      }
    },
    loadCategory() {
      this.category = this.categories.find(c => c.id === parseInt(this.$route.params.id))
      getVideos({
        token: this.user ? this.user.token : null,
        page: this.page,
        categoryId: this.category.id
      }).then(res => {
        this.videos = res.data
      })
    },
    onLike(video) {
      this.$set(video, 'liked', true)
      if (!video.likes) {
        video.likes = 0
      }
      like({
        token: this.user.token,
        id: video.id
      }).then(() => {
        this.$set(video, 'likes', video.likes + 1)
      })
    },
    onUnlike(video) {
      this.$set(video, 'liked', false)
      unlike({
        token: this.user.token,
        id: video.id
      }).then(() => {
        this.$set(video, 'likes', video.likes - 1)
      })
    },
  },
  components: {
    VideoPost
  }
}
</script>

<style>
</style>
