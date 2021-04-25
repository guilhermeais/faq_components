<template>
  <div class="faq-categories">
    <div class="header">
      <div class="header-image">
        <img src="../assets/images/astronaut.svg" alt="" />
      </div>

      <div class="header-text">
        <h2>Perguntas frequentes</h2>
        <p>Escolha a categoria desejada</p>
      </div>
    </div>

    <ul class="categories">
      <li 
      class="category-item"
      v-for="category in $faqCategories" :key="category.id"
      @click="goToQuestion(category)"
      >
        <img :src="getImage(category)" alt="" />
        <p>{{category.title}}</p>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'FaqCategories',
  data(){
    return{
      
    }
  },
  created(){
    this.$store.dispatch('fetchFaqCategories')
  },
  computed:{
    $faqCategories(){
      return this.$store.getters.$faqCategories
    }
  },
  methods:{
    getImage(item){
      return require(`@/assets/images/${item.icon}`)
    },
    goToQuestion(category){
      this.$store.dispatch('increasePage')
      this.$store.dispatch('changeComponent', 'CategoryQuestions')
      this.$store.dispatch('getQuestionsCategory', category)
    }
  }
}
</script>

<style>
.header-image img {
  width: 242px;
}
.header  .header-image {
  display: grid;
  justify-content: center;
}
.header-text h2,
p {
  color: #f5f6f8;
}
.header-text h2 {
  font-size: 1.25rem;
}
.header-text p {
  font-size: 0.813rem;
  padding-top: 0.288rem;
}
.header  .header-text {
  padding: 1.1rem 1.875rem 2.125rem;
}

.categories {
  list-style: none;
}

.category-item {
  color: #f5f6f8;
  padding: 1rem 1.875rem;
  font-size: 1rem;
  display: grid;
  grid-template-columns: auto 1fr;
  grid-gap: 2.125rem;
  background-color: transparent;
  transition: background-color 200ms ease-in-out;
}
.category-item:hover {
  background-color: #3f4452;
  cursor: pointer;
}
.category-item img {
  width: 1.5rem;
}
</style>
