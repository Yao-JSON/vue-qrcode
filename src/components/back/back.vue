<template>
  <div class="back">
    <div class="back-app" @click="goBack">
      <span class="icon-left"></span>
      <span class="backText">{{backText}}</span>
    </div>
    <div class="center-text">
      <span>{{centerText}}</span>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    props: {
      backText: {
        type: String,
        default: '返回'
      },
      centerText: {
        type: String
      }
    },
    methods: {
      goBack () {
        this.$emit('go-back');
      }
    }
  };
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .back
    height 40px
    padding 0 15px
    font-size 0px
    background-color #000
    color #fff
    .back-app
      position  absolute
      span
        display inline-block
        vertical-align top
        font-size 15px
        line-height 40px
      .backText
        color #c0c0c0
      .icon-left
        font-size: 30px
        margin: 0 -6px

    .center-text
      color #fff
      font-size 15px
      line-height 40px
      text-align center
</style>
