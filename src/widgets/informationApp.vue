<template>
  <div class="information">
    <div class="information-item information__wind">
      <svg
        width="32"
        height="32"
        viewBox="0 0 32 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        class="information-item__icon"
        :style="infoData ? `transform: rotate(${infoData.wind.deg}deg);` : ''"
      >
        <path
          d="M12.983 28C13.1857 28.0033 13.3846 27.9449 13.5534 27.8326C13.7222 27.7202 13.8528 27.5593 13.928 27.371L17.769 17.77L27.371 13.929C27.5567 13.8548 27.7159 13.7266 27.8281 13.561C27.9402 13.3954 28.0001 13.2 28 13L28 12.984C27.9968 12.7815 27.9322 12.5847 27.8147 12.4197C27.6972 12.2547 27.5324 12.1292 27.342 12.06L5.342 4.05999C5.16303 3.9945 4.96906 3.98152 4.78296 4.02257C4.59685 4.06362 4.42636 4.157 4.29154 4.29171C4.15673 4.42642 4.06322 4.59684 4.02202 4.78292C3.98082 4.96899 3.99365 5.16296 4.059 5.34199L12.059 27.342C12.1284 27.5324 12.254 27.6973 12.4192 27.8148C12.5844 27.9323 12.7813 27.9969 12.984 28L12.983 28Z"
          fill="white"
        />
      </svg>
      <div class="information-item__meaning wind__meaning">
        {{ infoData ? Math.round(infoData.wind.speed) : "-" }} m/s
      </div>
      <div class="information-item__text wind__text">Wind</div>
    </div>
    <div class="information-item information__pressure">
      <svg
        width="32"
        height="32"
        viewBox="0 0 32 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        class="information-item__icon"
      >
        <path
          d="M16 2.66663C17.1066 2.66653 18.1714 3.08983 18.9759 3.8497C19.7804 4.60958 20.2637 5.64845 20.3267 6.75329L20.3333 6.99996L20.3347 17.6026L20.4413 17.6946C21.6839 18.8024 22.466 20.3357 22.6333 21.992L22.6587 22.328L22.6667 22.6666C22.6669 23.765 22.3956 24.8465 21.8771 25.8148C21.3586 26.7832 20.6089 27.6084 19.6946 28.2171C18.7802 28.8258 17.7297 29.1992 16.6363 29.304C15.5429 29.4089 14.4405 29.2419 13.4272 28.818C12.4139 28.3941 11.521 27.7264 10.8279 26.8742C10.1348 26.022 9.66309 25.0118 9.45457 23.9334C9.24605 22.8549 9.30723 21.7417 9.63267 20.6926C9.95811 19.6435 10.5377 18.691 11.32 17.92L11.56 17.6933L11.6653 17.6026L11.6667 6.99996C11.6664 5.93503 12.0584 4.90731 12.7676 4.11295C13.4769 3.31859 14.4539 2.81322 15.512 2.69329L15.7547 2.67329L16 2.66663ZM16 4.66663C15.4142 4.66668 14.8499 4.88707 14.4191 5.28402C13.9883 5.68098 13.7225 6.22545 13.6747 6.80929L13.6667 6.99996V18.592L13.2547 18.892C12.4675 19.4645 11.8791 20.2689 11.5718 21.1925C11.2645 22.1161 11.2537 23.1127 11.5408 24.0427C11.828 24.9727 12.3988 25.7897 13.1734 26.3792C13.9479 26.9688 14.8874 27.3014 15.8604 27.3304C16.8333 27.3595 17.791 27.0836 18.5994 26.5414C19.4077 25.9992 20.0263 25.2178 20.3685 24.3065C20.7107 23.3953 20.7594 22.3999 20.5078 21.4596C20.2562 20.5193 19.7169 19.6812 18.9653 19.0626L18.7453 18.8933L18.336 18.5933L18.3333 6.99996C18.3333 6.38112 18.0875 5.78763 17.6499 5.35004C17.2123 4.91246 16.6188 4.66663 16 4.66663ZM16 10.6666C16.2652 10.6666 16.5196 10.772 16.7071 10.9595C16.8946 11.1471 17 11.4014 17 11.6666V19.4866C17.7601 19.7256 18.4095 20.2287 18.8307 20.9051C19.2518 21.5814 19.4169 22.3862 19.2961 23.1737C19.1752 23.9612 18.7764 24.6794 18.1718 25.1983C17.5672 25.7172 16.7967 26.0025 16 26.0025C15.2033 26.0025 14.4328 25.7172 13.8282 25.1983C13.2236 24.6794 12.8248 23.9612 12.7039 23.1737C12.5831 22.3862 12.7482 21.5814 13.1693 20.9051C13.5905 20.2287 14.2399 19.7256 15 19.4866V11.6666C15 11.4014 15.1054 11.1471 15.2929 10.9595C15.4804 10.772 15.7348 10.6666 16 10.6666Z"
          fill="white"
        />
      </svg>
      <div class="information-item__meaning pressure__meaning">
        {{ infoData ? infoData.pressure : "-" }} mbar
      </div>
      <div class="information-item__text pressure__text">Pressure</div>
    </div>
    <div class="information-item information__humidity">
      <svg
        width="32"
        height="32"
        viewBox="0 0 32 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        class="information-item__icon"
      >
        <path
          d="M25 20.0001C25 25.5232 21.5231 29.0001 16 29.0001C10.4769 29.0001 7 25.5232 7 20.0001C7 14.0732 13.4519 6.07193 15.4306 3.75755C15.501 3.67533 15.5884 3.60931 15.6867 3.56406C15.7851 3.5188 15.8921 3.49536 16.0003 3.49536C16.1086 3.49536 16.2155 3.5188 16.3139 3.56406C16.4122 3.60931 16.4996 3.67533 16.57 3.75755C18.5481 6.07193 25 14.0732 25 20.0001Z"
          stroke="white"
          stroke-width="2"
          stroke-miterlimit="10"
        />
        <path
          d="M21.5 20.5C21.5 21.6935 21.0259 22.8381 20.182 23.682C19.3381 24.5259 18.1935 25 17 25"
          stroke="white"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
      <div class="information-item__meaning humidity__meaning">
        {{ infoData ? infoData.humidity : "-" }}%
      </div>
      <div class="information-item__text humidity__text">Humidity</div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { IWeather } from "@/app/types/weather";

defineProps<{
  infoData: IWeather | null;
}>();
</script>

<style scoped lang="scss">
.information {
  width: 100%;
  height: auto;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-column-gap: 30px;
  grid-row-gap: 24px;
  border-top: 1px solid #ffffff;
  padding-top: 16px;

  &-item {
    display: grid;
    grid-template-columns: 32px 1fr;
    grid-column-gap: 4px;
    grid-row-gap: 4px;

    &.information__wind {
      .information-item__icon {
        transform: rotate(45deg);
        margin-top: 5px;
      }
    }

    &__icon {
      grid-row: span 2;
    }
    &__meaning,
    &__text {
      font-size: 14px;
      font-style: normal;
      font-weight: 400;
      color: #ffffff;
    }
  }
}
</style>
