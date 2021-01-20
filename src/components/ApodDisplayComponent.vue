<template>
  <img
    :src="apod.url"
    alt=""
  >
</template>

<script>
import { computed } from 'vue'
import { AppState } from '../AppState'
export default {
  name: 'ApodDisplayComponent',
  setup () {
    return {
      apod: computed(() => AppState.apod)
    }
  }

}
</script>

<style>

</style>
