<template>
  <div class="rating">
    <div class="ratbox">
      <div class="score">
        <div class="ratscore">{{ sellerData.score }}</div>
        <div class="ratdescribe">综合评分</div>
        <div class="ratfooter">高于周边商家{{ sellerData.rankRate }}%</div>
      </div>
      <div class="server">
        <div class="item">
          <span class="font">服务态度</span>
          <star :size="36" :score="sellerData.foodScore"></star>
        </div>
        <div class="item">
          <span class="font">服务态度</span>
          <star :size="36" :score="sellerData.serviceScore"></star>
        </div>
        <div class="item item3">
          <span class="font">送达时间</span>
          <div class="minutes">{{ sellerData.deliveryTime }}分钟</div>
        </div>
      </div>
    </div>
    <div class="line"></div>
    <div class="container">
      <div class="class">
        <div class="filter">
          <div class="total">全部 {{ratingData.length}}</div>
          <div class="yes">满意 {{this.goodNum}}</div>
          <div class="no">不满意 {{this.badNum}}</div>
        </div>
      </div>
      <div class="title">
        <i class="icon-check_circle"></i>
        只看有内容的评价
      </div>
      <div class="content">
        <div class="main" :key="index" v-for="(item, index) in ratingData">
          <div class="top">
            <div class="headImg">
              <img :src="item.avatar" alt="">
            </div>
            <div class="name">
              <div class="text">{{ item.username }}</div>
              <star :size="24" :score="+item.score"></star>
            </div>
            <div class="arrivetime" v-if="item.deliveryTime !== ''">{{ item.deliveryTime }}分钟送达</div>
            <div class="ordertime">2016-07-13 20:33</div>
          </div>
          <div class="detail">{{ item.text }}</div>
          <div class="bottom">
            <div class="good">
              <i class="icon-thumb_up" v-if="item.rateType == 0"></i>
              <i class="icon-thumb_down" v-else-if="item.rateType == 1"></i>
            </div>
            <div class="recommands" :key="index2" v-for="(item2, index2) in item.recommend">
              <div class="recommand">{{ item2 }}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import star from '../star/star'
export default {
  data() {
    return {
      ratingData: null,
      sellerData: null,
      goodNum: null,
      badNum: null
    }
  },
  components: {
    star: star
  },
  async created() {
    const { data } = await this.$http.get('/api/ratings')
    console.log('ratings', data)
    this.ratingData = data.data
    this.ratingData.forEach(item => {
      if (+item.rateType === 0) {
        this.goodNum++
      } else if (+item.rateType === 1) {
        this.badNum++
      }
    })
    const { data: res } = await this.$http.get('/api/seller')
    console.log('seller', res.data)
    this.sellerData = res.data
  }
}
</script>

<style scoped lang="stylus">
  .rating {
    .ratbox {
      height: 88px;
      padding: 10px 0;
      box-sizing:border-box;
      display: flex;
      .score {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        width: 197px;
        height: 100%;
        border-right: 1px solid #ccc;
        .ratscore {
          font-size: 26px;
          color: rgb(255, 153, 0);
          margin-bottom: 7px;
        }
        .ratdescribe {
          color: rgb(7, 17, 27);
          font-size: 18px;
          margin-bottom: 4px;
        }
        .ratfooter {
          font-size: 10px;
          color: #ccc
        }
      }
      .server {
        width: 100%
        display: flex;
        flex-direction:column;
        justify-content: center;
        align-items: flex-start;
        padding-left: 24px;
        .item {
          display: flex;
          align-items: center;
          margin-bottom:5px;
          .font {
            height: 10px
            font-size: 14px;
            line-height: 10px;
            color: rgb(7, 17, 27);
            margin-right: 12px;
          }
          .minutes {
            color: rgb(147, 153, 159)
          }
        }
      }
    }
    .line {
      height:22px
      background-color: #f3f5f7;
      border-top: 1px solid #DBDFDE;
      border-bottom: 1px solid #DBDFDE;
    }
    .container {
      position:absolute;
      top: 286px;
      bottom: 50px;
      width: 100%
      overflow: auto;
      .class {
        box-sizing: border-box;
        padding: 10px 0 0 20px;
        height: 60px;
        .filter {
          height: 100%;
          display: flex
          padding-bottom: 15px;
          box-sizing:border-box;
          border-bottom: 1px solid #eee;
          div {
            display: flex;
            align-items: center;
            height: 100%;
            font-size: 15px
            padding: 0 12px;
            margin-right: 8px
          }
          .total {
            background-color: #1196EE;
            color: #EFF8FE;
          }
          .yes {
            background-color: #AADDFF;
            color: #5E5E5E;
          }
          .no {
            background-color: #D5D5D5;
            color: #5E5E5E;
          }
        }
      }
      .title {
        display: flex;
        align-items: center;
        color: #ccc;
        font-size: 14px;
        padding-left: 20px;
        height: 35px;
        border-bottom: 1px solid #eee;
      }
      .content {
        padding: 0 20px;
        .main {
          padding: 18px 0;
          border-bottom: 1px solid #eee;
          .top {
            display: flex;
            position: relative;
            .headImg {
              width: 40px;
              height: 40px;
              border-radius: 40px;
              margin-right: 12px;
              overflow:hidden;
              img {
                width: 100%;
                width: 100%;
              }
            }
            .name {
              margin-right: 12px;
              .text {
                font-size: 10px
                color: rgb(7, 17, 27)
                margin-bottom: 10px;
              }
            }
            .arrivetime {
              display: flex;
              align-items: flex-end;
              font-size: 10px;
              font-weight: 200;
              color: rgb(147, 153, 159)
            }
            .ordertime {
              position: absolute;
              right: 0;
              bottom: 0;
              font-size: 10px;
              font-weight: 200;
              color: rgb(147, 153, 159)
            }
          }
          .detail {
            padding: 10px 46px 16px 46px;
            word-wrap:break-word;
            font-size: 12px;
            color: rbd(7, 17, 27);
            line-height: 18px;
          }
          .bottom {
            display: flex;
            .good {
              font-size: 12px;
              margin-right: 8px;
              .icon-thumb_up {
                color: rgb(0, 160, 220);
              }
              .icon-thumb_down {
                color: #ccc;
              }
            }
            .recommands {
              display: flex;
              .recommand {
                border: 1px solid rgba(7, 17, 27, .1);
                margin-right: 8px
                font-size: 9px;
                color: rgb(147, 153, 159)
              }
            }
          }
        }
      }
    }
  }
</style>
