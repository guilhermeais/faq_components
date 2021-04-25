<template>
  <div class="questions">
    <div class="header">
      <div @click="goBack()" class="btn-arrow">
        <div class="arrow"></div>
      </div>

      <div class="header-text">
        <h2>{{ $questionsCategory.title }}</h2>
        <p>Selecione uma pergunta</p>
      </div>
      <img :src="getImage($questionsCategory)" alt="" />
    </div>

    <ul class="questions-list">
      <li
        class="questions-item"
        v-for="questions in $questionsCategory.questions"
        :key="questions.id"
        @click="goToAnswer(questions)"
      >
        {{ questions.title }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'CategoryQuestions',
  computed: {
    $questionsCategory() {
      console.log(this.$store.getters.$questionsCategory)
      return this.$store.getters.$questionsCategory
    }
  },
  methods: {
    getImage(item) {
      return require(`@/assets/images/${item.icon}`)
    },
    goBack(){
      this.$store.dispatch('decreasePage')
      this.$store.dispatch('changeComponent', 'FaqCategories')
    },
    goToAnswer(question){
      this.$store.dispatch('increasePage')
      this.$store.dispatch('changeComponent', 'Answer')
      this.$store.dispatch('getAnswerQuestion', question)
    }
  }
}
</script>

<style scoped>
.header {
  padding: 0 1.25rem 0 1.25rem;
  margin-top: -20px;
  display: grid;
  grid-template-columns: auto 1fr auto;
  grid-gap: 1rem;
  align-items: center;
  border-bottom: 1px solid #404451;
}
.header-text h2 {
  color: #f5f6f8;
}
.header .header-text h2 {
  font-size: 1.25rem;
}
.header-text p {
  font-size: 0.813rem;
  padding-top: 0.288rem;
}
.header img {
  width: 1.5rem;
}
.btn-arrow {
  padding: 0.875rem 0.50rem;
  cursor: pointer;
  background-color: transparent;
  border-radius: 8px;
  transition: background-color 200ms ease-in-out;
}
.btn-arrow:hover {
  background: #26282c;
  border-radius: 8px;
}
.arrow {
  width: 22px;
  height: 3px;
  background: #f5f6f8;
  border-radius: 1.25rem;
  position: relative;
}
.arrow::before,
.arrow::after {
  content: '';
  content: '';
  background: #f5f6f8;
  position: absolute;
  width: 13px;
  height: 3px;
}
.arrow::before {
  top: -4px;
  left: -3px;
  border-radius: 20px;
  transform: rotate(-51deg);
}
.arrow::after {
  transform: rotate(51deg);
  bottom: -4px;
  left: -3px;
  border-radius: 20px;
}
.questions-list {
  list-style: none;
  padding-top: 0.813rem;
}

.questions-item {
  padding: 1rem 1.25rem;
  color: #f5f6f8;
  font-size: 1rem;
  background-color: transparent;
  
}
.questions-item:hover {
  background-color: #3f4452;
  cursor: pointer;
}
</style>
