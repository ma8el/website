<script lang="ts">
import axios, {isCancel, AxiosError} from 'axios';
import Title from '@/components/Title.vue';

export default {
    components: {
        Title
    },
    data() {
        return {
            cv: [
            {
              during: 'August 2019 - Present',
              at: "Mc Donalds",
              projects: ["Managing the customer satisfaction"]
            }
            ],
            title: "Experience",
            description: "My Experience"
            }

        },
    mounted () {
    axios
      .get('http://localhost:3000/cv')
      .then(response => (this.cv = response.data))
      .catch(error => console.log(error))
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
      >
        <template v-slot:opposite>
          <div
            :class="`pt-1 headline font-weight-bold`"
            v-text="cv_item.during"
          ></div>
        </template>
        <div>
          <h2 :class="`mt-n1 headline font-weight-light mb-4`">
            {{ cv_item.at }}
          </h2>
          <div 
          class="project" 
          v-for="project in cv_item.projects"
          >
            {{ project }}
          </div>
        </div>
      </v-timeline-item>
    </v-timeline>
  </div>
</template>

<style scoped>

.project {
  margin: 0 0 0.5rem;
}
</style>