<template>
  <div class="header-content">
    <div class="top">
      <!-- 商家头像 -->
      <div class="logo">
        <img :src="sellerLogo">
      </div>
      <div class="content">
        <!-- 商家名称 -->
        <div class="title">
          <div class="brand">
          </div>
          <!-- 名字 -->
          <p class="sellerName">{{ sellerData.name }}</p>
        </div>
        <div class="transport">{{ sellerData.description }}</div>
        <div class="detail">
          <!-- 满减 -->
          <div class="decrease">
          </div>
          <!-- 活动 -->
          <div class="support">{{ sellerData.supports[0].description }}</div>
        </div>
        <div class="icon" @click="detailData">
          {{ sellerData.supports.length }}个 >
        </div>
      </div>
      <div class="bottom">
        <!-- 公告 -->
        <div></div>
        <p class="bulletin">{{ sellerData.bulletin }}</p>
        <span class="more">... ></span>
      </div>
      <!-- 背景图片 -->
      <div class="background">
        <img :src="sellerLogo">
      </div>
      <!-- 弹出详情层 -->
      <div class="detail-pop" transition="fade" v-show="target">
        <div class="wrapper-pop clearfix">
          <div class="content-pop">
            <p class="title-pop">{{ sellerData.name }}</p>
            <!-- 评分组件 -->
            <star :size="48" :score="sellerData.score"></star>
            <!-- 优惠信息 -->
            <titleMessage message="优惠信息"></titleMessage>
            <div class="supportContent">
              <p class="first content"><span></span>{{ sellerData.supports[0].description }}</p>
              <p class="second content"><span></span>{{ sellerData.supports[1].description }}</p>
              <p class="third content"><span></span>{{ sellerData.supports[2].description }}</p>
              <p class="forth content"><span></span>{{ sellerData.supports[3].description }}</p>
              <p class="fifth content"><span></span>{{ sellerData.supports[4].description }}</p>
            </div>
            <!-- 商家公告 -->
            <titleMessage message="商家公告"></titleMessage>
            <div class="content gonggao supportContent">
              {{ sellerData.bulletin }}
            </div>
          </div>
        </div>
        <div class="close-pop"  @click="close">
          <i class="icon-close"></i>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import star from '../star/star'
import titleMessage from '../titleMessage/titleMessage'
export default {
  data() {
    return {
      sellerData: this.data,
      sellerLogo: this.data.avatar,
      target: false
    }
  },
  props: {
    data: {
      type: Object
    }
  },
  methods: {
    detailData() {
      this.target = true
    },
    close() {
      this.target = false
    }
  },
  components: {
    star,
    titleMessage
  },
  created() {
    console.log(this.sellerData.score)
  }
}
</script>

