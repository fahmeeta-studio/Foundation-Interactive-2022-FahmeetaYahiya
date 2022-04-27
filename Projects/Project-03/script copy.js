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