// import Vue from 'vue'
import ComponentList from '@/components/components-store'
import LayoutList from '@/components/layout-store'

import Vue from 'vue'
const register = {
  install: () => {
    console.log('plugin install')
    for (let com in ComponentList) {
      Vue.component(com, ComponentList[com])
    }
    for (let layout in LayoutList) {
      Vue.component(layout, LayoutList[layout])
    }
    Vue.component('components-proxy', {
      props: {
        name: {
          type: String,
          required: true
        },
        props: {
          type: Object,
          default: () => {}
        },
        styles: {
          type: Object,
          default: () => {}
        }
      },
      render (createElement) {
        let VNode = createElement(this.name, {
          props: {
            data: this.props,
            styles: this.styles
          }
        })
        return VNode
      }
    })
  }
}
export default register
