<template>
  <div class="goods">
    <div class="side-nav">
      <ul>
        <li v-for="(item, index) in goodsData" :key="index">
            <span v-show="item.type>0" class="icon"></span> {{ item.name }}
        </li>
      </ul>
    </div>
    <div class="list-content">
      <div class="main-goods food-list-hook" v-for="(item, index) in goodsData" :key="index">
        <p>{{ item.name }}</p>
        <div class="singleGood" v-for="(item1, index1) in item.foods" :key="index1">
          <div class="goodsImage">
            <img :src="item1.image">
          </div>
          <div class="name">{{ item1.name }}</div>
          <div class="description">{{ item1.description }}</div>
          <div class="info">月售{{ item1.sellCount }}份</div>
          <div class="rating">好评率{{ item1.rating }}%</div>
          <div class="price"><span class="money">￥</span> {{ item1.price }}</div>
          <div class="num">
            <span class="reduce" :class="{ displayStyle: flag }" @click="handleReduce">-</span>
            <span class="count" :class="{ displayStyle: flag }">{{ goodNum }}</span>
            <span class="add" @click="handleAdd">+</span>
          </div>
        </div>
      </div>
    </div>
    <bottom-handler></bottom-handler>
  </div>
</template>

<script>
import BottomHandler from './modules/bottomHandler.vue'
export default {
  data() {
    return {
      goodsData: null,
      flag: true,
      goodNum: 0,
      classFlag: true,
      itemLength: []
    }
  },
  components: {
    BottomHandler
  },
  async created() {
    const { data } = await this.$http.get('/api/goods')
    this.goodsData = data.data
    console.log('goodsData', this.goodsData)
    this.$nextTick(() => {
      // 获取单个商品的DOM元素
      const foodListItems = document.querySelector('.list-content').children
      var length = 0
      this.itemLength.push(length)
      for (let i = 0; i < foodListItems.length; i++) {
        length += foodListItems[i].clientHeight

        this.itemLength.push(length)
      }
      // 获取左侧导航栏的DOM元素
      var sideNavs = document.querySelector('.side-nav').querySelectorAll('li')
      sideNavs[0].classList.add('highLight')
      // 监听滚动事件
      document.querySelector('.list-content').addEventListener('scroll', () => {
        // for (var i = 0; i < this.itemLength.length; i++) {
        if (document.querySelector('.list-content').scrollTop > this.itemLength[1]) {
          for (var j = 0; j < this.itemLength.length; j++) {
            sideNavs[j].classList.remove('highLight')
          }
          sideNavs[1].classList.add('highLight')
        }
        // }
        console.log(document.querySelector('.list-content').scrollTop)
        console.log(this.itemLength)
      })
    })
  },
  methods: {
    handleAdd() {
      this.goodNum++
      this.flag = false
    },
    handleReduce() {
      this.goodNum--
      if (this.goodNum === 0) {
        this.flag = true
      }
    }
  }
}
</script>

<style lang="stylus"  scoped>
  @import "../../../common/stylus/mixin.styl"
  .goods {
    display: flex;
    position: absolute;
    top: 174px;
    bottom: 46px;
    width: 100%;
    overflow: hidden;
  }
  .side-nav {
    width: 80px;
    height: 100%;
    background-color: #f3f5f7;
    overflow: auto;
  }
  .side-nav ul li {
    box-sizing: border-box;
    font-size: 12px;
    color: rgb(24, 20, 20);
    height: 54px;
    padding: 20px 5px 0 5px;
    font-weight: 200;
    line-height: 14px;
  }
  .list-content {
    width: 100%;
    height: 100%;
    overflow: auto;
  }
  .list-content p {
    height: 26px;
    background-color: #f3f5f7;
    border-left: #d9dde1 3px solid;
    padding-left: 14px;
    font-size: 12px;
    color: rgb(147, 153, 159);
    line-height: 26px;
  }
  .singleGood {
    position: relative;
    padding: 18px;
    height: 72px;
    /* background-color: pink; */
  }
  .singleGood .goodsImage {
    position: absolute;
    top: 18px;
    left: 18px;
    width: 70px;
    height: 70px;
  }
  .singleGood .goodsImage img {
    width: 100%;
    height: 100%;
  }
  .singleGood .name {
    position: absolute;
    top: 20px;
    left: 98px;
    font-size: 15px;
    color: rgb(7, 17, 27);
    line-height: 14px;
  }
  .singleGood .description,
  .singleGood .info,
  .singleGood .rating,
  .singleGood .price {
    position: absolute;
    left: 98px;
    top: 44px;
    font-size: 10px;
    color: rgb(147, 153, 159);
    line-height: 10px;
  }
  .singleGood .info {
    top: 63px;
  }
  .singleGood .rating {
    top: 63px;
    left: 163px;
  }
  .singleGood .price {
    top: 81px;
    font-size: 20px;
    color: red;
    font-weight: 700;
  }
  .num {
    position: absolute;
    top: 76px;
    right: 10px;
  }
  .num .add,
  .num .reduce {
    display: inline-block;
    width: 20px;
    height: 20px;
    border-radius: 10px
    background-color: rgb(0, 160, 220);
    vertical-align: middle;
    margin: 0 8px;
    font-size: 24px;
    line-height: 16px;
    text-align: center;
  }
  .num .count {
    color: rgb(147, 153, 159);
    font-size: 10px;
    line-height: 16px;
  }
  .num .add {
    color: white;
  }
  .num .reduce {
    box-sizing: border-box;
    border: 2px solid rgb(0, 160, 220);
    color: rgb(0, 160, 220);
    background-color: white;
    line-height: 16px;
  }
  .displayStyle {
    display: none!important;
  }
  .icon {
    display: inline-block;
    bg-image('./image/special_3')
    width: 12px;
    height: 12px;
    background-size: 12px 12px;
    background-repeat: no-repeat;
  }
  .money {
    font-size: 16px;
  }
  .highLight {
    background-color: white;
  }
</style>
