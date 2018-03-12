<template>
  <div class="container">
    <div class="row">
        <div class="compoments col-md-4">
          <components-store>
            <components-proxy :name="'ProductItem'" :props="componentsData"></components-proxy>
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
  components: { ComponentsStore, PreviewWindow },
  data () {
    return {
      componentsData: {
        image_url: 'https://sr-img.oss-cn-beijing.aliyuncs.com/OSS/2017/11/03/2e0b0c1d-9b61-45e8-a0db-98a4ab652913.jpg?x-oss-process=image/resize,w_320,h_320/quality,Q_80'
      }
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
      display: inline-block;
    }
  }
</style>
