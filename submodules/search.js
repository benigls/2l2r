 var dont_search = false;

 function server_communication(main_url){

        // $(".output").removeClass("open").slideUp();
        // $(".loading").fadeIn();
        // var url = 'server_side/backend.php';
        // $.post(url,{
        //     main_url: main_url
        // },function(content){
        //     dont_search = false;
        //     var json_object = $.parseJSON(content);
        //     populate_popup(json_object);
        //     $(".hero").addClass("results");
        //     $(".output").toggleClass("open").slideDown();
        //     $(".loading").fadeOut();
        // });
    }
    
    $("#search").submit(function( event ) {
        if(!dont_search){
            dont_search = true;
            // server_communication(
                alert($('.form-control input-lg').val());
        }
        event.preventDefault();
    });