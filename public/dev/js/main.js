var tempVar = "Hello World!";


$(document).ready(function(){
    $('button').click(function(){
        tempVar = $('#query').val();
        $('#test').text(tempVar);
        console.log('okay');
    });
});
console.log(tempVar);
