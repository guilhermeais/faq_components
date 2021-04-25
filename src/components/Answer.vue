<template>
  <div class="answer">
    <div class="header">
      <div @click="goBack()" class="btn-arrow">
        <div class="arrow"></div>
      </div>

      <div class="header-text">
        <p>{{ $answerQuestion.title }}</p>
      </div>
    </div>
    <p v-html="$answerQuestion.content" class="content"></p>
  </div>
</template>

<script>
export default {
  name: 'Answer',
  computed: {
    $answerQuestion() {
      return this.$store.getters.$answerQuestion
    }
  },
  methods:{
    goBack(){
      this.$store.dispatch('decreasePage')
      this.$store.dispatch('changeComponent', 'CategoryQuestions')
    },
  }
}
</script>

<style scoped>
.header {
  padding: 0 1.25rem 1.875rem 1.25rem;
  display: grid;
  grid-template-columns: auto 1fr;
  grid-gap: 1rem;
  align-items: center;
}
.header-text p {
  color: #f5f6f8;
  font-size: 1rem;
}

.btn-arrow {
  padding: 0.875rem 0.75rem;
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
.content {
  font-size: 0.9rem;
  color: #f5f6f8;
  padding: 0 1.25rem 1.875rem 1.25rem;
  line-height: 1.25rem;
}
</style>
