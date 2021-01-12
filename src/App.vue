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
  @import "./common/stylus/mixin.styl"
  .nav {
    display: flex;
    justify-content: space-around;
    height: 40px;
    border-1px(rgba(7,17,27,.1))
  }

  span {
    flex: 1;
    height: 100%;
    line-height: 40px;
    text-align: center;
    font-size: 16px;
  }

  .router-link-active {
    color: rgb(240, 20, 20);
  }

</style>
