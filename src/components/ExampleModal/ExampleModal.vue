<template>
  <transition name="fade">
    <div v-if="isOpen" class="modal-overlay" @click.self="$emit('close')">
      <div class="modal-content">
        <button class="modal-close" @click="$emit('close')">×</button>
        <iframe
          width="760"
          height="315"
          :src="videoUrlWithAutoplay"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
      </div>
    </div>
  </transition>
</template>
  
  <script setup>
import { computed, watch } from "vue";
import { ref } from "vue";

const props = defineProps({
  videoUrl: {
    type: String,
    required: true,
  },
  isOpen: {
    type: Boolean,
    required: true,
  },
});

const emit = defineEmits(["close"]);

const videoUrlWithAutoplay = computed(() => {
  if (!props.isOpen || !props.videoUrl) return "";
  // Добавляем ?autoplay=1 для автоматического запуска видео
  return props.videoUrl.includes("?")
    ? `${props.videoUrl}&autoplay=1`
    : `${props.videoUrl}?autoplay=1`;
});
</script>