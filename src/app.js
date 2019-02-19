import Vue from 'vue';
import wordCount from './models/WordCounter.js';

document.addEventListener('DOMContentLoaded', () => {
	new Vue({
		el: "#app",
    data: {
     textInput: "",
     number: null,
   },
   methods: {
     wordCount: function(){
       if(this.textInput != ""){
       this.number = wordCount(this.textInput);
     }
     }
   }
 });
});
