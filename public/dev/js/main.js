var tempVar;
var res= [
		    {
		        "question": "Is my data being sold to third-parties?",
		        "res": 1
		    },
		    {
		        "question": "Is data transfered by this website encrypted?",
		        "res": 0
		    },
		    {
		        "question": "Does this website store my data even when it's no longer needed?",
		        "res": 0
		    },
		    {
		        "question": "Will advertisers have access to my data?",
		        "res": 1
		    }
		];


$(document).ready(function(){
	addBinders();
    
    $('.form query').focus();

    $("#query").keyup(function(event){
    if(event.keyCode == 13){
        $("button").click();
	    }
	});

    $('button').click(function(){
        tempVar = $('#query').val();
        $('#test').text("");
        setTimeout(function(){ 
        display(res);
        EPPZScrollTo.scrollVerticalToElementById('footer', 20);
        $('#processing-modal').modal('hide');
        }, 3500);
    });


});


function addBinders() {
	$('.form').find('input').on('focus', function(){
		var content = $(this).val();
		if(content === "") {
			$(this).val("http://");
		}
	});

	$('.form').find('input').on('blur', function(){
		if($(this).val() === "http://") {
			$(this).val("");
		}
	});
};

function display(results){
	$('#test').append('<div class= "col-md-14"> <h2>' +tempVar+ '</h2></div>');
	results.forEach(function(rez){
		console.log(rez.question);
		if(rez.res== 0) {
			$('#test').append('<div class = "row" style="margin-top: 5%">'+
							  ' <div class="col-xs-1 col-xs-offset-3">' +
			                  '<i class="fa fa-minus-square fa-5x" style="color:#F75D59"></i></div>'+ 
			                  '<div class="col-xs-8"> <h4>' + rez.question + '</h4>&nbsp;'+ 
			                   rez.res +'</div></div>');
		} else {
			$('#test').append('<div class = "row" style="margin-top: 5%">'+
							  ' <div class="col-xs-1 col-xs-offset-3">' +
			                  '<i class="fa fa-plus-square fa-5x" style="color:#3BB9FF"></i></div>' +
			                  '<div class="col-xs-8"> <h4>' +  rez.question + '</h4>&nbsp;'+
			                   rez.res +'</div></div>');
		}




	});
}