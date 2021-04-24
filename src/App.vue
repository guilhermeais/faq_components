<template>
  <div class="app">
    <div class="container">
      <transition>
        <component :is="'faqCategories'" />
      </transition>
    </div>
  </div>
</template>

<script>
import faqCategories from './components/FaqCategories.vue'
export default {
  name: 'App',
  components: {
    faqCategories
  }
}
</script>

<style>
.app {
  display: grid;
  grid-template-columns: 305px;
  grid-template-rows: 29rem;
  justify-content: center;
  align-content: center;
  height: 100vh;
  background-color: #f5f6f8;
}

.container {
  padding: 2rem 0.375rem;
  padding-bottom: 0.875rem;
  background-image: linear-gradient(to bottom, #3f4452, #26282c);
  border-radius: 15px;
  -webkit-box-shadow: 0px 8px 21px 3px rgba(0, 0, 0, 0.19);
  -moz-box-shadow: 0px 8px 21px 3px rgba(0, 0, 0, 0.19);
  box-shadow: 0px 8px 21px 3px rgba(0, 0, 0, 0.19);
  overflow: hidden;
  position: relative;
}
</style>
