import { createStore } from "vuex";
import { faqCategories } from '@/utils/db.json'

export default createStore({
  state: {
    faqCategories: [],
    questionsCategory: {},
    answer:{}
  },
  mutations: {},
  actions: {
    fetchFaqCategories({commit}){
      const data = faqCategories
    }
  },
});
