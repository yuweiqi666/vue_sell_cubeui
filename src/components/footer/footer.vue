<template>
  <div class="footer">
    <div class="shopcart1">
      <div class="shopcart2">
        <i class="icon-shopping_cart"></i>
      </div>
    </div>
    <div class="price">￥ 0</div>
    <div class="detailprice">另需配送费￥20元</div>
    <div class="totalprice">￥20元起送</div>
  </div>
</template>

<script>
export default {
  data() {
    return {}
  }
}
</script>

<style scoped lang="stylus">
  .footer {
    position: absolute;
    bottom: 0;
    height: 50px;
    width: 100%;
    background-color: #141d27;
    .shopcart1 {
      position: absolute;
      bottom: 0;
      left: 15px;
      width: 66px;
      height: 66px;
      border-radius: 66px;
      background-color: #141d27;
      display: flex;
      justify-content: center;
      align-items: center;
      .shopcart2 {
        display: flex;
        justify-content:center;
        align-items: center;
        width: 55px;
        height: 55px;
        border-radius: 55px;
        background: rgba(0, 0, 0, 0.5);
        .icon-shopping_cart {
          color: rgba(255, 255, 255, 0.4);
          font-size 24px;
        }
      }
    }
    .price {
      color: rgba(255, 255, 255, 0.4)
      position:absolute;
      left: 90px;
      top: 50%;
      font-size: 16px;
      line-height: 30px;
      transform: translate(0, -50%)
      border-right: 1px solid rgba(255, 255, 255, .1)
      height: 30px
      padding-right: 20px
      box-sizing:border-box;
    }
    .detailprice {
      position: absolute;
      top: 50%;
      transform: translate(0, -50%);
      left: 160px;
      font-size: 12px;
      color: rgba(255, 255, 255, 0.4)
    }
    .totalprice {
      position: absolute;
      right: 0;
      height 100%;
      width: 105px;
      background-color: rgba(255, 255, 255, .2);
      text-align: center;
      line-height: 50px;
      color: rgba(255, 255, 255, .4);
      font-weight: 700;
    }
  }
</style>
