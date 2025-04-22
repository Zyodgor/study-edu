<template>
  <section class="examples" id="examples"> 
    <h2 class="examples__title">қолданылуы</h2>
    <p class="examples__subtitle">
      Мұнда әртүрлі салаларда жұмыс істеуді айтарлықтай жеңілдететін ең танымал ЖИ құралдары тізімі берілген.
    </p>
    <div class="container examples__cards" :class="{'active': moreAI}">
      <div class="examples__card">
        <div class="examples__card-img">
          <img src="@/assets/images/edcafe.webp" alt="" />
        </div>
        <a target="_blank" href="https://www.edcafe.ai/" class="examples__card-name">Edcafe AI</a>
        <p class="examples__card-txt">
          Edcafe AI — сабақ дайындауды жеңілдететін мұғалімдерге арналған AI-платформа.
        </p>
        <a href="https://www.youtube.com/watch?v=MJHCdlzvupM" class="examples__card-link">Бейнешолу</a>
      </div>
      <div class="examples__card">
        <div class="examples__card-img">
          <img src="@/assets/images/schoolai.png" alt="" />
        </div>
        <a target="_blank" href="https://schoolai.com/" class="examples__card-name">School AI</a>
        <p class="examples__card-txt">
          School AI — мұғалімдерге оқуды жекелеп, үлгерімді бақылауға көмектесетін ИИ платформасы.
        </p>
        <a href="https://www.youtube.com/watch?v=zKxuXJhNlC8" class="examples__card-link">Бейнешолу</a>
      </div>
      <div class="examples__card">
        <div class="examples__card-img">
          <img src="@/assets/images/fobizz.jpg" alt="" />
        </div>
        <a target="_blank" href="https://fobizz.com/de/" class="examples__card-name">Fobizz</a>
        <p class="examples__card-txt">
          Fobizz — мұғалімдерге арналған цифрлық құралдар мен онлайн курстар платформасы, кәсіби дамуға көмектеседі.
        </p>
        <a href="https://www.youtube.com/watch?v=VWNF0U4c6ok" class="examples__card-link">Бейнешолу</a>
      </div>
      <div class="examples__card">
        <div class="examples__card-img">
          <img src="@/assets/images/presentationsai.png" alt="" />
        </div>
        <a target="_blank" href="https://www.presentations.ai/" class="examples__card-name">Presentations.AI</a>
        <p class="examples__card-txt">
          Presentations.AI — жасанды интеллект арқылы тез әрі оңай презентациялар жасауға арналған платформа.
        </p>
        <a href="https://www.youtube.com/watch?v=XdUa71fpAIY" class="examples__card-link">Бейнешолу</a>
      </div>
      <div class="examples__card">
        <div class="examples__card-img">
          <img src="@/assets/images/gamma.svg" alt="" />
        </div>
        <a target="_blank" href="https://gamma.app/ru" class="examples__card-name">Gamma</a>
        <p class="examples__card-txt">
          Gamma — жасанды интеллект көмегімен презентациялар мен құжаттарды автоматты түрде жасауға арналған платформа.
        </p>
        <a href="https://www.youtube.com/watch?v=u61no4ouIHE" class="examples__card-link">Бейнешолу</a>
      </div>
      <div class="examples__card">
        <div class="examples__card-img">
          <img src="@/assets/images/slidespeak.webp" alt="" />
        </div>
        <a target="_blank" href="https://slidespeak.co/" class="examples__card-name">Slidespeak</a>
        <p class="examples__card-txt">
          SlideSpeak — жасанды интеллект көмегімен мәтіндерден және құжаттардан презентациялар жасауға арналған құрал.
        </p>
        <a href="https://www.youtube.com/watch?v=_qMkMSW7t9c" class="examples__card-link">Бейнешолу</a>
      </div>
      <div class="examples__card">
        <div class="examples__card-img">
          <img src="@/assets/images/canva.png" alt="" />
        </div>
        <a target="_blank" href="https://www.canva.com/" class="examples__card-name">Canva</a>
        <p class="examples__card-txt">
          Canva — графикалық дизайн жасауға арналған онлайн-платформа, түрлі шаблондар мен құралдарды ұсынады.
        </p>
        <a href="https://www.youtube.com/watch?v=FHNt7hdOzsk" class="examples__card-link">Бейнешолу</a>
      </div>
      <div class="examples__card">
        <div class="examples__card-img">
          <img src="@/assets/images/slidesai.webp" alt="" />
        </div>
        <a target="_blank" href="https://www.slidesai.io/ru" class="examples__card-name">Slides AI</a>
        <p class="examples__card-txt">
          SlidesAI — мәтіннен кәсіби презентациялар жасауға арналған жасанды интеллект негізіндегі құрал, Google Slides-пен интеграцияланған.
        </p>
        <a href="" class="examples__card-link">Бейнешолу</a>
      </div>
      <div class="examples__card">
        <div class="examples__card-img">
          <img src="@/assets/images/visme.png" alt="" />
        </div>
        <a target="_blank" href="https://www.visme.co/" class="examples__card-name">Visme</a>
        <p class="examples__card-txt">
          Visme — инфографика, презентациялар және диаграммалар жасауға арналған онлайн-платформа, анимациялар мен шаблондар ұсынады.
        </p>
        <a href="" class="examples__card-link">Бейнешолу</a>
      </div>
      <div class="examples__card">
        <div class="examples__card-img">
          <img src="@/assets/images/pictory.png" alt="" />
        </div>
        <a target="_blank" href="https://pictory.ai/" class="examples__card-name">Pictory</a>
        <p class="examples__card-txt">
          Pictory — мәтіннен, сілтемеден немесе суреттерден бейнемазмұн жасауға арналған жасанды интеллект негізіндегі құрал.
        </p>
        <a href="" class="examples__card-link">Бейнешолу</a>
      </div>
      <div class="examples__card">
        <div class="examples__card-img">
          <img src="@/assets/images/lumen5.gif" alt="" />
        </div>
        <a target="_blank" href="https://lumen5.com/" class="examples__card-name">Lumen5</a>
        <p class="examples__card-txt">
          Lumen5 — мәтіннен бейнемазмұн жасауға арналған жасанды интеллект негізіндегі құрал.
        </p>
        <a href="" class="examples__card-link">Бейнешолу</a>
      </div>
      <div class="examples__card">
        <div class="examples__card-img">
          <img src="@/assets/images/runway.webp" alt="" />
        </div>
        <a target="_blank" href="https://runwayml.com/" class="examples__card-name">Runway</a>
        <p class="examples__card-txt">
          Runway — жасанды интеллект көмегімен мәтіннен, бейнемазмұннан және суреттерден бейнемазмұн жасау құралы.
        </p>
        <a href="" class="examples__card-link">Бейнешолу</a>
      </div>
    </div>
    <div class="examples__cards-more" @click="moreAI = !moreAI">
      <span>{{ moreAI ? 'Жабу' : 'Тағы' }}</span>
      <img src="@/assets/images/down.png" alt="" :class="{'active': moreAI}">
    </div>
  </section>
</template>

<script setup>
import { ref } from "vue";

const moreAI = ref(false)

</script>
