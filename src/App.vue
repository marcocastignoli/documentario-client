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
          <b-nav-item v-if="!user" href="#" v-b-modal.modal-login>Login</b-nav-item>
          <b-nav-item-dropdown v-else right>
            <template slot="button-content">@{{user.username}}</template>
            <b-dropdown-item href="#">Profile</b-dropdown-item>
            <b-dropdown-item href="#" @click="logout()">Sign Out</b-dropdown-item>
          </b-nav-item-dropdown>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
    <b-modal id="modal-login" title="Login">
      <div slot="modal-footer"/>
      <login />
    </b-modal>
    <router-view></router-view>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import Login from './components/Login'
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
  components: {
    Login
  }
}
</script>

<style>
  body {
      font-family: 'Merriweather', serif;
  }
  .navbar .nav-item, .form-text.text-muted, .btn {
    font-family: 'Arimo', sans-serif;
  }
  .btn {
    text-transform: uppercase;
  }
  .nav-link {
    outline: none;
  }
</style>
