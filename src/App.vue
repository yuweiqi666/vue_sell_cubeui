<template>
  <div id="app">
    <v-header v-if="seller" :data="seller"></v-header>
    <v-nav></v-nav>
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
    <v-footer></v-footer>
  </div>
</template>

<script>
import header from '@/components/header/header'
import nav from '@/components/nav/nav'
import footer from '@/components/footer/footer'

export default {
  name: 'App',
  data() {
    return {
      seller: null,
      goods: {},
      ratinhs: {}
    }
  },
  components: {
    'v-header': header,
    'v-nav': nav,
    'v-footer': footer
  },
  async created() {
    const { data: sellerData } = await this.$http.get('/api/seller')
    // console.log('sellerData__', sellerData)
    if (sellerData.errno === 0) {
      this.seller = sellerData.data
    }
    console.log('seller', this.seller)
  }
}
</script>

<style lang="stylus">
  @import "./common/stylus/mixin.styl"
  body,
  html {
    width: 100%;
    height: 100%;
  }
  #app {
    height: 100%;
  }
  .nav {
    display: flex;
    justify-content: space-around;
    width: 100%;
    height: 40px;
    vertical-align:middle;
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
