<template>
  <div id="app">
    <Navlist></Navlist>
    <div class="template">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import Navlist from './components/Navs.vue'
export default {
  name: 'app',
  components:{
    Navlist
  }
}
</script>

<style>

</style>
