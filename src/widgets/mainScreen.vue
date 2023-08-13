<template>
  <div :class="['mainScreen', 'is-loading']">
    <div class="mainScreen__iconWeather">
      <img
        :src="require(`@/shared/assets/icons/${icon.toLocaleLowerCase()}.svg`)"
        alt=""
        v-if="icon"
      />
    </div>
    <div class="mainScreen__date" v-html="getNoWDate()"></div>
    <div
      class="mainScreen__degrees"
      v-html="
        props.loading
          ? '- -'
          : temp
          ? `${Math.round(temp)} <span>°</span>`
          : '- -'
      "
    ></div>
    <div class="mainScreen__weatherText">{{ textDesc ? textDesc : "" }}</div>
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{
  loading: boolean;
  temp: number | null;
  textDesc: string | null;
  icon: string | null;
}>();

const getNoWDate = () => {
  const nowDate = new Date();
  const stringDay = new Intl.DateTimeFormat("en-US", {
    weekday: "long",
  }).format(nowDate.getDay());
  const mounthString = new Intl.DateTimeFormat("en-US", {
    month: "short",
  }).format(nowDate.getMonth());
  const stringDate = `${stringDay} <span></span> ${mounthString} ${nowDate.getDay()}`;

  return stringDate;
};
</script>

<style scoped lang="scss">
.mainScreen {
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;

  &__iconWeather {
    width: 250px;
    height: 250px;
    img {
      width: 100%;
      height: 100%;
    }
  }
  &__date {
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 120%;
    color: #ffffff;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    margin-bottom: 16px;
    &:deep(span) {
      width: 2px;
      height: 20px;
      flex-grow: 1;
      background-color: #ffffff;
      margin: 0 8px;
    }
  }
  &__degrees {
    position: relative;
    font-size: 72px;
    font-style: normal;
    font-weight: 600;
    line-height: 120%;
    color: #ffffff;
    margin-bottom: 0px;
    &:deep(span) {
      position: absolute;
      top: -10px;
      right: -25px;
    }
  }
  &__weatherText {
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 120%;
    color: #ffffff;
  }
}

@keyframes shine {
  to {
    background-position-x: -200%;
  }
}
</style>
