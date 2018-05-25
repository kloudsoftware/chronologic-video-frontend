<template>
  <div id="app">
    <navbar></navbar>
    <router-view/>
  </div>
</template>

<script>

  import { Component, Prop, Vue } from 'vue-property-decorator';

  import Navbar from './components/partials/Navbar.vue';

  @Component({
    components: {
      Navbar
    }
  })

  export default class App extends Vue {
  }
</script>

<style>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }
</style>
