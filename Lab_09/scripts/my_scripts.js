$(document).ready(function(){
    var headclix = 0, eyeclix=0,noseclix=0,mouthclix=0;
    lightning_one();
    lightning_two();
    lightning_three();
    
    $("#head").click(function(){
        if (headclix <9){
            $(this).animate({left:"-=367px"},500);
            headclix +=1;
        }
        else{
            $(this).animate({left:"0px"},500);
            headclix =0;
        }
    });
    $("#eyes").click(function(){
        if (headclix <9){
            $(this).animate({left:"-=367px"},500);
            headclix +=1;
        }
        else{
            $(this).animate({left:"0px"},500);
            headclix =0;
        }
    });

    $("#nose").click(function(){
        if (headclix <9){
            $(this).animate({left:"-=367px"},500);
            headclix +=1;
        }
        else{
            $(this).animate({left:"0px"},500);
            headclix =0;
        }
    });
    $("#mouth").click(function(){
        if (headclix <9){
            $(this).animate({left:"-=367px"},500);
            headclix +=1;
        }
        else{
            $(this).animate({left:"0px"},500);
            headclix =0;
        }
    });

});//end doc.onready function

function lightning_one(){
$("#lightning1").fadeIn(250).fadeOut(250);
setTimeout("lightning_one()",4000);

};

function lightning_two(){
    $("#lightning2").fadeIn("fast").fadeOut("fast");
    setTimeout("lightning_one()",5000);
    
    };

    function lightning_three(){
        $("#lightning3").fadeIn("fast").fadeOut("fast");
        setTimeout("lightning_one()",7000);
        
        };

