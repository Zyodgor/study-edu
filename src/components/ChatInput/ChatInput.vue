<template>
  <form @submit.prevent="sendMessage" class="chat__form container">
    <input 
    placeholder="Хабарлама енгізіңіз..." 
    type="text" 
    class="chat__form-inp" 
    :disabled="loading"
    autofocus
    v-model="userInput"
    @keydown.enter="send"
    >
    <button class="chat__form-btn" :disabled="loading || !userInput.trim()">
        <img src="@/assets/images/send.png" alt="">
    </button>
  </form>
</template>

<script setup>
import { ref } from "vue";
import { useStore } from 'vuex';

const userInput = ref('');
const store = useStore();

const sendMessage = async () => {
  if (!userInput.value.trim()) return;

  await store.dispatch('chat/sendMessage', userInput.value);
  
  userInput.value = '';
};

</script>