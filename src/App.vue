<template>
  <v-app>
    <nav-bar></nav-bar>
    <v-main>
      <router-view/>
    </v-main>
  </v-app>

</template>

<script>
import NavBar from './components/NavBar.vue';



export default {
  components: { NavBar},

  name: 'App',

  data: () => ({
    //
  }),
};
</script>
<style>
@import url('@/assets/styles.css');
</style>