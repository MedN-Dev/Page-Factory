<template>
  <draggable element="div" v-model="itemList" :options="dragOptions" class="column" :class="data.col">
    <components-proxy v-for="(item, index) in itemList" :name="item.components" :props="item.data" :key="index"></components-proxy>
  </draggable>
</template>

<script>
import draggable from 'vuedraggable'
export default {
  name: 'widge-column',
  components: {draggable},
  props: ['data'],
  data () {
    return {
      itemList: [],
      columnComponents: {
        'components': 'WidgetColumn'
      }
    }
  },
  computed: {
    dragOptions () {
      return {
        animation: 0,
        group: 'components',
        ghostClass: 'ghost'
      }
    }
  },
  watch: {
    itemList (newVal) {
      this.columnComponents['datas'] = {cols: this.data.col}
      this.columnComponents['children'] = newVal
      this.data.functions(this.columnComponents)
    }
  },
  mounted () {
    console.log(this.data)
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
