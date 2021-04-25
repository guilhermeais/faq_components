<template>
  <div class="app">
    <div class="container">
      <transition 
      mode="out-in"
      :name="transitionType"
      >
        <component :is="$currentComponent"/>
      </transition>
    </div>
  </div>
</template>

<script>
import FaqCategories from './components/FaqCategorie'
import CategoryQuestions from './components/CategoryQuestions'
import Answer from './components/Answer'
import 'animate.css'
export default {
  name: 'App',
  components: {
    FaqCategories,
    CategoryQuestions,
    Answer
  },
  data() {
    return {
      transitionType: 'animate__animated animate__fadeOutRight'
    }
  },
  computed: {
    $currentComponent() {
      return this.$store.getters.$currentComponent
    },
    $page() {
      return this.$store.getters.$page
    }
  },
  watch:{
    $page(newValue, oldValue){
      if (newValue > oldValue) {
        this.transitionType = 'slide-left'
      } else {
        this.transitionType = 'slide-right'
      }
    }
  }
}
</script>

<style>
.app {
  display: grid;
  grid-template-columns: 345px;
  grid-template-rows: 30rem;
  justify-content: center;
  align-content: center;
  height: 100vh;
  background: #f5f6f8;
}

.app .container {
  padding: 2rem 0.375rem;
  padding-bottom: 0.875rem;
  background-image: linear-gradient(to bottom, #3f4452, #26282c);
  border-radius: 15px;
  -webkit-box-shadow: 0 8px 21px 3px rgba(0, 0, 0, 0.19);
  -moz-box-shadow: 0px 8px 21px 3px rgba(0, 0, 0, 0.19);
  box-shadow: 0px 8px 21px 3px rgba(0, 0, 0, 0.19);
  overflow: hidden;
  position: relative;
}

/* Animations */
.slide-left-enter-active,
.slide-left-leave-active,
.slide-right-enter-active,
.slide-right-leave-active {
  transition-duration: 0.3s;
  transition-property: height, opacity, transform;
  transition-timing-function: cubic-bezier(0.55, 0, 0.1, 1);
  overflow: hidden;
}
.slide-left-enter,
.slide-right-leave-active {
  opacity: 0;
  transform: translate(2em, 0);
}
.slide-left-leave-active,
.slide-right-enter {
  opacity: 0;
  transform: translate(-2em, 0);
}
.slide-right-enter-active {
  opacity: 0;
  animation: fade 300ms ease;
}
.slide-left-enter-active {
  opacity: 0;
  animation: fade 300ms ease;
}
@keyframes fade {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
</style>

