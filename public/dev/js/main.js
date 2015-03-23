var tempVar;


$(document).ready(function(){
	addBinders();
    $('.form form query').focus();

    $('button').click(function(){
        tempVar = $('#query').val();
        
        setTimeout(function(){ 
        $('#test').text(tempVar);
        $('#processing-modal').modal('hide') ;
        }, 3000);

    });

});


var addBinders = function addBinders() {
	$('.form form').find('input').on('focus', function(){
		var content = $(this).val();
		if(content === "") {
			$(this).val("http://");
		}
	});

	$('.form form').find('input').on('blur', function(){
		if($(this).val() === "http://") {
			$(this).val("");
		}
	});
};