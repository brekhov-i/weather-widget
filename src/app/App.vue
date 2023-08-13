<template>
  <div class="weatherApp">
    <router-view />
  </div>
</template>

<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700&display=swap");
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

body {
  width: 100%;
  height: 100%;
  font-family: "Roboto", sans-serif;
}

.weatherApp {
  width: 358px;
  height: 586px;
  border-radius: 30px;
  background: linear-gradient(180deg, #62b8f6 0%, #2c79c1 100%);
  padding: 16px;
  &__mainScreen {
    margin-bottom: 16px;
  }
}
</style>
