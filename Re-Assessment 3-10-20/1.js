$('.one').click(
    function(){
        var color = $(this).css("background-color");
        $('#display').css("background-color", color);
        
    }
);

$('.two').click(
    function(){
        var color = $(this).css("background-color");
        $('#display').css("background-color", color);
        
    }
);

$('.three').click(
    function(){
        var color = $(this).css("background-color");
        $('#display').css("background-color", color);
        $('#display').text("3");
    }
);

$('.four').click(
    function(){
        var color = $(this).css("background-color");
        $('#display').css("background-color", color);
        $('#display').text("4");
        
    }
);

$('.five').click(
    function(){
        var color = $(this).css("background-color");
        $('#display').css("background-color", color);
        $('#display').text("5");
        
    }
);

$('.six').click(
    function(){
        var color = $(this).css("background-color");
        $('#display').css("background-color", color);
        $('#display').text(Math.random > 10)
        
    }
);

$('.box').click(
    function(){
        var myColor=$(this).css('background-color');
        $('#display').css('background-color', myColor);
    }
);

$('.color3, .color4').click(
    function(){
        $('#display').css('color', $(this).css('color'));
        $('#display').text($(this).text());
    }
);