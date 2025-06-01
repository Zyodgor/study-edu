<template>
  <div class="chat">
    <div class="chat__top container">
      <h1 class="chat__title">StudyEdu-Чат 📚</h1>
      <p class="chat__status">
        {{ isLoading ? "Жазып жатыр..." : "Онлайн" }}
      </p>
      <BackToHomeBtn />
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
        <span class="chat__screen-message-time">{{
          formatTime(msg.timestamp)
        }}</span>
      </div>
    </div>
    <div class="chat__quick-commands">
      <button
        v-for="(cmd, i) in quickCommands"
        :key="i"
        @click="sendQuickMessage(cmd.message)"
        class="chat__quick-btn"
      >
        {{ cmd.label }}
      </button>
    </div>
    <ChatInput />
  </div>
</template>

<script setup>
import ChatInput from "@/components/ChatInput/ChatInput.vue";
import BackToHomeBtn from "@/components/BackToHomeBtn/BackToHomeBtn.vue";

import { computed, ref, watch, onMounted, nextTick } from "vue";
import { useStore } from "vuex";

function formatTime(timestamp) {
  const date = new Date(timestamp);
  return date.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
}

const store = useStore();

const messages = computed(() => store.state.chat.messages);
const isLoading = computed(() => store.state.chat.loading);
const chatAutoScroll = ref(null);

const quickCommands = [
  {
    label: "📋 Сабақ жоспарын құрастыру",
    message:
      "Осы тақырыпқа арналған толық сабақ жоспарын жасаңыз. Жоспарға сабақтың мақсаттары, қолданылатын әдістер мен құралдар, сабақтың кезеңдері (кіріспе, негізгі бөлім, қорытынды) және әр кезеңге арналған нақты тапсырмалар енгізіңіз.",
  },
  {
    label: "🧪 Тест құрастыру",
    message:
      "оқушыларға арналған 10 сұрақтан тұратын тест құрастыр. Әр сұраққа 4 жауап нұсқасын бер, оның ішінде бір дұрыс жауапты белгіле. Сұрақтар оқушының негізгі түсінігін тексеруге бағытталған болсын.",
  },
  {
    label: "📝 Конспект жасау",
    message:
      "қысқаша әрі түсінікті конспект жаса. Онда сабақтың негізгі мазмұны, маңызды ұғымдар мен түсініктер, негізгі қағидалар және оқушыларға түсіндіру үшін қысқаша түсініктеме болсын.",
  },
  {
    label: "👨‍🏫 Дидактикалық материалдар",
    message:
      "қолдануға ыңғайлы дидактикалық материалдар жаса. Оған түрлі тапсырмалар, жаттығулар, практикалық жұмыстар, және оқушылардың білімін бекітуге арналған көрнекі құралдар кірсін.",
  },
  {
    label: "✨ Сабақ идеялары",
    message:
      "интерактивті, қызықты және тиімді сабақ өткізуге арналған бірнеше идея ұсыныңыз. Оған ойындар, топтық жұмыстар, шығармашылық тапсырмалар, технологияны пайдалану тәсілдері және оқушылардың белсенділігін арттыратын әдістер кірсін.",
  },
];

const sendQuickMessage = (text) => {
  store.dispatch("chat/sendMessage", text);
};

const scrollToBottom = () => {
  nextTick(() => {
    if (chatAutoScroll.value) {
      chatAutoScroll.value.scrollTop = chatAutoScroll.value.scrollHeight;
    }
  });
};

watch(
  messages,
  (newVal) => {
    console.log(newVal);
    scrollToBottom();
  },
  { deep: true }
);

onMounted(() => {
  scrollToBottom();
});
</script>