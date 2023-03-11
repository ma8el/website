<script lang="ts">
import Title from '@/components/Title.vue'
import SocialBar from '@/components/SocialBar.vue'

export default {
components: {
  Title,
  SocialBar
},
data () {
    return {
      title: 'About',
      description: 'This is an about page',
      links: {
        metadata: {
          facebook: 'https://www.facebook.com/andrea.morales.581',
          linkedin: 'https://www.linkedin.com/in/andrea-morales-581/',
    },
  }
}
}
}
</script>

<template>
<div class="full-page-component about">
  <Title
      :title="title"
      :description="description"
   />
  <img alt="Avatar" class="logo" src="@/assets/me.jpg" width="263" height="430" />
  <v-row no-gutters>
    <v-col cols="2">
    </v-col>
    <v-col cols="5" class="black about-info pa-8 ma-8">
       <section>
         <h1>Who am I?</h1>
         Lorem ipsum dolor sit amet, no nam oblique veritus. Commune scaevola imperdiet nec ut, sed euismod convenire principes at. Est et nobis iisque percipit, an vim zril disputando voluptatibus, vix an salutandi sententiae.
         Lorem ipsum dolor sit amet, no nam oblique veritus. Commune scaevola imperdiet nec ut, sed euismod convenire principes at. Est et nobis iisque percipit, an vim zril disputando voluptatibus, vix an salutandi sententiae.
       </section>
    </v-col>
    <v-col cols="2" class="black contact about-info pa-8 ma-8">
      <h1>John Doe</h1>
      <li><b>Mail</b>: fooafjdkfj</li>
      <li><b>City</b>: foo</li>
      <li><b>Languages</b>: foo</li>
      <SocialBar :links="links" />
    </v-col>
  </v-row>
</div>
</template>

<style scoped lang="scss">
@import '@/assets/consts.scss';
.logo {
  display: block;
  margin: 0 auto 2rem;
  border-radius: 50%;
  width: 15%;
  height: auto;
}

.about {
  background-color: white;
}

.about-info h1 {
  text-align: left;
  font-size: 2rem;
}

.about-info section {
  text-align: left;
  font-size: 1rem;
  width: 90%;
}
.contact li {
  list-style: none;
  text-align: left;
  font-size: 1rem;
  width: 90%;
  margin-bottom: 10px;
}

.black {
  color: black;
}
</style>
