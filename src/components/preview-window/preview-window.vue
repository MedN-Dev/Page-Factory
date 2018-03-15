<template>
  <div class="container-fluid">
    <draggable v-model="list" :options="dragOptions" element="div" class="preview-window">
      <div v-for="(element, index) in list" :key="index">
        <components-proxy :name="element.components" :props="{children: element.children, functions: getRow}"></components-proxy>
      </div>
    </draggable>
  </div>
</template>
<script>
import draggable from 'vuedraggable'
export default {
  name: 'preview-window',
  components: { draggable },
  props: ['getResult'],
  computed: {
    dragOptions () {
      return {
        animation: 0,
        group: 'layout',
        ghostClass: 'ghost'
      }
    },
    list: {
      get () {
        return this.innerlist
      },
      set (val) {
        this.innerlist = val
      }
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
  data () {
    return {
      innerlist: [],
      containerComponent: {
        component: 'WidgetContainer',
        children: []
      }
    }
  },
  watch: {
    list (newValue) {
    }
  }
}
</script>
<style lang="less">
  .preview-window{
    background-color: orange;
    min-height: 1000px;
  }
</style>
