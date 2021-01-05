<template>
  <div id="app">
    <v-header></v-header>
    <v-nav></v-nav>
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
  </div>
</template>

<script>
import header from '@/components/header/header'
import nav from '@/components/nav/nav'
export default {
  name: 'App',
  components: {
    'v-header': header,
    'v-nav': nav
  }
}
</script>

<style lang="stylus">
</style>
