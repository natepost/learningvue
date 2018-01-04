/* eslint no-console: 0 */
// Run this example by adding <%= javascript_pack_tag 'hello_vue' %> (and
// <%= stylesheet_pack_tag 'hello_vue' %> if you have styles in your component)
// to the head of your layout file,
// like app/views/layouts/application.html.erb.
// All it does is render <div>Hello Vue</div> at the bottom of the page.

// If the using turbolinks, install 'vue-turbolinks':

// yarn add 'vue-turbolinks'

// Then uncomment the code block below:

 import Vue from 'vue/dist/vue.esm'
 import App from './app.vue'
 import TurbolinksAdapter from 'vue-turbolinks';

 Vue.use(TurbolinksAdapter)

 document.addEventListener('turbolinks:load', () => {
   document.body.appendChild(document.createElement('hello'))
   const app = new Vue({
     el: '#hello',
     template: '<App/>',
     components: { App }
   })
   console.log(app)
 })
