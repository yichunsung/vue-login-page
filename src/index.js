import Vue from 'vue';
import App from './App.vue';


new Vue({
  el: '#app',
  mounted : function(){
  	console.log('Hello Webpack and Vue !');	 
  },
  
  components:{
  	App
  },
  template: '<App />'
});