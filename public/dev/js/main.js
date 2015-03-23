var tempVar;


$(document).ready(function(){
    $('button').click(function(){
        setTimeout(function(){ 
        tempVar = $('#query').val();
        $('#test').text(tempVar);
        $('#processing-modal').modal('hide') ;
        }, 3000);

    });
});
