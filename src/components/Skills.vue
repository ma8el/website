<script lang="ts">
import axios from 'axios';
import Title from '@/components/Title.vue';
import { useAuthStore } from '../stores/store';

interface Skill {
    name: string;
    logo_url: string;
}

export default {
    components: {
        Title
    },
    data() {
        return {
            skills: [{'name': '', 'logo_url': ''}],
            title: "Skills",
            description: "Tech I work with",
            image: ""
        }
    },
    methods: {
        getImageUrl(imageName: string) {
            console.log(import.meta.url)
            return new URL(`/src/assets/image/logo/${imageName}`, import.meta.url).href;
        }
    },
    mounted() {
    const authStore = useAuthStore();
    const apiUrl = import.meta.env.VITE_API_URL;
    const jwtToken = authStore.$state.token;
    axios.get<Skill[]>(`${apiUrl}/skills`, {
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
    })
      .then(response => (this.skills = response.data))
      .catch(error => console.log(error))
  }
}
</script>


<template>

    <div class="full-page-component skill"> 
      <Title
          :title="title"
          :description="description"
      />
      <v-row class="mb-8" no-gutters>
      <v-col cols="2" class="pa-8 ma-5 black" v-for="(skill, index) in skills" :key="index">
        <img id="imgLogo" class="img-responsive mx-auto d-block" :src="getImageUrl(skill.logo_url)" :alt="skill.name" width="96" height="96"/>
        <div id="divAlt" class="altCaption text-center">{{skill.name}}</div>
      </v-col>
      </v-row>
      </div>

</template>

<style scoped lang="scss">
@import '@/assets/consts.scss';

.skill {
    background-color: white;
    width: 100%;
}
.skill h2 {
    color: black;
    font-weight: 500;
    font-size: 2rem;
    top: -10px;
}
.black {
    color: black;
}
</style>