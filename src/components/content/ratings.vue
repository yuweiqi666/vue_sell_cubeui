<template>
  <div class="box">
    <div class="top">
      <div class="ratCode">
        <div class="ratscore">123</div>
        <div class="ratContent">综合评分</div>
        <div class="ratfoot">高于周边商家69.2%</div>
      </div>
      <div class="server">
        <div>
          <span class="serverTop">服务态度</span>
          <div class="serverScore">
            <star :size="48" :score="starNum"></star>
          </div>
        </div>
        <div>服务态度</div>
        <div>配送时间</div>
      </div>
    </div>
  </div>
</template>

<script>
import star from '../star/star'
export default {
  data() {
    return {
      starNum: 5
    }
  },
  async created() {
    const { data } = await this.$http.get('/api/seller')
    console.log('sellerscore data', data)
  },
  components: {
    star: star
  }
}
</script>

<style scoped lang="stylus">
  .box {
    .top {
      height: 120px;
      padding: 18px 0;
      display: flex;
      .ratCode {
        width: 226px;
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        border-right: 1px solid #ccc;
        .ratscore {
          font-size: 24px;
          color: rgb(255, 153, 0);
          margin-bottom: 6px;
        }
        .ratContent {
          font-size: 12px;
          color: rgb(7, 17, 27);
          margin-bottom: 8px;
        }
        .ratfoot {
          font-size: 10px;
          color: rgb(7, 17, 27);
        }

      }
      .server {
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        align-items: center;
        height: 100%;
        width: 100%;
        background-color: pink;
      }
    }
  }
</style>
