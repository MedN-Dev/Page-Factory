<template>
  <!-- 渲染Row -->
  <div class="container-fluid">
    <components-proxy :name="data.children.components" :props="{children: data.children.children, functions: getRow}"></components-proxy>
  </div>
</template>

<script>
export default {
  name: 'widge-column',
  props: ['data'],
  data () {
    return {
    }
  },
  methods: {
    getRow (data, needNew) {
      if (needNew) {
        this.containerComponent['children'].push(data)
      } else {
        this.containerComponent['children'] = data
      }
      console.log(JSON.stringify(this.containerComponent))
    }
  },
  mounted () {
  }
}
</script>

<style lang="less">
  .row-fluid{
    background-color: #F5F5F5;
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
    -webkit-box-shadow: inset 0 1px 13px rgba(0, 0, 0, 0.1);
    -moz-box-shadow: inset 0 1px 13px rgba(0, 0, 0, 0.1);
    box-shadow: inset 0 1px 13px rgba(0, 0, 0, 0.1);
    border: 1px solid #DDDDDD;
    border-radius: 4px 4px 4px 4px;
    margin: 15px 0;
    position: relative;
    padding: 25px 14px 0;
  }
  .column{
    background-color: #FFFFFF;
    border: 1px solid #DDDDDD;
    border-radius: 4px 4px 4px 4px;
    margin: 15px 0;
    padding: 39px 19px 24px;
    position: relative;
  }
</style>
