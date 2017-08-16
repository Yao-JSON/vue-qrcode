<template>
  <div class="person">
    <div class="content-wrapper">
      <div class="content">
        <div class="con-header clear">
          <div class="img-wrapper">
            <img :src="personDetail.img" alt="">
          </div>
          <div class="info">
            <div class="name">{{personDetail.name}}</div>
            <div class="phone">{{personDetail.phone}}</div>
          </div>
        </div>
        <!-- 二维码 -->
        <div class="qrcode-wrapper" ref="canvas-wrapper">
          <img :src="qrcodeImage">
          <div class="text">扫一扫，了解我</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6" src="./person.js"></script>

<style lang="stylus" rel="stylesheet/stylus">
  @import "./person.styl";
</style>
