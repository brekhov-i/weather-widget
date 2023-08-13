<template>
  <nav-app class="weatherApp__nav" :city="weather?.city" />
  <main-screen
    class="weatherApp__mainScreen"
    :loading="loadingWeather"
    :temp="weather ? weather.temp : null"
    :textDesc="weather ? weather.textDesc : null"
    :icon="weather ? weather.icon : null"
  />
  <information-app class="weatherApp__information" :infoData="weather" />
</template>

<script setup lang="ts">
import NavApp from "@/widgets/navApp.vue";
import MainScreen from "@/widgets/mainScreen.vue";
import InformationApp from "@/widgets/informationApp.vue";
import { onMounted } from "vue";
import useGetGeoUser from "@/features/hooks/getGeoUser";
import useGetWeather from "@/features/hooks/getWeather";
import { ICity } from "@/app/types/city";
import { TCoordinates } from "@/app/types/location";

const { getGeoUser } = useGetGeoUser();
const { weather, getWeather, loadingWeather } = useGetWeather();

onMounted(async () => {
  const activeCityJSON = localStorage.getItem("activeCity");
  if (activeCityJSON) {
    const activeCity: ICity = JSON.parse(activeCityJSON);
    await getWeather({
      lat: activeCity.lat,
      lon: activeCity.lon,
    });
  } else {
    const location: TCoordinates = await getGeoUser();
    await getWeather({
      lat: location.lat,
      lon: location.lon,
    });
  }
});
</script>

<style scoped lang="scss"></style>
