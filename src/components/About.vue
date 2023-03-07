<script lang="ts">
import Title from '@/components/Title.vue'

export default {
components: {
  Title
},
data () {
    return {
      title: 'About',
      description: 'This is an about page'
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
   <img alt="Avatar" class="logo" src="@/assets/foto.jpeg" width="125" height="125" />
   <div class="about-container">
     <div class="about-info">
       <h1>Who am I?</h1>
       <section>
         Lorem ipsum dolor sit amet, no nam oblique veritus. Commune scaevola imperdiet nec ut, sed euismod convenire principes at. Est et nobis iisque percipit, an vim zril disputando voluptatibus, vix an salutandi sententiae.
         Lorem ipsum dolor sit amet, no nam oblique veritus. Commune scaevola imperdiet nec ut, sed euismod convenire principes at. Est et nobis iisque percipit, an vim zril disputando voluptatibus, vix an salutandi sententiae.
       </section>
     </div>
     <div class="about-info">
      <h1>Contact</h1>
      <li>Phone: fooafjdkfj</li>
      <li>Phone: foo</li>
      <li>Phone: foo</li>
     </div>
  </div>
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

.about-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 auto;
  width: 80%;
  color: black;
}

.about-info h1 {
  text-align: left;
  font-size: 2rem;
}

.about-info section {
  text-align: left;
  font-size: 1rem;
  width: 70%;
}
.about-info li {
  list-style: none;
  text-align: left;
  font-size: 1rem;
  width: 100%
}
</style>
