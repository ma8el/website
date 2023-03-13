<script lang="ts">
import axios from 'axios';
import Title from '@/components/Title.vue';
import type { AxiosInstance } from 'axios';
import { useAuthStore } from '../stores/store';

export default {
    components: {
        Title
    },
    data() {
        return {
            cv: [{during: '', at: '', projects: [{title: '', content: ''}]}],
            title: "Experience",
            description: "What I did so far",
            color: "white"
            }
    },
    mounted () {
    const authStore = useAuthStore();
    const apiUrl = import.meta.env.VITE_API_URL;
    const jwtToken = authStore.$state.token;
    const axiosInstance: AxiosInstance = axios.create({
      baseURL: apiUrl,
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
    });
    axiosInstance
      .get('/cv')
      .then(response => (this.cv = response.data))
      .catch(error => console.log(error));
  }
}
</script>

<template>
  <Title
    :title="title"
    :description="description"
  />

  <div class="full-page-component">
    <v-timeline align="start">
      <v-timeline-item
        v-for="(cv_item, i) in cv"
        :key="i"
        size="small"
        color="red lighten-2"
        class="theme-override"

      >
        <template v-slot:opposite>
          <div
            :class="`pt-1 headline font-weight-bold left`"
            v-text="cv_item.during"
          ></div>
        </template>
        <div class="left">
          <div :class="{ 'project-left': i % 2 == 0, 'project-right': i % 2 != 0 }">
            <h2 :class="`mt-n1 headline font-weight-light mb-4`">
              {{ cv_item.at }}
            </h2>
            <div 
            v-for="project in cv_item.projects"
            >
            <b>
              {{ project.title }}
            </b>
            <p>
              {{ project.content }}
            </p>
            </div>
          </div>
        </div>
      </v-timeline-item>
    </v-timeline>
  </div>
</template>

<style scoped>

.project-right {
  margin: 0 0rem 0 10rem;
}

.project-left {
  margin: 0 10rem 0 0rem;
}

.left {
  text-align: left;
}
.theme-override {
  --v-theme-on-surface: 84, 84, 84;
}
</style>