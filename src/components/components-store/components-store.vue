<template>
  <div class="panel panel-default">
    <div class="panel-heading">
      请选择组件
    </div>
    <div class="panel-body">
      <slot></slot>
    </div>
  </div>
</template>
<script>
import ComponentList from 
export default {
  name: 'components-store',
  data () {
    return {}
  }
}
</script>
<style lang="less" scope>
  .components-store{
    .header{
      height: 20px;
      .store-header{
        width: 100%;
        display: block;
      }
    }

  }
</style>
