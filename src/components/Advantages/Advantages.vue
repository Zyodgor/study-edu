<template>
  <section class="advantages" id="advantages">
    <h2 class="advantages__title">AI пайдаланудың Мүмкіндіктері</h2>
    <div class="container advantages__items">
      <div class="advantages__item">
        <h3 class="advantages__item-title">Әрбір оқушыға жекелей көзқарас</h3>
        <p class="advantages__item-txt">
          ЖИ-жүйелер әрбір студенттің білім деңгейіне, оқу қарқынына және
          ақпаратты қабылдау стиліне бейімделе алады. Бұл әсіресе әртүрлі
          қабілеттері, тілдік кедергілері немесе даму ерекшеліктері бар оқушылар
          үшін өте пайдалы.
        </p>
      </div>
      <div class="advantages__item">
        <h3 class="advantages__item-title">Мұғалімдердің уақытын үнемдеу</h3>
        <p class="advantages__item-txt">
          Бағалау жүйелерін автоматтандыру, көмекші чат-боттар мен жоспарлау
          құралдары мұғалімдерге күнделікті жұмыстарға аз уақыт жұмсап,
          оқушылармен тікелей қарым-қатынасқа көбірек көңіл бөлуге мүмкіндік
          береді.
        </p>
      </div>
      <div class="advantages__item">
        <h3 class="advantages__item-title">
          Аналитика және оқу үлгерімін бақылау
        </h3>
        <p class="advantages__item-txt">
          ЖИ оқушылардың мінез-құлқын талдай алады: тест тапсыру уақыты, қателер
          жиілігі, тақырыптарды меңгеру қарқыны. Осы деректердің негізінде
          мұғалімдерге курсты дер кезінде түзетуге көмектесетін есептер
          құрастырылады.
        </p>
      </div>
      <div class="advantages__item">
        <h3 class="advantages__item-title">
          ЖИ-ассистенттер арқылы тәулік бойы қолдау көрсету
        </h3>
        <p class="advantages__item-txt">
          Чат-боттар мен виртуалды көмекшілер студенттердің сұрақтарына 24/7
          жауап береді, материалды түсіндіреді, үй тапсырмасын орындауға
          көмектеседі — тіпті мұғалім жақын жерде болмаған кезде де.
        </p>
      </div>
      <div class="advantages__item">
        <h3 class="advantages__item-title">Интерактивтілік және қатысу</h3>
        <p class="advantages__item-txt">
          ЖИ геймификацияланған платформаларда қолданылады, мұнда оқу ойын
          форматында өтеді. Бұл оқушылардың қызығушылығын арттырып, оларды
          тұрақты түрде оқу процесіне ынталандырады.
        </p>
      </div>
    </div>
    <div class="advantages__bottom">
      <LinkToChatBtn/>
    </div>
  </section>
</template>
<script setup>
import LinkToChatBtn from "@/components/LinkToChatBtn/LinkToChatBtn.vue";
</script>
