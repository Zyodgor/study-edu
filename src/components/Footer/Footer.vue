<template>
  <footer class="footer">
    <div class="container footer__content">
        <router-link :to="{hash: '#header'}" class="footer__logo">StudyEdu</router-link>
        <div class="footer__contacts">
            <ul class="footer__list">
                <li><router-link :to="{}" class="footer__link">Білім берудегі ЖИ туралы</router-link></li>
                <li><router-link :to="{}" class="footer__link">Мүмкіндіктері</router-link></li>
                <li><router-link :to="{}" class="footer__link">Қолданылуы</router-link></li>
                <li><router-link :to="{}" class="footer__link">Байланыс</router-link></li>
            </ul>
        </div>
        <!-- <LinkToChatBtn/> -->
    </div>
    <!-- <div class="footer__icons">
        <img src="@/assets/images/instagram.svg" alt="">
        <img src="@/assets/images/telegram.svg" alt="">
    </div> -->
    <p class="footer__rights">
        Жоба авторы: Абдуашимова Перизат Махмудқизи (ЕҰУ, 2025 жыл)
    </p>
  </footer>
</template>

<script setup>
import LinkToChatBtn from '@/components/LinkToChatBtn/LinkToChatBtn.vue'
</script>