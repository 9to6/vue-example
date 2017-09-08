import Vue from 'vue'
import Hello from '@/components/Hello'
import router from '@/router'

describe('Hello.vue', () => {
  it('should render correct contents', () => {
    const Constructor = Vue.extend(Hello)
    const vm = new Constructor({router}).$mount()
    expect(vm.$el.querySelector('.hello h1').textContent)
      .to.equal('Welcome to Your Vue.js App')

    const button = vm.$el.querySelector('button')
    const clickEvent = new window.Event('click')
    button.dispatchEvent(clickEvent)
    vm._watcher.run()
    expect(vm.$el.querySelector('p').textContent).to.contains('4')
    button.dispatchEvent(clickEvent)
    vm._watcher.run()
    expect(vm.$el.querySelector('p').textContent).to.contains('9')
  })
})
