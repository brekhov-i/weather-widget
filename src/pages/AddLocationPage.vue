<template>
  <div class="addLocationPage">
    <nav-page class="addLocationPage__nav" />
    <search-city
      @select-city="selectCity($event)"
      class="addLocationPage__searchBlock"
    />
    <div class="addLocationPage__listCity">
      <city-item
        v-for="city in getSortedArr()"
        :key="city.name"
        :cityData="city"
        @selectActiveCity="selectActiveCity($event)"
        @deleteCity="deleteCity($event)"
        draggable="true"
        @dragstart="dragStartHandler($event, city)"
        @dragleave="dragEndHandler($event)"
        @dragend="dragEndHandler($event)"
        @dragover.prevent="dragOverHandler($event)"
        @drop.prevent="DropHandler($event, city)"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import navPage from "@/widgets/navPage.vue";
import SearchCity from "@/entities/searchCity.vue";
import cityItem from "@/entities/cityItem.vue";
import { onMounted, ref } from "vue";
import { ICity } from "@/app/types/city";
import { useRouter } from "vue-router";

type ICityDrop = ICity & { order: number };

const router = useRouter();

const selectedCity = ref<ICityDrop[]>([]);
const currentCity = ref<ICityDrop>({
  name: "",
  localName: "",
  lat: 0,
  lon: 0,
  order: 0,
  state: "",
});

const selectCity = (city: ICity): void => {
  const cityData: ICityDrop = { ...city, order: selectedCity.value.length };
  selectedCity.value = [...selectedCity.value, cityData];
  localStorage.setItem("selectedCity", JSON.stringify(selectedCity.value));
};

const selectActiveCity = (city: ICity): void => {
  localStorage.setItem("activeCity", JSON.stringify(city));

  router.push("/");
};

const deleteCity = (city: ICity): void => {
  const index: number | undefined = selectedCity.value.findIndex(
    (el) => el.name === city.name
  );
  selectedCity.value.splice(index, 1);
  const activeCity: ICity = localStorage.getItem("activeCity")
    ? JSON.parse(localStorage.getItem("activeCity") as string)
    : "";
  if (selectedCity.value.length !== 0) {
    if (activeCity.name === city.name) {
      if (index !== 0) {
        localStorage.setItem(
          "activeCity",
          JSON.stringify(selectedCity.value[index - 1])
        );
      } else {
        localStorage.setItem(
          "activeCity",
          JSON.stringify(selectedCity.value[index])
        );
      }
    }
  } else {
    localStorage.removeItem("activeCity");
  }
  localStorage.setItem("selectedCity", JSON.stringify(selectedCity.value));
};

const dragStartHandler = (e: DragEvent, city: ICityDrop) => {
  if (e.target && e.target instanceof HTMLElement)
    e.target.style.background = "lightgrey";
  currentCity.value = city;
};
const dragEndHandler = (e: DragEvent) => {
  if (e.target && e.target instanceof HTMLElement)
    e.target.style.background = "white";
};
const dragOverHandler = (e: DragEvent) => {
  if (e.target && e.target instanceof HTMLElement)
    e.target.style.background = "lightgrey";
};
const DropHandler = (e: DragEvent, city: ICityDrop) => {
  if (e.target && e.target instanceof HTMLElement)
    e.target.style.background = "white";
  selectedCity.value = selectedCity.value.map((c: ICityDrop) => {
    if (c.name === city.name) {
      return { ...c, order: currentCity.value.order };
    }
    if (c.name === currentCity.value.name) {
      return { ...c, order: city.order };
    }
    return c;
  });
  localStorage.setItem("selectedCity", JSON.stringify(selectedCity.value));
};

const getSortedArr = (): ICityDrop[] => {
  return selectedCity.value.sort((a: ICityDrop, b: ICityDrop) => {
    if (a.order > b.order) {
      return 1;
    } else {
      return -1;
    }
  });
};

onMounted(() => {
  selectedCity.value = localStorage.getItem("selectedCity")
    ? JSON.parse(localStorage.getItem("selectedCity") as string)
    : "";
});
</script>

<style scoped lang="scss">
.addLocationPage {
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;

  &__nav {
    width: 100%;
    height: auto;
    margin-bottom: 37px;
  }

  &__searchBlock {
    width: 100%;
    height: 32px;
    margin-bottom: 32px;
  }

  &__listCity {
    width: 100%;
    height: 420px;
    flex-grow: 1;
    overflow: hidden;
    overflow-y: scroll;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    row-gap: 16px;
    border-radius: 0 0px 16px 16px;
  }
}
</style>
