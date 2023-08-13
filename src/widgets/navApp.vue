<template>
  <div class="navbar">
    <RouterLink to="/addLocation" class="navbar__addLocation">
      <svg
        width="23"
        height="22"
        viewBox="0 0 23 22"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M12 11H1.33334M12 21.6667V11V21.6667ZM12 11V0.333374V11ZM12 11H22.6667H12Z"
          stroke-width="2"
          stroke-linecap="round"
        />
      </svg>
    </RouterLink>
    <div class="navbar__location">
      <span>{{ props.city ? props.city : "" }}</span>
    </div>
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{
  city: string | undefined;
}>();
</script>

<style scoped lang="scss">
.navbar {
  width: 100%;
  height: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  &__addLocation {
    width: 32px;
    height: 32px;
    display: flex;
    justify-content: center;
    align-items: center;
    fill: none;
    stroke: #ffffff;
    margin-right: auto;
  }

  &__location {
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
