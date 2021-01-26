<template>
  <div class="titleMessage">
    <p class="left"></p>
    <h1 class="message">{{ message }}</h1>
    <p class="right"></p>
  </div>
</template>

<script>
export default {
  props: {
    message: {
      type: String
    }
  }
}
</script>

<style scoped lang="stylus">
  @import "../../common/stylus/mixin.styl"
  .titleMessage {
    display: flex;
    flex-direction: row;
    align-items: space-between;
    padding: 20px 0 32px 0;
  }
  .left,
  .right {
    border-1px(rgba(255, 255, 255, 0.5));
    width: 100px;
  }
  .message {
    color: rgb(255, 255, 255);
    font-weight: 700;
    transform: translate(0, 50%);
    padding: 0 12px;
  }
</style>
