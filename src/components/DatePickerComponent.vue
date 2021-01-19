<template>
  <div class="datePickerComponent">
    <form @submit.prevent="getApod()">
      <div class="form-group">
        <input
          type="text"
          class="form-control"
          name="date"
          id="date"
          aria-describedby="helpId"
          placeholder="YYYY-MM-DD"
          v-model="state.query"
        ><br>
        <small
          id="helpId"
          class="form-text text-muted"
        >Input the date for the Astronomy Picture of the Day you would like to view using the YYYY-MM-DD format</small>
      </div>
    </form>
  </div>
</template>

<script>
import { reactive } from 'vue'
import { nasaService } from '../services/NasaService'
export default {
  name: 'DatePickerComponent',
  setup () {
    const state = reactive({
      query: ''
    })
    return {
      state,
      getApod () {
        nasaService.getApod(state.query)
      }
    }
  }
}

</script>

<style>

</style>
