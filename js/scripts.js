$(document).ready(function(){
            $("#mycarousel").carousel({interval : 2000});
            $("#carousel-button").click(function(){

                if($("#carousel-button").children("span").hasClass('fa-pause')){
                    $("#mycarousel").carousel('pause');
                    $("#carousel-button").children("span").removeClass('fa-pause');
                    $("#carousel-button").children("span").addClass('fa-play');
                }
                else if($("#carousel-button").children("span").hasClass("fa-play")){
                    $("#mycarousel").carousel('cycle');
                    $("#carousel-button").children("span").removeClass("fa-play");
                    $("#carousel-button").children("span").addClass("fa-pause");
                }
                

            });
            //toggle modals
            $("#loginButton").click( function(){

                $("#loginModal").modal('toggle');
            });
            $("#reserveButton").click( function(){
                $("#reserveModal").modal('toggle');
            });
            //hide modals
             $("#loginModalHeaderButton").click( function(){
                $("#loginModal").modal('hide');
            }) 
              $("#loginModalCancelButton").click( function(){
                $("#loginModal").modal('hide');
            })
               $("#reserveModalHeaderButton").click( function(){
                $("#reserveModal").modal('hide');
            }) 
              $("#reserveModalCancelButton").click( function(){
                $("#reserveModal").modal('hide');
            })      
        }); //end ready function
