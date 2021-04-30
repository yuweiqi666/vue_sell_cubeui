<template>
  <div class="seller">
    <div class="sellertitle">
      <div class="sellername">
        <div class="realname">
          <div class="name">{{ sellerData.name }}</div>
          <star :size="36" :score="sellerData.score" class="star"></star>
          <span class="num">(661)</span>
        </div>
        <div class="savenum">月售690单</div>
        <div class="save">
          <i class="icon-favorite"></i>
          <span class="savestatus">已收藏</span>
        </div>
      </div>
      <div class="sellerdetail">
        <div class="item">
          <div class="pricetext">起送价</div>
          <div class="price">{{sellerData.minPrice}}
            <span>元</span>
          </div>
        </div>
        <div class="item">
          <div class="pricetext">商家配送</div>
          <div class="price">{{sellerData.deliveryPrice}}
            <span>元</span>
          </div>
        </div>
        <div class="item">
          <div class="pricetext">平均配送时间</div>
          <div class="price">{{sellerData.sellCount}}
            <span>分钟</span>
          </div>
        </div>
      </div>
    </div>
    <div class="line"></div>
    <div class="content">
        <div class="title">公告与活动</div>
        <div class="main">
          <div class="miandescribe">
            {{sellerData.bulletin}}
          </div>
        </div>
        <div class="title">商家实景</div>
        <div class="photos">
          <div class="item">
            <div class="photo" :key="index" v-for="(item, index) in sellerData.pics">
              <img :src="item" alt="">
            </div>
          </div>
        </div>
    </div>
    <div class="line"></div>

  </div>
</template>

<script>
import star from '../star/star'
export default {
  data() {
    return {
      sellerData: null
    }
  },
  components: {
    star: star
  },
  async created() {
    const { data } = await this.$http.get('/api/seller')
    console.log('商家', data)
    this.sellerData = data.data
  }
}
</script>

<style scoped lang="stylus">
  .seller {
      position: absolute;
      top: 174px;
      bottom: 50px;
      width: 100%;
      overflow: auto;
      .sellertitle {
        .sellername {
          padding: 20px 0 10px 0;
          margin: 0 20px;
          position: relative;
          display: flex;
          border-bottom: 1px solid #ccc;
          .realname {
            .name {
              font-size: 16px;
              color: rgb(7, 17, 27)
            }
            .num {
              display: inline-block;
              font-size: 10px;
              color: rgb(77, 85, 93)
            }
            .star {
              margin-right: 6px;
              vertical-align:middle;
            }
          }
          .savenum {
            position: absolute;
            left: 134px
            bottom: 23px;
            font-size: 10px
            color: rgb(77, 85, 93)
          }
          .save {
            position: absolute;
            right: 0;
            display: flex;
            flex-direction: column;
            align-items:center;
            justify-content:center;
            .icon-favorite {
              color: red;
              font-size: 24px;
              line-height: 24px;
            }
            .savestatus{
              font-size: 10px;
              color: rgb(77, 85, 93)
              line-height: 29px
            }
          }
        }
        .sellerdetail {
          display: flex;
          justify-content: space-around;
          align-items: center;
          padding: 18PX 0 10px 0;
          border-bottom: 1px solid #ccc;
          .item {
            display: flex;
            flex-direction: column;
            justify-content: space-around;
            align-items: center;
            .pricetext {
              font-size: 10px;
              color: rgb(147, 153, 159)
            }
            .price {
              font-size: 24px
              font-weight: 200,
              color: rgb(7, 17, 27)
              span {

              }
            }
          }
        }
      }
      .line {
        height:22px
        background-color: #f3f5f7;
        border-bottom: 1px solid #DBDFDE;
      }
      .content {
        padding: 18px 25px 10px 25px;
        .title {
          font-weight: 700;
          margin-bottom: 8px;
        }
        .main {
          padding: 0 12px;
          word-wrap:break-word;
          .miandescribe {
            color: rgb(240, 20, 20)
            line-height: 18px
            font-weight: 200
            font-size: 15px
            padding-bottom: 28px
            border-bottom: 1px solid #eee;
          }
        }
        .photos {
          overflow: auto;
          .item {
            width: 330%
            .photo {
              display: inline-block;
              width: 240px;
              height: 180px;
              margin-right: 10px
              img {
                width: 100%
                height: 100%
              }
            }

          }
        }
      }

  }
  .star-36 {
    .star-item {
      margin-right: 5px;
    }
  }
</style>
