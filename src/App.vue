<template>
  <div id="app">
    <b-navbar toggleable="lg" variant="light">
      <b-navbar-brand href="#">Inchiesta</b-navbar-brand>
      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav>
          <router-link v-bind="menuItem('/')">HOME</router-link>
          <router-link v-bind="menuItem('/categories/culture')">CULTURE</router-link>
          <b-nav-item href="#">SOCIAL CHANGE</b-nav-item>
          <b-nav-item href="#">TRAVEL STORIES</b-nav-item>
          <b-nav-item href="#">TECHNOLOGY</b-nav-item>
          <b-nav-item href="#">LOCAL STORIES</b-nav-item>
        </b-navbar-nav>
        <b-navbar-nav class="ml-auto">
          <b-nav-item v-if="!user" href="#" @click="login()">Login</b-nav-item>
          <b-nav-item-dropdown v-else right>
            <template slot="button-content">@{{user.username}}</template>
            <b-dropdown-item href="#">Profile</b-dropdown-item>
            <b-dropdown-item href="#" @click="logout()">Sign Out</b-dropdown-item>
          </b-nav-item-dropdown>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
    <router-view></router-view>
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
    hero() {
      return require('./assets/hero.jpg')
    },
    login() {
      this.$store.dispatch('auth/login', { username: 'aneldo' })
    },
    logout() {
      this.$store.dispatch('auth/logout')
    },
    menuItem(item) {
      return {
        class: {'nav-link': true,  active: this.$route.path === item},
        to: item  
      };
    }
  },
}
</script>

<style>
 body {
    font-family: 'Arimo', sans-serif;
 }
  .navbar-brand, h1, .card-img-overlay .card-title, h3 {
    font-family: 'Merriweather', serif;
  }
  .nav-link {
    outline: none;
  }
</style>
