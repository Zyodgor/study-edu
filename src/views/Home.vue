<template>
  <Navbar/>
  <Header/>
  <main class="main">
    <Advantages/>
    <Examples/>
    <Science/>
  </main>
  <Footer/>
</template>

<script setup>
import Navbar from "@/components/Navbar/Navbar.vue";
import Header from "@/components/Header/Header.vue";
import Advantages from "@/components/Advantages/Advantages.vue";
import Examples from "@/components/Examples/Examples.vue";
import Science from "@/components/Science/Science.vue";
import Footer from "@/components/Footer/Footer.vue";

</script>
