import Vue from 'vue'
import App from './App.vue'

Vue.directive('highlight', {
  bind(el, bindind, vnode) {
    // el.style.backgroundColor = 'green'
    // el.style.backgroundColor = bindind.value
    let delay = 0;
    if (bindind.modifiers['delayed']) {
      delay = 3000;
    }

    setTimeout(() => {
      if(bindind.arg == 'background'){
        el.style.backgroundColor = bindind.value
      } else {
        el.style.color = bindind.value
      }
    }, delay)
  }
});

new Vue({
  el: '#app',
  render: h => h(App)
})
