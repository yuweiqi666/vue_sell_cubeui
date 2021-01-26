<template>
  <div class="star" :class="starType">
    <span v-for="(itemClass, k) in itemClasses" :class="itemClass" :key="k" class="star-item"></span>
  </div>
</template>

<script>
const LENGTH = 5
const CLS_ON = 'on'
const CLS_HALF = 'half'
const CLS_OFF = 'off'

export default {
  props: {
    size: {
      type: Number
    },
    score: {
      type: Number
    }
  },
  computed: {
    starType() {
      return 'star-' + this.size
    },
    itemClasses() {
      const result = []
      const score = Math.floor(this.score * 2) / 2
      console.log('score', score)
      const hasFloat = score % 1 !== 0
      const integer = Math.floor(score)
      console.log('integer', integer)
      for (let i = 0; i < integer; i++) {
        result.push(CLS_ON)
      }
      if (hasFloat) {
        result.push(CLS_HALF)
      }
      if (result.length < LENGTH) {
        for (var i = 0; i < LENGTH - result.length; i++) {
          result.push(CLS_OFF)
        }
      }
      console.log('result', result)
      return result
    }
  }
}
</script>

<style lang="stylus">
@import "../../common/stylus/mixin.styl"
  .star-item {
    display: inline-block;
    background-repeat: no-repeat;
  }
  .star-24 .star-item {
    width: 10px;
    height: 10px;
    margin-right: 3px;
    background-size: 10px 10px;
  }
  .satr-24 .star-item:last-child {
    margin-right: 0;
  }
  .star-24 .star-item.on {
    bg-image('./img/star24_on')
  }
  .star-24 .star-item.off {
    bg-image('./img/star24_off')
  }
  .star-24 .star-item.half {
    bg-image('./img/star24_half')
  }
  .star-36 .star-item {
    width: 15px;
    height: 15px;
    margin-right: 16px;
    background-size: 15px 15px;
  }
  .star-36 .star-item:last-child {
    margin-right: 0;
  }
  .star-36 .star-item.on {
    bg-image('./img/star36_on')
  }
  .star-36 .star-item.off {
    bg-image('./img/star36_off')
  }
  .star-36 .star-item.half {
    bg-image('./img/star36_half')
  }
  .star-48 .star-item {
    width: 20px;
    height: 20px;
    margin-right: 22px;
    background-size: 20px 20px;
  }
  .star-48 .star-item:last-child {
    margin-right: 0;
  }
  .star-48 .star-item.on {
    bg-image('./img/star48_on')
  }
  .star-48 .star-item.off {
    bg-image('./img/star48_off')
  }
  .star-48 .star-item.half {
    bg-image('./img/star48_half')
  }
</style>
