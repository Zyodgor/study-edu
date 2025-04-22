<template>
  <div class="chat">
    <div class="chat__top container">
      <h1 class="chat__title">
        StudyEdu-Чат 📚
      </h1>
      <p class="chat__status">
        {{ isLoading ? "Жазып жатыр..." : "Онлайн" }}
      </p>
      <BackToHomeBtn/>
    </div>
    <div class="chat__screen container" ref="chatAutoScroll">
      <div
        v-for="(msg, index) in messages"
        :key="index"
        :class="['chat__screen-message', msg.role]"
      >
        <p>
          <strong>{{ msg.role === "user" ? "Сіз: " : "ЖИ: " }}</strong>
          <span>{{ msg.content }}</span>
        </p>
        <span class="chat__screen-message-time">{{ formatTime(msg.timestamp) }}</span>
      </div>
    </div>
    <ChatInput />
  </div>
</template>

<script setup>
import ChatInput from "@/components/ChatInput/ChatInput.vue";
import BackToHomeBtn from "@/components/BackToHomeBtn/BackToHomeBtn.vue";

import { computed, ref, watch, onMounted, nextTick } from 'vue';
import { useStore } from 'vuex';

function formatTime(timestamp) {
  const date = new Date(timestamp)
  return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
}

const store = useStore()

const messages = computed(() => store.state.chat.messages)
const isLoading = computed(() => store.state.chat.loading)

const chatAutoScroll = ref(null);

const scrollToBottom = () => {
  nextTick(() => {
    if (chatAutoScroll.value) {
      chatAutoScroll.value.scrollTop = chatAutoScroll.value.scrollHeight;
    }
  })
}

watch(messages, (newVal) => {
  console.log(newVal);
  scrollToBottom();
}, { deep: true })

onMounted(() => {
  scrollToBottom();
})

</script>