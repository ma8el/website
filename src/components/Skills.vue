<script lang="ts">
import axios, {isCancel, AxiosError} from 'axios';
import Title from '@/components/Title.vue';

export default {
    components: {
        Title
    },
    data() {
        return {
            skills: [
                {
                    name: "SQL",
                    rating: 8
                },
            ],
            title: "Skills",
            description: "My Skills"
        }
    },
    mounted() {
    axios
      .get('http://localhost:3000/skills')
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
      <div 
        class="skill"
        v-for="skill in skills"
      >
        <h2>
            {{ skill.name }}
        </h2>
        <v-rating 
        :model-value="skill.rating"
        color="black"
        readonly
        length=10
        ></v-rating>

      </div>
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
</style>