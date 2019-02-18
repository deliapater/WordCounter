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
       this.number = wordCount(this.textInput);
     }
   }
 });
});
