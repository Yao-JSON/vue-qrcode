<template>
  <div>
    <router-view :personDetail="personDetail"></router-view>
  </div>
</template>

<script>
  import { personDetail } from '../data.json';
  export default {
    name: 'app',
    data () {
      return {
        personDetail
      };
    }
  }
</script>

<style>

</style>
