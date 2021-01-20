<template>
  <div class="card">
    <img
      class="card-img-top"
      :src="apod.url"
      alt=""
    >
    <div class="card-body">
      <h4 class="card-title">
        {{ apod.title }}
      </h4>
      <p class="card-text">
        {{ apod.explanation }}
      </p>
    </div>
  </div>
</template>

<script>
import { computed, reactive } from 'vue'
import { AppState } from '../AppState'
export default {
  name: 'ApodDisplayComponent',
  setup () {
    const state = reactive({

    })
    return {
      state,
      apod: computed(() => AppState.apod)
    }
  }

}
</script>

<style>

</style>
