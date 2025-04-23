<template>
  <nav class="nav">
    <div class="container nav__content">
      <a href="" class="nav__content-logo">StudyEdu</a>
      <div class="nav__content-btns">
        <router-link to="/chat-study-edu" class="nav__content-chat-2">
          <img src="@/assets/images/chatgpt.svg" alt="" />
        </router-link>
        <button class="nav__content-menu" @click="burger = true">
          <img src="../../assets/images/menu.png" alt="" />
        </button>
      </div>
      <ul class="nav__content-list" :class="{ active: burger }">
        <button class="nav__content-close" @click="burger = false">
          <img src="../../assets/images/close.png" alt="" />
        </button>
        <li>
          <router-link @click="burger = false" :to="{ hash: '#header' }" class="nav__content-link"
            >Білім берудегі ЖИ туралы</router-link
          >
        </li>
        <li>
          <router-link @click="burger = false" :to="{ hash: '#advantages' }" class="nav__content-link"
            >Мүмкіндіктері
          </router-link>
        </li>
        <li>
          <router-link @click="burger = false" :to="{hash: '#examples'}" class="nav__content-link">қолданылуы</router-link>
        </li>
        <!-- <li><a href="" class="nav__content-link">Исследования</a></li> -->
        <!-- <li><a href="" class="nav__content-link">Байланыс</a></li> -->
        <router-link class="nav__content-chat" to="/chat-study-edu">Чатқа өтіңіз !</router-link >
      </ul>
      <div
        v-show="burger"
        @click="burger = false"
        class="nav__content-overlay"
      />
    </div>
  </nav>
</template>
<script setup>
import { ref } from "vue";

const burger = ref(false);
</script>
