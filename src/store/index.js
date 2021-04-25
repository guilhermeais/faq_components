import { createStore } from 'vuex'
import { faqCategories } from '@/utils/db.json'

export default createStore({
  state: {
    faqCategories: [],
    questionsCategory: {},
    answerQuestion: {},
    currentComponent: 'FaqCategories',
    page: 1
  },
  mutations: {
    SET_FAQ_CATEGORIES(state, data) {
      // pegamos o estado faqCategories e depois recebemos um payload, que no caso são as categorias passadas pelo fetchFaqCategories
      state.faqCategories = data
    },
    INCREASE_PAGE(state) {
      state.page++
    },
    DECREASE_PAGE(state) {
      state.page--
    },
    SET_NEW_COMPONENT(state, payload) {
      state.currentComponent = payload
    },
    SET_QUESTIONS_CATEGORY(state, payload) {
      state.questionsCategory = payload
    },
    SET_ANSWER_QUESTION(state, payload) {
      state.answerQuestion = payload
    }
  },
  actions: {
    fetchFaqCategories({ commit }) {
      const data = faqCategories

      commit('SET_FAQ_CATEGORIES', data)
    },
    increasePage({ commit }) {
      commit('INCREASE_PAGE')
    },
    decreasePage({ commit }) {
      commit('DECREASE_PAGE')
    },
    changeComponent({ commit }, payload) {
      console.log(payload)
      commit('SET_NEW_COMPONENT', payload)
    },
    getQuestionsCategory({ commit }, payload) {
      commit('SET_QUESTIONS_CATEGORY', payload)
    },
    getAnswerQuestion({ commit }, payload) {
      commit('SET_ANSWER_QUESTION', payload)
    }
  },
  getters: {
    $faqCategories(state) {
      return state.faqCategories
    },
    $page(state) {
      return state.page
    },
    $currentComponent(state) {
      return state.currentComponent
    },
    $questionsCategory(state) {
      return state.questionsCategory
    },
    $answerQuestion(state) {
      return state.answerQuestion
    }
  }
})
