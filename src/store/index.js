import { createStore } from 'vuex'
import { faqCategories } from '@/utils/db.json'

export default createStore({
  state: {
    faqCategories: [],
    questionsCategory: {},
    answer: {}
  },
  mutations: {
    SET_FAQ_CATEGORIES(state, data) {
      // pegamos o estado faqCategories e depois recebemos um payload, que no caso são as categorias passadas pelo fetchFaqCategories
      state.faqCategories = data
    }
  },
  actions: {
    fetchFaqCategories({ commit }) {
      const data = faqCategories

      commit('SET_FAQ_CATEGORIES', data)
    }
  },
  getters: {
    $faqCategories(state) {
      return state.faqCategories
    }
  }
})
