<template>
    <button class="scroll" @click="scrollTop" :class="{active: scrollVisible}">
        <img src="@/assets/images/scroll.png" alt="">
    </button>
</template>

<script setup>
import { ref } from "vue"
import { onMounted, onUnmounted} from "vue";

    const scrollTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        })
    }
    
    const scrollVisible = ref(false)
    const checkScroll = () => {
        scrollVisible.value = window.scrollY > 400
    }
    onMounted(() => {
      window.addEventListener('scroll', checkScroll);
    });

    onUnmounted(() => {
      window.removeEventListener('scroll', checkScroll);
    });
</script>
