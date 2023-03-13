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
          <a :href="links.github" target="_blank">
            <font-awesome-icon class="icon" icon="fa-brands fa-github-square" />
          </a>
        </li>
        <li>
          <a :href="links.blog" target="_blank">
            <font-awesome-icon class="icon" icon="fa-brands fa-blogger" />
          </a>
        </li>
        <li>
          <a :href="links.xing" target="_blank">
            <font-awesome-icon class="icon" icon="fa-brands fa-square-xing" />
          </a>
        </li>
        <li>
          <a :href="links.linkedin" target="_blank">
            <font-awesome-icon class="icon" icon="fa-brands fa-linkedin" />
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
    font-size: 2rem;
    color: black;
  }
}
</style>