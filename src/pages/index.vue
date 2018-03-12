<template>
  <div class="container">
    <div class="row">
        <div class="compoments col-md-4">
          <components-store>
            
          </components-store>
        </div>
        <div class="preview col-md-8">
          <preview-window></preview-window>
        </div>
    </div>
    <div class="factory">
    </div>
  </div>
</template>
<script>
import ComponentsStore from '@/components/components-store/components-store'
import PreviewWindow from '@/components/preview-window/preview-window'
export default {
  name: 'index',
  components: { ComponentsStore, PreviewWindow }
}
</script>
<style lang="less">
  .container{
    width: 100%;
    .compoments{
    }
    .preview {
      display: inline-block;
    }
  }
</style>
