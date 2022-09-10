<template>
  <main class="home">
    <h1>Weather App</h1>
    <section class="enter-city">
      <input
        v-model="data.city"
        @keyup.enter="getWeather"
        placeholder="Enter a city"
        type="text"
      />
    </section>
    <section v-if="data.weather" class="weather">
      <h1>{{ Math.round(data.weather.main.temp) }}&deg;</h1>
      <h2>{{ data.weather.weather[0].main }}</h2>
      <h3>{{ data.weather.weather[0].description }}</h3>
    </section>
  </main>
</template>

<script setup>
import { reactive } from "vue";
import axios from "axios";

let data = reactive({
  city: "",
  weather: null,
});

const apiUrl = "http://localhost:3000/";

const getWeather = () => {
  axios(`${apiUrl}?units=metric&q=${data.city}`).then((response) => {
    data.weather = response.data;
  });
};
</script>

<style scoped>
.home {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-width: 500px;
  width: 100%;
  margin: 0 auto;
}

.enter-city input {
  font-size: 40px;
}

.weather {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 10px;
}

.weather h1 {
  font-size: 80px;
}

.weather h1,
h2,
h3 {
  margin: 0;
}
</style>
