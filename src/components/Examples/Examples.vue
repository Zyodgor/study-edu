<template>
  <section class="examples" id="examples">
    <h2 class="examples__title">қолданылуы</h2>
    <p class="examples__subtitle">
      Мұнда әртүрлі салаларда жұмыс істеуді айтарлықтай жеңілдететін ең танымал
      ЖИ құралдары тізімі берілген.
    </p>
    <div class="container examples__cards" :class="{ active: moreAI }">
      <div class="examples__card" v-for="(card, i) in cards" :key="i">
        <div class="examples__card-img">
          <img :src="card.img" alt="" />
        </div>
        <a target="_blank" :href="card.url" class="examples__card-name">{{
          card.name
        }}</a>
        <p class="examples__card-txt">
          {{ card.description }}
        </p>
        <button
          class="examples__card-link"
          @click.prevent="openModal(card.video)"
        >
          Бейнешолу
        </button>
      </div>
    </div>
    <ExampleModal
      :video-url="modalVideoUrl"
      :is-open="isModalOpen"
      @close="closeModal"
    />
    <div class="examples__cards-more" @click="moreAI = !moreAI">
      <span>{{ moreAI ? "Жабу" : "Тағы" }}</span>
      <img src="@/assets/images/down.png" alt="" :class="{ active: moreAI }" />
    </div>
    <a href="https://studyedu.kz/" target="_blank" class="examples__link"
      >ЖИ көмегімен жасалған сабаққа арналған сайт</a
    >
  </section>
</template>

<script setup>
import ExampleModal from "@/components/ExampleModal/ExampleModal.vue";
import edcafeImg from "@/assets/images/edcafe.webp";
import schoolaiImg from "@/assets/images/schoolai.png";
import fobizzImg from "@/assets/images/fobizz.jpg";
import presentationsaiImg from "@/assets/images/presentationsai.png";
import gammaImg from "@/assets/images/gamma.svg";
import slidespeakImg from "@/assets/images/slidespeak.webp";
import canvaImg from "@/assets/images/canva.png";
import slidesaiImg from "@/assets/images/slidesai.webp";
import vismeImg from "@/assets/images/visme.png";
import pictoryImg from "@/assets/images/pictory.png";
import lumen5Img from "@/assets/images/lumen5.gif";
import runwayImg from "@/assets/images/runway.webp";

import { ref } from "vue";

const moreAI = ref(false);
const modalVideoUrl = ref("");
const isModalOpen = ref(false);

function openModal(url) {
  modalVideoUrl.value = url;
  isModalOpen.value = true;
}

function closeModal() {
  isModalOpen.value = false;
  modalVideoUrl.value = "";
}

const cards = [
  {
    img: edcafeImg,
    url: "https://www.edcafe.ai/",
    name: "Edcafe AI",
    description:
      "Edcafe AI — сабақ дайындауды жеңілдететін мұғалімдерге арналған AI-платформа.",
    video: "https://www.youtube.com/embed/MJHCdlzvupM",
  },
  {
    img: schoolaiImg,
    url: "https://schoolai.com/",
    name: "School AI",
    description:
      "School AI — мұғалімдерге оқуды жекелеп, үлгерімді бақылауға көмектесетін ИИ платформасы.",
    video: "https://www.youtube.com/embed/zKxuXJhNlC8",
  },
  {
    img: fobizzImg,
    url: "https://fobizz.com/de/",
    name: "Fobizz",
    description:
      "Fobizz — мұғалімдерге арналған цифрлық құралдар мен онлайн курстар платформасы, кәсіби дамуға көмектеседі.",
    video: "https://www.youtube.com/embed/VWNF0U4c6ok",
  },
  {
    img: presentationsaiImg,
    url: "https://www.presentations.ai/",
    name: "Presentations.AI",
    description:
      "Presentations.AI — жасанды интеллект арқылы тез әрі оңай презентациялар жасауға арналған платформа.",
    video: "https://www.youtube.com/embed/XdUa71fpAIY",
  },
  {
    img: gammaImg,
    url: "https://gamma.app/ru",
    name: "Gamma",
    description:
      "Gamma — жасанды интеллект көмегімен презентациялар мен құжаттарды автоматты түрде жасауға арналған платформа.",
    video: "https://www.youtube.com/embed/u61no4ouIHE",
  },
  {
    img: slidespeakImg,
    url: "https://slidespeak.co/",
    name: "Slidespeak",
    description:
      "SlideSpeak — жасанды интеллект көмегімен мәтіндерден және құжаттардан презентациялар жасауға арналған құрал.",
    video: "https://www.youtube.com/embed/_qMkMSW7t9c",
  },
  {
    img: canvaImg,
    url: "https://www.canva.com/",
    name: "Canva",
    description:
      "Canva — графикалық дизайн жасауға арналған онлайн-платформа, түрлі шаблондар мен құралдарды ұсынады.",
    video: "https://www.youtube.com/embed/FHNt7hdOzsk",
  },
  {
    img: slidesaiImg,
    url: "https://www.slidesai.io/ru",
    name: "Slides AI",
    description:
      "SlidesAI — мәтіннен кәсіби презентациялар жасауға арналған жасанды интеллект негізіндегі құрал, Google Slides-пен интеграцияланған.",
    video: "https://www.youtube.com/embed/nsxiRCpRoLo?si=hypzkgDd-gvoM3YC",
  },
  {
    img: vismeImg,
    url: "https://www.visme.co/",
    name: "Visme",
    description:
      "Visme — инфографика, презентациялар және диаграммалар жасауға арналған онлайн-платформа, анимациялар мен шаблондар ұсынады.",
    video: "https://www.youtube.com/embed/_4KayilZCVU?si=lc0jYuJP5M3clxbF",
  },
  {
    img: pictoryImg,
    url: "https://pictory.ai/",
    name: "Pictory",
    description:
      "Pictory — мәтіннен, сілтемеден немесе суреттерден бейнемазмұн жасауға арналған жасанды интеллект негізіндегі құрал.",
    video: "https://www.youtube.com/embed/hND1-WFZZWE?si=05YUYDeyOpOHYdGR",
  },
  {
    img: lumen5Img,
    url: "https://lumen5.com/",
    name: "Lumen5",
    description:
      "Lumen5 — мәтіннен бейнемазмұн жасауға арналған жасанды интеллект негізіндегі құрал.",
    video: "https://www.youtube.com/embed/QTKJq2q2eXM?si=Zq4o5hUzwzDEFk_W",
  },
  {
    img: runwayImg,
    url: "https://runwayml.com/",
    name: "Runway",
    description:
      "Runway — жасанды интеллект көмегімен мәтіннен, бейнемазмұннан және суреттерден бейнемазмұн жасау құралы.",
    video: "https://www.youtube.com/embed/c60q6DfY2HQ?si=EYXIcH5u6zJsNJBr",
  },
];
</script>
