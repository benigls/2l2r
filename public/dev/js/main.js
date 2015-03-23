var tempVar;
var res= [
		    {
		        "question": "Is my data being sold to third-parties?",
		        "res": 1,
		        "good": "<i class='fa fa-plus-square fa-5x' ",
		        "bad": "<i class='fa fa-minus-square fa-5x'"
		    },
		    {
		        "question": "Is data transfered by this website encrypted?",
		        "res": 0,
		        "good": "<i class='fa fa-plus-square fa-5x' ",
		        "bad": "<i class='fa fa-minus-square fa-5x' "
		    },
		    {
		        "question": "Does this website store my data even when it's no longer needed?",
		        "res": 0,
		        "good": "<i class='fa fa-plus-square fa-5x'",
		        "bad": "<i class='fa fa-minus-square fa-5x' "
		    },
		    {
		        "question": "Will advertisers have access to my data?",
		        "res": 1,
		        "good": "<i class='fa fa-plus-square fa-5x' ",
		        "bad": "<i class='fa fa-minus-square fa-5x'"
		    }
		];


$(document).ready(function(){
	addBinders();
    $('.form form query').focus();

    $('button').click(function(){
        tempVar = $('#query').val();
        $('#test').text("");
        setTimeout(function(){ 
        display(res);
        EPPZScrollTo.scrollVerticalToElementById('footer', 20);
        $('#processing-modal').modal('hide') ;
        
        }, 1000);
        
    });

});


function addBinders() {
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

function display(results){
	$('#test').append('<div class= "col-md-14"> <h2>' +tempVar+ '</h2></div>');
	results.forEach(function(rez){
		console.log(rez.question);
		if(rez.res== 0) {
			$('#test').append('<div class = "row" style="margin-top: 5%"> <div class="col-xs-1 col-xs-offset-3">' +
			                   rez.bad +'style="color:#F75D59"></i></div> <div class="col-xs-8"> <h4>' + 
				               rez.question + '</h4>&nbsp;'+ rez.res +'</div></div>');
		} else {
			$('#test').append('<div class = "row" style="margin-top: 5%"> <div class="col-xs-1 col-xs-offset-3">' +
			                   rez.good +'style="color:#3BB9FF"></i></div><div class="col-xs-8"> <h4>' + 
				               rez.question + '</h4>&nbsp; '+ rez.res +'</div></div>');
		}



	});
}