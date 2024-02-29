<script setup>
import { RouterView } from "vue-router";
</script>

<template>
  <div class="app">
    <RouterView></RouterView>
  </div>
</template>
<style scoped>
@font-face{
  font-family:"North-well";
  src: url("./assets/Northwell/Northwell-Alt.ttf") format("truetype");
}
.app {
  width:100%;
  padding: 0;
  margin:0;
}
</style>