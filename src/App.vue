<template>
  <div class="wrapper">
    <Router-view/>
    <video muted autoplay loop class="header__bg" src="@/assets/videos/preview.mp4"></video>
  </div>
</template>
<script setup>
import { RouterView } from "vue-router";

</script>
