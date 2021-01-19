<template>
  <div class="container-fluid">
    <h1>
      N
      <img
        id="vue-logo"
        alt="Vue logo"
        src="./assets/logo.png"
      >
      S
      <img
        id="vue-logo"
        alt="Vue logo"
        src="./assets/logo.png"
      >
      -
      <img
        id="vue-logo"
        alt="Vue logo"
        src="./assets/logo.png"
      >POD
    </h1>
    <!-- <HelloWorld msg="Welcome to Your Vue.js App" /> -->

    <date-picker-component />
  </div>
</template>

<script>
import { computed } from 'vue'
import DatePickerComponent from './components/DatePickerComponent.vue'
// import HelloWorld from './components/HelloWorld.vue'
import { AppState } from './AppState'

export default {
  name: 'App',
  setup () {
    return {
      appState: computed(() => AppState)
    }
  },
  components: {
    // HelloWorld,
    DatePickerComponent
  }
}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
#vue-logo {
  transform: rotate(180deg);
  height: 30px;
  width: 30px;
}
</style>
