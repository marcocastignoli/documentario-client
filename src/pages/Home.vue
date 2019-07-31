<template>
  <div id="app">
    <b-container>
      <b-row>
        <b-col class="text-center pt-4">
          <h1>Inchiesta</h1>
          <p>Marcum ipsum dolor sit amet, consectetur adipiscing elit. Aenean gravida sagittis porta. Curabitur dapibus tincidunt ipsum, non ultrices enim dapibus sed. In cursus massa erat, at ullamcorper tortor hendrerit vel. Vestibulum eu mattis ex, sed ullamcorper lacus. Pellentesque non orci accumsan, rhoncus risus vel, laoreet eros. Nullam ut augue eget turpis rhoncus dignissim vitae sed sapien. Donec dignissim tellus imperdiet tellus tempor gravida.</p>
        </b-col>
      </b-row>
      <b-row class="pt-3">
      </b-row>
    </b-container>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'app',
  computed: {
    ...mapGetters('auth', {
      user: 'user'
    })
  },
  methods: {

  },
}
</script>

<style>
</style>
