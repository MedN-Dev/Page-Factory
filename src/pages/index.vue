<template>
  <div class="container">
    {{resultJSON}}
    <div class="row">
        <div class="compoments col-md-4">
          <components-store>
            <draggable element="div" v-model="componentsData" :options="dragOptions" :clone="isClone" :move="onMove"  @start="isDragging=true" @end="isDragging=false">
              <components-proxy v-for="(component,index) in componentsData" :name="component.components" :props="component.data" :key="index"></components-proxy>
            </draggable>
          </components-store>
          <layout-store>
            <draggable element="div" v-model="layoutData" :options="dragLayoutOptions" :clone="isClone" @start="isDragging=true" @end="isDragging=false">
              <div v-for="(layout, index) in layoutData" :key="index">
                {{layout.labels}}
              </div>
            </draggable>
          </layout-store>
        </div>
        <div class="preview col-md-8">
          <preview-window :getResult="getResult"></preview-window>
          <!-- <draggable v-model="list1" :options="dragOptions" element="div" style="height: 100px;">
            <div v-for="element in list1">
              {{element}}
            </div>
          </draggable> -->
        </div>
    </div>
    <div class="factory">
    </div>
  </div>
</template>
<script>
import ComponentsStore from '@/components/components-store/components-store'
import LayoutStore from '@/components/layout-store/layout-store'
import PreviewWindow from '@/components/preview-window/preview-window'
import MockData from '@/components/components-store/store-mock-data'
import LayoutData from '@/components/layout-store/layout-mock'
import draggable from 'vuedraggable'
export default {
  name: 'index',
  components: { ComponentsStore, PreviewWindow, draggable, LayoutStore },
  data () {
    return {
      componentsData: MockData,
      list1: [],
      needClone: true,
      isDragging: false,
      layoutData: LayoutData,
      resultJSON: {}
    }
  },
  computed: {
    dragOptions () {
      return {
        animation: 0,
        group: {name: 'components', pull: 'clone'},
        ghostClass: 'ghost'
      }
    },
    dragLayoutOptions () {
      return {
        animation: 0,
        group: {name: 'layout', pull: 'clone'},
        ghostClass: 'ghost'
      }
    }
  },
  methods: {
    isClone (ele) {
      return ele
    },
    onMove ({relatedContext, draggedContext}) {
      const relatedElement = relatedContext.element
      const draggedElement = draggedContext.element
      return (!relatedElement || !relatedElement.fixed) && !draggedElement.fixed
    },
    getResult (data) {
      this.resultJSON = data
    }
  },
  watch: {
    isDragging (newValue) {
      if (newValue) {
        this.delayedDragging = true
        return
      }
      this.$nextTick(() => {
        this.delayedDragging = false
      })
    }
  }
}
</script>
<style lang="less">
  .container{
    width: 100%;
    .compoments{
    }
    .preview {
    display: block;
    color: #666;
    font-size: 12px;
    line-height: 22px;
}
  }
</style>
