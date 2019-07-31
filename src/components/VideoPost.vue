<template>
  <b-col :md="calcColumn()" class="text-center pt-4">
    <div v-if="!type || type === 'full' " class="mb-2">
      <b-row>
        <b-col md="4">
          <b-embed  type="video" aspect="16by9" controls poster="poster.png">
            <source :src="`${process.env.VUE_APP_ADDRESS}/stream/?path=${video.path}`" type="video/mp4">
          </b-embed>
        </b-col>
        <b-col md="8" class="description">
          <h2 style="text-align: left;">{{video.title}}</h2>
          {{video.description}} Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </b-col>
      </b-row>
    </div>
    <div v-if="type === 'half'" class="mb-2">
      <b-row>
        <b-col class="description">
          <h2 style="text-align: center;">{{video.title}}</h2>
          <p class="mb-3">{{video.description}} Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
          <b-embed type="video" aspect="16by9" controls poster="poster.png">
            <source :src="`${process.env.VUE_APP_ADDRESS}/stream/?path=${video.path}`" type="video/mp4">
          </b-embed>
        </b-col>
      </b-row>
    </div>
    <div class="text-right">
      <b-button v-if="parseInt(video.liked) === 0" @click="like()">Like <b-badge variant="light">{{video.likes || 0}}</b-badge></b-button>
      <b-button v-else @click="unlike()">Unlike <b-badge variant="light">{{video.likes || 0}}</b-badge></b-button>
    </div>
  </b-col>
</template>

<script>

export default {
  name: 'video-post',
  props: {
    video: Object,
    type: String
  },
  methods: {
    calcColumn() {
      switch(this.type) {
        case 'full': return 12
        case 'half': return 6
        default: return 12
      }
    },
    like() {
      this.$emit('like')
    },
    unlike() {
      this.$emit('unlike')
    }
  }
}
</script>

<style scoped>
.description {
  text-align: justify;
}
.buttons {
  text-align: right;
}
</style>
