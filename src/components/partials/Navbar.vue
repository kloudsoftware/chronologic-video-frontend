<template>
  <nav class="flex bg-white">
    <div class="w-1/6 flex">
      <div class="flex-grow"></div>
      <div class="flex-grow"></div>
    </div>
    <div class="block lg:hidden">
      <button
        class="flex items-center px-3 py-2 border rounded text-teal-lighter border-teal-light hover:text-white hover:border-white">
        <svg class="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title>
          <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path>
        </svg>
      </button>
    </div>
    <div class="w-full flex-grow lg:flex lg:items-center lg:w-auto mx-8">
      <div class="lg:flex-grow">
        <router-link to="subscriptions"
                     class="block mt-4 lg:inline-block lg:mt-0 text-black mr-4 font-bold hover:underline no-underline">
          Subscriptions
        </router-link>
      </div>
      <router-link to="settings"
                   class="block mt-4 lg:inline-block lg:mt-0 text-black mr-4 font-bold hover:underline no-underline">
        Settings
      </router-link>
    </div>
  </nav>
</template>

<script>
  import {Component, Vue} from 'vue-property-decorator';

  @Component({
    name: "Navbar"
  })
  export default class Navbar extends Vue {
  }
</script>

<style scoped>

</style>
