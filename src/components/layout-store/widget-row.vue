<template>
  <div class="row-fluid clearfix">
    <!-- 渲染Column -->
    <components-proxy v-for="(col, index) in data.children.datas.cols" :name="data.children.components" :key="index" :props="{col: col, functions: getColumns}"></components-proxy>
  </div>
</template>

<script>
import draggable from 'vuedraggable'
export default {
  name: 'l-6-6',
  components: {draggable},
  props: ['data'],
  data () {
    return {
      columnList: [],
      rowComponent: {
        'component': 'WidgetRow'
      }
    }
  },
  computed: {
    dragOptions () {
      return {
        animation: 0,
        group: 'description',
        ghostClass: 'ghost'
      }
    }
  },
  watch: {
    columnList (newVale) {
    }
  },
  methods: {
    getColumns (data) {
      if (this.rowComponent['children']) {
        this.rowComponent['children'].push(data)
        this.data.functions(this.rowComponent, false)
      } else {
        this.rowComponent['children'] = []
        this.rowComponent['children'].push(data)
        this.data.functions(this.rowComponent, false)
      }
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