<style lang="stylus" scoped>
  @import "../../common/stylus/mixin.styl"
  .top {
    position: relative;
    width: 100%;
    height: 134px;
    background-color: rgba(7, 17, 27, 0.5);
    overflow: hidden;
  }
  .logo {
    position: absolute;
    top: 24px;
    left: 24px;
    width: 64px;
    height: 64px;
    border-radius: 4px;
    overflow: hidden;
  }
  .logo img {
    width: 100%;
    height: 100%;
  }
  .brand {
    position: absolute;
    left: 104px;
    top: 26px;
    width: 30px;
    height: 18px;
    bg-image('./img/brand')
    background-size: 30px 18px;
  }
  .sellerName {
    position: absolute;
    left: 140px;
    top: 27px;
    font-size: 16px;
    color: rgb(255, 255, 255);
    font-weight: bold;
    line-height: 18px;
  }
  .transport {
    position: absolute;
    left: 104px;
    top: 49px;
    font-size: 12px;
    color: rgb(255, 255, 255);
    font-weight: 200;
    line-height: 24px;
  }
  .decrease {
    position: absolute;
    left: 104px;
    top: 73px;
    width: 12px;
    height: 12px;
    bg-image('./img/decrease_1')
    background-size: 12px 12px;
  }
  .detail .support {
    position: absolute;
    left: 120px;
    top: 74px;
    font-size: 10px;
    color: rgb(255, 255, 255);
    font-weight: 200;
    line-height: 12px;
  }
  .icon {
    position: absolute;
    right: 24px;
    top: 66px;
    width: 40px;
    height: 24px;
    background: rgba(0, 0, 0, 0.2);
    border-radius: 16px;
    text-align: center;
    line-height: 24px;
    color: rgb(255, 255, 255);
    font-size: 10px;
    font-weight: 200;
  }
  .bottom {
    position: absolute;
    bottom: 0;
    height: 28px;
    width: 100%;
    background-color: rgba(7, 17, 27, 0.2);
  }
  .bottom div {
    position: absolute;
    left: 12px;
    top: 25%;
    width: 22px;
    height: 12px;
    bg-image('./img/bulletin')
    background-size: 22px 12px;
  }
  .bottom .bulletin {
    font-size: 10px;
    color: rgb(255, 255, 255);
    font-weight: 200;
    line-height: 28px;
    padding-left: 38px;
    width: 80%;
    overflow: hidden;
    height: 100%;
  }
  .bottom .more {
    position: absolute;
    right: 8px;
    top: -20%;
    font-weight: 550;
    color: rgb(255, 255, 255);
  }
  .background {
    position: absolute;
    width: 100%;
    height: 100%;
    z-index: -1;
    filter: blur(10px);
  }
  .background img {
    width: 100%;
    height: 100%;
  }

  .detail-pop {
    position: fixed;
    width: 100%;
    height: 100%;
    background: rgba(7, 17, 27, 0.8);
    z-index: 999;
    overflow: auto;
    backdrop-filter: blur(10px);
  }
  .wrapper-pop {
    min-height: 100%
    width: 100%;
  }
  .content-pop {
    margin-top: 30px;
    padding: 0 36px 64px 36px;
    width: 100%;
    box-sizing: border-box;
    text-align: center;
  }
  .close-pop {
    margin: -64px auto 0 auto;
    clear: both;
    width: 32px;
    height: 32px;
    font-size: 32px;
    color: rgba(255, 255, 255, 0.5);
  }
  .content-pop .title-pop {
    font-size: 16px;
    font-weight: 700;
    color: rgb(255, 255, 255);
    line-height: 16px;
    margin-bottom: 16px
  }
  .content-pop .content {
    font-size: 14px;
    font-weight: 200;
    color: rgb(255, 255, 255);
    line-height: 12px;
    margin-bottom: 12px;
    text-align: left;
  }
  .first span {
    display: inline-block;
    margin-right: 6px;
    bg-image('./img/decrease_2')
    background-size: 16px 16px;
    background-repeat: no-repeat;
    width: 16px;
    height: 16px;
    vertical-align: middle;
  }
  .second span {
    display: inline-block;
    margin-right: 6px;
    bg-image('./img/discount_2')
    background-size: 16px 16px;
    background-repeat: no-repeat;
    width: 16px;
    height: 16px;
    vertical-align: middle;
  }
  .third span {
    display: inline-block;
    margin-right: 6px;
    bg-image('./img/guarantee_2')
    background-size: 16px 16px;
    background-repeat: no-repeat;
    width: 16px;
    height: 16px;
    vertical-align: middle;
  }
  .forth span {
    display: inline-block;
    margin-right: 6px;
    bg-image('./img/invoice_2')
    background-size: 16px 16px;
    background-repeat: no-repeat;
    width: 16px;
    height: 16px;
    vertical-align: middle;
  }
  .fifth span {
    display: inline-block;
    margin-right: 6px;
    bg-image('./img/special_2')
    background-size: 16px 16px;
    background-repeat: no-repeat;
    width: 16px;
    height: 16px;
    vertical-align: middle;
  }
  .supportContent {
    padding: 0 12px;
  }
  .content-pop .gonggao {
    line-height: 24px;
  }
</style>
