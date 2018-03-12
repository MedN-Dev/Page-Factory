<template>
  <a :href="data.link" class="widget-product-item">
    <div class="product-image">{{data.upload}}</div>
    <div class="product-name">{{data.name}}</div>
    <div class="product-desc">{{data.desc}}</div>
    <div class="product-info">{{data.info_1}}</div>
    <div class="product-info">{{data.info_2}}</div>
  </a>
</template>
<script>
export default {
  name: 'product-item',
  props: {
    data: {}
  },
  data () {
    return {
    }
  },
  methods: {
  },
  mounted () {
  }
}
</script>
<style lang="less">
  .widget-product-item {
    text-align: center;
    display: block;
    background-color: #fff;
    border: 1px solid #868686;
    width: 150px;
    .product-image {
      display: inline-block;
      width: 100%;
      border: 1px dotted #868686;
      background-color: #bfbfbf;
    }
    .product-name {
      padding-top: 10px;
      padding-bottom: 5px;
      font-weight: 700;
      font-size: 15px;
    }
    .product-desc {
      font-weight: 700;
      font-size: 15px;
    }
    .product-info {
      padding: 10px 0 9px 0;
      font-size: 10px;
      font-weight: 600;
      color: #9d9d9d;
    }
  }
</style>
