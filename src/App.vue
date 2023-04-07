<template>
  <v-app>
    <nav-bar></nav-bar>
    <v-main>
      <router-view/>
    </v-main>
    <bottom-navbar></bottom-navbar>
  </v-app>

</template>

<script>
import NavBar from './components/NavBar.vue';
import BottomNavbar from './components/BottomNavbar.vue';


export default {
  components: { NavBar, BottomNavbar },

  name: 'App',

  data: () => ({
    //
  }),
};
</script>
<style>
@import url('@/assets/styles.css');
</style>