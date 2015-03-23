var url;
var res= [
			{
		        "question": "Is my data being sold to third-parties?",
		        "res": 0
		        
		    },
		    {
		        "question": "Is data transfered by this website encrypted?",
		        "res": 0
		        
		    },
		    {
		        "question": "Does this website store my data even when it's no longer needed?",
		        "res": 1
		        
		    },
		    {
		        "question": "Will advertisers have access to my data?",
		        "res": 0
		        
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
        url = $('#query').val();
        $('#test').text("");
        setTimeout(function(){ 
        display(res);
        EPPZScrollTo.scrollVerticalToElementById('test', 20);
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
	 
	results[0]['bad'] = "Your Data May Be Exchanged or Sold to Third Parties";
	results[0]['badText'] = "This means that a website is collecting data about you and selling or 
							 trading it with another organization, government, or person. An example of 
							 this is where a shopping website collects data about your shopping preferences,
							 frugality, and ip address and sells that info to data aggregators or to other 
							 e-commerce sites directly.";
	results[0]["badImage"] = "<img class='image' src='build/img/thirdpart1.png'>";
	results[0]["good"] = "Your Data will Never Be Exchanged or Sold to Third Parties";
	results[0]["goodText"] = "The site that is collecting data about you is not trading or 
						      selling it. It will only share your data with other organizations 
						      in order to carry out the intended transaction.";
	results[0]["goodImage"] = "<img class='image' src='build/img/thirdpart2.png'>";	
		    


    results[1]["bad"] = "Personal Data May Be Stored in Unencrypted Form";
    results[1]["badText"] = "This means your data is stored as is in the servers,
   							 and in the event of being stolen it will be fully acessible.";
    results[1]["badImage"] = "<img class='image' src='build/img/encrypt1.png'>";
    results[1]["good"] = "No Personal Data are Retained in Unencrypted Form";
    results[1]["goodText"] = "This means that your data is always stored using encryption,
    						 ensuring your data is safe in case it gets stolen.";
	results[1]["goodImage"] = "<img class='image' src='build/img/encrypt2.png'>";


		     
    results[2]["bad"] = "Data May Be Kept Indefinitely";
    results[2]["badText"] = "This means your data might never be deleted from the provider's servers.";
    results[2]["badImage"] = "<img class='image' src='build/img/datakeep1.png'>";
    results[2]["good"] = "Data is Kept for Less than a Month";
    results[2]["goodText"] = "Your data is deleted before 1 month from the date
    						 of transmission have elapsed, respectively.";
    results[2]["goodImage"] = "<img class='image' src='build/img/datakeep2.png'>";

	
    results[3]["bad"] = "Your Data May Be Given to Advertisers";
    results[3]["badText"] = "This means that a site either shares the data it has
    						 about you with marketing or advertising companies or allows 
    						 those companies to collect info about you while on its site.";
    results[3]["badImage"] = "<img class='image' src='build/img/advertise1.png'>";
    results[3]["good"] = "Your Data is Never Given to Advertisers";
    results[3]["goodText"] = "Besides the information exposed via on-page advertisement, the 
    							site does not share the data it collects about you with advertisers.";
	results[3]["goodImage"] = "<img class='image' src='build/img/advertise2.png'>";


	$('#test').append("<div class='col-md-10 col-md-offset-1' style='margin-top:3%'> <h2><small>Here is <i>" + url + 
						"</i> Overview of its Terms and Condition: </small></h2></div>");
	results.forEach(function(arr){
		console.log(arr.question);
		if(arr.res == 0) {
			$('#test').append('<div class = "row" style="margin-top: 5%">' +
							  '<div class="col-xs-1 col-xs-offset-2">' + arr.badImage + '</div>'+ 
			                  '<div class="col-xs-8 col-xs-offset-1"> <h4><b>' + arr.bad + '</b></h4><p>'+ 
			                   arr.badText +'</p></div></div>');
		} else {
			$('#test').append('<div class = "row" style="margin-top: 5%">' +
							  '<div class="col-xs-1 col-xs-offset-2">' + arr.goodImage +' </div>' +
			                  '<div class="col-xs-8 col-xs-offset-1"> <h4><b>' +  arr.good + '</b></h4><p>'+
			                   arr.goodText +'</p></div></div>');
		}




	});
}