import axios from 'axios';

export default {
  namespaced: true,
  state: () => ({
    messages: [
      {
        role: "system",
        content: "Ты — добрый и вдохновляющий помощник. Помогай только в обучении и развитии.",
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
    }
  },

  actions: {
    async sendMessage({ commit, state }, userInput) {
      commit('ADD_MESSAGE', { role: "user", content: userInput });
      commit('setLoading', true);
    
      try {
        const response = await axios.post("/api/openai", {
          model: "gpt-4-turbo",
          messages: state.messages,
          max_tokens: 1000,
          temperature: 0.7
        });
    
        const reply = response.data.choices[0].message;
        commit('ADD_MESSAGE', reply);
      } catch (err) {
        console.error("Ошибка:", err);
        commit('ADD_MESSAGE', {
          role: "assistant",
          content: "Произошла ошибка. Попробуй позже.",
        });
      } finally {
        commit('setLoading', false);
      }
    }
    
  },
};
