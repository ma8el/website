<script lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import Greeting from './components/Greeting.vue'
import Skills from './components/Skills.vue'
import Experience from './components/Experience.vue'
import About from './components/About.vue'

export default {
    components: {
      Greeting,
      Skills,
      Experience,
      About,
    },
    data() {
        return {
            msg: {
                header: "Hey, I'm John",
                caption: 'I am a foo bar'
                 }
        }
    }
}
</script>

<template>
  <div class="full-page-component">
    <Greeting :header="msg.header" :caption="msg.caption" />
    <About />
    <Experience />
    <Skills />
  </div>
</template>

<style>
header {
  line-height: 1.5;
  max-height: 100vh;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    position: -webkit-sticky; /* Safari */
    position: sticky;
    top: 0;
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }

  .full-page-component {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  min-height: 100vh;
  }
}
</style>
