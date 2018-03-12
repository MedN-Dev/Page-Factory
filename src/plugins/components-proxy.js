// import Vue from 'vue'
import ComponentList from '@/components/components-store'
import Vue from 'vue'
const register = {
  install: () => {
    for (let com in ComponentList) {
      Vue.component(com, ComponentList[com])
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
        console.log(VNode)
        return VNode
      }
    })
  }
}
export default register
