<template>
  <div class="navPage">
    <RouterLink to="/" class="navPage__back">
      <svg
        width="32"
        height="32"
        viewBox="0 0 32 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M24 16C24 16.2653 23.8947 16.5196 23.7071 16.7072C23.5196 16.8947 23.2652 17 23 17H11.414L15.708 21.292C15.801 21.385 15.8747 21.4954 15.9251 21.6169C15.9754 21.7384 16.0013 21.8686 16.0013 22C16.0013 22.1315 15.9754 22.2617 15.9251 22.3832C15.8747 22.5047 15.801 22.6151 15.708 22.708C15.615 22.801 15.5047 22.8748 15.3832 22.9251C15.2617 22.9754 15.1315 23.0013 15 23.0013C14.8685 23.0013 14.7383 22.9754 14.6169 22.9251C14.4954 22.8748 14.385 22.801 14.292 22.708L8.29202 16.708C8.19889 16.6152 8.12501 16.5048 8.07459 16.3833C8.02418 16.2618 7.99823 16.1316 7.99823 16C7.99823 15.8685 8.02418 15.7383 8.07459 15.6168C8.12501 15.4953 8.19889 15.3849 8.29202 15.292L14.292 9.29204C14.4798 9.10427 14.7345 8.99878 15 8.99878C15.2656 8.99878 15.5202 9.10427 15.708 9.29204C15.8958 9.47982 16.0013 9.73449 16.0013 10C16.0013 10.2656 15.8958 10.5203 15.708 10.708L11.414 15H23C23.2652 15 23.5196 15.1054 23.7071 15.2929C23.8947 15.4805 24 15.7348 24 16Z"
          fill="white"
        />
      </svg>
    </RouterLink>
    <div class="navPage__name">{{ route.name }}</div>
  </div>
</template>

<script setup lang="ts">
import { useRoute } from "vue-router";

const route = useRoute();
</script>

<style scoped lang="scss">
.navPage {
  display: flex;
  justify-content: center;
  align-items: center;
  &__back {
    width: 32px;
    height: 32px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-right: auto;

    svg {
      width: 100%;
      fill: none;
      stroke: #ffffff;
    }
  }

  &__name {
    font-size: 16px;
    font-style: normal;
    font-weight: 600;
    line-height: 20px;
    letter-spacing: 2px;
    color: #ffffff;
    margin-right: auto;
  }
}
</style>
