<template>
  <div id="app">
    <b-navbar toggleable="lg" variant="light">
      <b-navbar-brand href="#">Inchiesta</b-navbar-brand>
      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav v-if="user">
          <router-link v-bind="menuItem('/')">HOME</router-link>
          <router-link v-for="category in categories" :key="category.id" v-bind="menuItem(`/categories/${category.id}`)">{{category.name}}</router-link>
        </b-navbar-nav>
        <b-navbar-nav class="ml-auto">
          <b-nav-item v-if="!user" href="#" v-b-modal.modal-login>Login</b-nav-item>
          <b-nav-item v-if="!user" href="#" v-b-modal.modal-signup>Signup</b-nav-item>
          <b-nav-item-dropdown v-else right>
            <template slot="button-content"><div class="username">@{{user.username}}</div></template>
            <router-link v-if="user.role === 4" class="dropdown-item" to="/publish">Publish</router-link>
            <router-link v-if="user.role === 4" class="dropdown-item" to="/reviewproposals">Review proposals</router-link>
            <router-link class="dropdown-item" to="/myproposals">My proposals</router-link>
            <b-dropdown-item href="#" @click="logout()">Sign Out</b-dropdown-item>
          </b-nav-item-dropdown>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
    <b-modal id="modal-login" title="Login">
      <div slot="modal-footer"/>
      <login />
    </b-modal>
    <b-modal id="modal-signup" title="Sign up">
      <div slot="modal-footer"/>
      <signup />
    </b-modal>
    <router-view></router-view>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import Login from './components/Login'
import Signup from './components/Signup'
export default {
  name: 'app',
  computed: {
    ...mapGetters('auth', {
      user: 'user'
    }),
    ...mapGetters('category', {
      categories: 'categories'
    }),
  },
  mounted() {
    this.$store.dispatch('category/init')
  },
  methods: {
    hero() {
      return require('./assets/hero.jpg')
    },
    logout() {
      this.$store.dispatch('auth/logout')
      this.$router.push('/')
    },
    menuItem(item) {
      return {
        class: {'nav-link': true,  active: this.$route.path === item},
        to: item  
      };
    }
  },
  components: {
    Login,
    Signup
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
  .navbar .nav-item .username {
    font-family: 'Merriweather', serif;
    display: inline-block;
  }
  .btn {
    text-transform: uppercase;
  }
  .nav-link {
    outline: none;
  }
</style>
