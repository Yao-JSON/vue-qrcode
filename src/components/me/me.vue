<template>
  <div class="me"  >
    <div class="back-wrapper">
      <Back :backText="backText" :centerText="centerText" @go-back="_goBack" ></Back>
    </div>
    <div class="content-wrapper" ref="me-content">
      <div class="content" >
        <div class="header border-1px">
          <span class="title">头像</span>
          <div class="img-wrapper ">
            <img :src="personDetail.img"/>
            <span class="icon-right"></span>
          </div>
        </div>
        <!-- 基本信息 -->
        <ul class="list-wrapper">
          <li v-for="(item,key) in base" :key="key" class="list">
            <div class="title">{{item.key}}</div>
            <div class="value" v-if="item.value">
              <span class="text">{{item.value | noText}}</span>
              <span class="icon-right"></span>
            </div>
            <div @click="_showPerson" class="value" v-if="!item.value">
              <span class="icon-qrcore"></span>
              <span class="icon-right"></span>
            </div>
          </li>
        </ul>
        <Split></Split>
        <!-- 主要信息 -->
        <ul class="list-wrapper">
          <li v-for="(item,key) in main" :key="key" class="list">
            <div class="title">{{item.key}}</div>
            <div class="value">
              <span class="text">{{item.value | noText}}</span>
              <span class="icon-right"></span>
            </div>
          </li>
        </ul>
        <Split></Split>
        <!-- 额外信息 -->
        <ul class="list-wrapper">
          <li v-for="(item,key) in main" :key="key" class="list">
            <div class="title">{{item.key}}</div>
            <div class="value">
              <span class="text">{{item.value | noText}}</span>
              <span class="icon-right"></span>
            </div>
          </li>
        </ul>
      </div>
    </div>
    <!-- 点击生成二维码 -->
    <transition name="fold">
      <Person v-show="personShow" :personDetail="personDetail"></Person>
    </transition>
  </div>
</template>

<script type="text/ecmascript-6" src="./me.js"></script>

<style lang="stylus" rel="stylesheet/stylus">
  @import "./me.styl";
</style>
