
$(".one").click(
    function(){
        var color = $(this).css("background-color");
        $('#display').css("background-color", color);
        
    }
);

$(".two").click(
    function(){
        var color = $(this).css("background-color");
        $('#display').css("background-color", color);
        
    }
);

$(".three").click(
    function(){
        var color = $(this).css("background-color");
        $('#display').css("background-color", color);
        $('#display').text("3");
    }
);

$(".four").click(
    function(){
        var color = $(this).css("background-color");
        $('#display').css("background-color", color);
        $('#display').text("4");
        
    }
);

$(".five").click(
    function(){
        var color = $(this).css("background-color");
        $('#display').css("background-color", color);
        $('#display').text("5");
        
    }
);

$(".six").click(
    function(){
        var color = $(this).css("background-color");
        $('#display').css("background-color", color);
        $('#display').text(Math.random)
        
    }
);