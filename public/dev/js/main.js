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
    $('.form form query').focus();

    $('button').click(function(){
        tempVar = $('#query').val();
        
        setTimeout(function(){ 
        display(res);
        $('#processing-modal').modal('hide') ;
        }, 3000);

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
	$('#test').text(results.forEach(function(rez){
		console.log(rez.question);
		$('#test').append('<div class = "col-md-10 col-md-offset-1">' + rez.question + '</div>');
	}));
}