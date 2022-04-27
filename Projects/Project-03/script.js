function UpdateFlyingObj (event) {
	var mouseX = Math.round (event.clientX);
	var mouseY = Math.round (event.clientY);

	var flyingObj = document.getElementById ("flying");
	flyingObj.style.left = mouseX + "px";
	flyingObj.style.top = mouseY + "px";

}

$(document).ready(function(){

	$('.blue-circle').draggable();

	$('.red-circle').droppable({
		drop:function(){
			$('.popup')
			.addClass('show')
			.add('p')
			.html('loremispum');
		}
	});
});

Vue.component('falling', {
	template: "#falling",
  })
  
  new Vue({
	el: '#app',
	data() {
	  return {
	  }
	},
	computed:{},
	methods:{}
});