import axios from 'axios';

export default {
  namespaced: true,
  state: () => ({
    messages: [
      {
        role: "system",
        content: "Ты — добрый и вдохновляющий помощник. Помогай только в обучении и развитии.",
        timestamp: new Date().toISOString()
      },
    ],
    loading: false,
  }),

  mutations: {
    ADD_MESSAGE(state, message) {
      state.messages.push({
        ...message,
        timestamp: new Date().toISOString()
      });
    },
    setLoading(state, value) {
      state.loading = value;
    },
  },

  actions: {
    async sendMessage({ commit, state }, userInput) {
      commit('ADD_MESSAGE', { role: "user", content: userInput });
      commit('setLoading', true);

      try {
        const messagesForRequest = [
          state.messages[0],
          ...state.messages.slice(-5)
        ];

        const response = await axios.post("https://backend-for-study-edu-production.up.railway.app/api/openai", {
          model: "gpt-4-turbo",
          messages: messagesForRequest,
          max_tokens: 2048,
          temperature: 0.7,
        });

        const reply = response.data.choices[0].message;
        commit('ADD_MESSAGE', reply);
      } catch (err) {
        console.error("Ошибка:", err.response?.data || err.message);
        commit('ADD_MESSAGE', {
          role: "assistant",
          content: "Произошла ошибка. Попробуй позже.",
        });
      } finally {
        commit('setLoading', false);
      }
    },
  },
};
