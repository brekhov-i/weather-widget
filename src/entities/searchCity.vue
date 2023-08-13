<template>
  <div class="searchBlock">
    <div class="searchBlock__field">
      <svg
        width="16"
        height="16"
        viewBox="0 0 16 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M14 13.9999L11.0093 11.0039L14 13.9999ZM12.6667 6.99992C12.6667 8.50281 12.0697 9.94415 11.0069 11.0069C9.94424 12.0696 8.5029 12.6666 7.00001 12.6666C5.49712 12.6666 4.05578 12.0696 2.99307 11.0069C1.93037 9.94415 1.33334 8.50281 1.33334 6.99992C1.33334 5.49702 1.93037 4.05569 2.99307 2.99298C4.05578 1.93027 5.49712 1.33325 7.00001 1.33325C8.5029 1.33325 9.94424 1.93027 11.0069 2.99298C12.0697 4.05569 12.6667 5.49702 12.6667 6.99992V6.99992Z"
          stroke="#4F4F4F"
          stroke-width="2"
          stroke-linecap="round"
        />
      </svg>
      <input
        type="text"
        class="searchBlock__input"
        placeholder="Search Your City"
        v-model="searchString"
      />
    </div>
    <div class="searchBlock__listCity" v-if="cityList.length != 0">
      <ul class="list">
        <li
          class="list__item"
          v-for="(city, index) in cityList"
          :key="'city' + index"
          @click="selectCity(city)"
        >
          <div class="cityName">
            {{ city.localName ? city.localName : city.name }}
          </div>
          <div class="cityRigion">{{ city.state }}</div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ICity } from "@/app/types/city";
import useUploadCities from "@/features/hooks/uploadCity";
import { ref } from "vue";

const emits = defineEmits<{
  (e: "selectCity", city: ICity): void;
}>();

const searchString = ref<string>("");
const { cityList } = useUploadCities(searchString);

const selectCity = (city: ICity) => {
  emits("selectCity", city);
  cityList.value = [];
  searchString.value = "";
};
</script>

<style scoped lang="scss">
.searchBlock {
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  &__field {
    width: 100%;
    height: 30px;
    border-radius: 15px;
    background-color: #ffffff;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    padding: 8px 16px;

    svg {
      width: 16px;
      height: 16px;
      margin-right: 10px;
    }

    input {
      width: 100%;
      height: 100%;
      border: none;
      color: #000000;
      font-size: 14px;
      outline: none;

      &::placeholder {
        color: #828282;
        font-size: 14px;
      }
    }
  }
  &__listCity {
    width: 100%;
    height: auto;
    position: absolute;
    left: 0;
    top: calc(100% + 10px);
    right: 0;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-end;
    background-color: #ffffff;
    border-radius: 10px;
    z-index: 3;

    .list {
      width: 100%;
      height: auto;
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      align-items: flex-start;
      padding: 8px;
      &__item {
        width: 100%;
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: flex-start;
        padding: 8px;
        cursor: pointer;
        &:not(:last-child) {
          border-bottom: 1px solid grey;
        }
        .cityName {
          font-size: 16px;
          font-weight: 500;
        }
        .cityRigion {
          font-size: 14px;
          font-weight: 400;
        }
      }
    }
  }
}
</style>
