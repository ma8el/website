<script lang="ts">
export default {
    props: ['header', 'caption']
}
</script>

<template>
  <div class="parallax">
  <div class="full-page-component">
    <div class="name">
        <h1 class="green">{{ header }}</h1>
    </div>
    <div class="wrapper-name">
        <h2>{{ caption }}</h2>
    </div>
  </div>
  </div>
</template>

<style scoped lang="scss">
@import '@/assets/consts.scss';
.parallax {
  background-image: url("../assets/background.jpg");
  background-color: rgb(0, 0, 0, .5);
  background-blend-mode: multiply;
  background-attachment: fixed;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  height: 100%;
  width: 100%;
}
.name {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 25%;
  height: 100%;
  margin: 0 auto;
  z-index: 400;
  border-bottom: 1px solid map-get($colors, primary);
}
  .wrapper-name {
    width: 250px;
    color: map-get($colors, primary);
}

h1 {
  color: map-get($colors, primary);
  font-weight: 500;
  font-size: 2.6rem;
  top: -10px;
}

h2 {
  font-size: 1.5rem;
}
</style>
