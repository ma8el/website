<script lang="ts">
import Title from '@/components/Title.vue'
import SocialBar from '@/components/SocialBar.vue'
import axios from 'axios';
import type { AxiosInstance } from 'axios';
import { useAuthStore } from '../stores/store';

export default {
components: {
  Title,
  SocialBar
},

data () {
    return {
      title: 'About',
      description: 'This is me',
      firstName: '',
      lastName: '',
      mail: '',
      city: '',
      languages: '',
      links: {},
      about: {'who_am_i': '', 'background': '', 'outside_of_work': ''}
    }
},
mounted() {
    const authStore = useAuthStore();
    const apiUrl = import.meta.env.VITE_API_URL;
    const jwtToken = authStore.$state.token;
    const axiosInstance: AxiosInstance = axios.create({
      baseURL: apiUrl,
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
    });
    axiosInstance.get('/socials?select=name,href')
      .then(response => (this.links = response.data.reduce((obj: { [x: string]: any; }, item: { name: string; href: string; }) =>
                         {obj[item.name.toLowerCase()] = item.href; return obj;})))
      .catch(error => console.log(error))

    axiosInstance.get('/about')
      .then(response => (this.about = response.data[0]))
      .catch(error => console.log(error))

    axiosInstance.get('/me')
      .then(response => {
        const {data: responseData, status: responseStatus} = response;
        this.firstName = responseData[0].first_name;
        this.lastName = responseData[0].last_name;
        this.mail = responseData[0].mail;
        this.city = responseData[0].city;
        this.languages = `${responseData[0].languages.join(', ')}`;})
      .catch(error => console.log(error))
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
    <v-col cols="5" class="about-info pa-8 ma-8">
       <h1>Who am I?</h1>
       <section>
         {{  about.who_am_i  }}
       </section>
       <section>
        {{  about.background  }}
       </section>
       <section>
        {{  about.outside_of_work  }}
       </section>
    </v-col>
    <v-col cols="3" class="contact about-info pa-8 ma-8">
      <h1>{{ firstName }} {{ lastName }}</h1>
      <li ><b>Mail</b>: <a :href="`mailto:${mail}`">{{  mail }}</a></li>
      <li><b>City</b>: {{  city }}</li>
      <li><b>Languages</b>: {{  languages }}</li>
      <SocialBar :links="links" />
    </v-col>
  </v-row>
</div>
</template>

<style scoped lang="scss">
@import '@/assets/consts.scss';
.logo {
  display: block;
  margin: 0 auto 0;
  border-radius: 50%;
  width: 15%;
  height: auto;
}

.about {
  background-color: white;
  width: 100%;
}

.about-info {
  text-align: center;
  color: map-get($colors, secondary);
}

.about-info h1 {
  text-align: left;
  margin-bottom: 15px;
}

.about-info section {
  text-align: left;
  width: 90%;
}
.contact li {
  list-style: none;
  text-align: left;
  margin-bottom: 12px;
}
.contact a {
  color: map-get($colors, secondary);
  text-decoration: none;
  }
.contact a:hover {
  background-color: white;
  text-decoration: underline;
  }
</style>
