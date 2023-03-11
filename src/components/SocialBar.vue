<script lang="ts">

    export default {
        name: 'SocialBar',
        props: ['links'],
    }
</script>

<template>
    <div class="social-wrap">
      <ul class="social-bar">
        <li>
          <a :href="links.metadata.github" target="_blank">
            <font-awesome-icon class="icon" :icon="['fab', 'github-square']" />
          </a>
        </li>
        <li>
          <a :href="links.metadata.xing" target="_blank">
            <font-awesome-icon class="icon" icon="fa-brands fa-square-xing" />
          </a>
        </li>
        <li>
          <a :href="links.metadata.linkedin" target="_blank">
            <font-awesome-icon class="icon" :icon="['fab', 'linkedin']" />
          </a>
        </li>
      </ul>
    </div>
 </template>
 
<style scoped lang="scss">
.social-wrap{
  text-align: left;
}
.social-wrap {
  li {
    display: inline-block;
    margin-right: 10px;
  }
  .icon {
    float: left;
    font-size: 2.5rem;
    color: black;
  }
}
</style>