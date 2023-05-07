<template>
  <div class="about" align="center">
    <v-img src="@/assets/logo.png" height="400" width="400"></v-img>

    <h1> SPARDHA TODAY </h1>
    <v-row>
      <v-col>
        <router-link to="/Login"><v-btn class="bottomleft" color="indigo" variant="tonal" large >विद्यार्थी</v-btn></router-link>
        <v-btn class="bottomright"  color="indigo" outlined large>शिक्षक</v-btn>
      </v-col>
    </v-row>
  </div>
</template>
<style scoped>
.bottomright {
  position: absolute;
  bottom: 8px;
  right: 16px;
  font-size: 18px;
  
}
.bottomleft {
  position: absolute;
  bottom: 8px;
  left: 16px;
  font-size: 18px;
}
</style>
