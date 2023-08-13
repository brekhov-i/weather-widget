<template>
  <div class="city" @click="selectActiveCity()">
    <div class="city__info">
      <div class="city__name">{{ cityData.localName }}</div>
      <div class="city__gradus">
        {{ Math.round(weather?.tempMin ? weather?.tempMin : 0) }}°/{{
          Math.round(weather?.tempMax ? weather?.tempMax : 0)
        }}°
      </div>
    </div>
    <div class="city__iconWeather">
      <img
        :src="
          require(`@/shared/assets/icons/${weather?.icon.toLocaleLowerCase()}.svg`)
        "
        alt=""
        v-if="weather?.icon"
      />
      <div class="text">{{ weather?.textDesc ? weather.textDesc : "" }}</div>
    </div>
    <button class="city__delete" @click.stop="deleteCity()">
      <svg
        width="80"
        height="80"
        viewBox="0 0 80 80"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M40 40L26.8007 53.1993M53.1993 53.1993L40 40L53.1993 53.1993ZM40 40L26.8007 26.8007L40 40ZM40 40L53.1993 26.8007L40 40Z"
          stroke="black"
          stroke-width="2"
          stroke-linecap="round"
        />
      </svg>
    </button>
  </div>
</template>

<script setup lang="ts">
import { ICity } from "@/app/types/city";
import useGetWeather from "@/features/hooks/getWeather";
import { onMounted } from "vue";

const props = defineProps<{
  cityData: ICity;
}>();
const emits = defineEmits<{
  (e: "selectActiveCity", value: ICity): void;
  (e: "deleteCity", value: ICity): void;
}>();
const { weather, getWeather } = useGetWeather();

const selectActiveCity = () => {
  emits("selectActiveCity", props.cityData);
};
const deleteCity = () => {
  emits("deleteCity", props.cityData);
};

onMounted(async () => {
  await getWeather({ lat: props.cityData.lat, lon: props.cityData.lon });
});
</script>

<style scoped lang="scss">
.city {
  position: relative;
  width: 100%;
  height: auto;
  background-color: #ffffff;
  padding: 19px 16px;
  border-radius: 16px;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  &__info {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
  }
  &__name {
    margin-bottom: 4px;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 120%;
  }
  &__gradus {
    color: #545b70;
    font-size: 12px;
    font-style: normal;
    font-weight: 400;
  }
  &__iconWeather {
    width: 60px;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    margin-left: auto;
    margin-right: 15px;
    img {
      width: 40px;
      margin-top: -10px;
    }
    .text {
      color: #545b70;
      font-size: 12px;
      font-style: normal;
      font-weight: 400;
      max-width: 100px;
      text-align: center;
    }
  }
  &__delete {
    width: 40px;
    height: 40px;
    background-color: transparent;
    border: none;
    display: flex;
    justify-content: center;
    align-items: center;
    svg {
      width: 100%;
      height: 100%;
    }
  }
}
</style>
