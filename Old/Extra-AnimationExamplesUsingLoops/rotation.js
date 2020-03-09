/*globals TweenMax */
var startSize = 300;
var factor = .8;
for(var i=0; i<2; i++){
    var appendingTo = '[appendIndex=' + i + ']';
    var newAppendingTo = "appendIndex='" + (i+1) + "'";
    var size = "style='width:" + startSize + "px; height:" + startSize + "px'";
    $(appendingTo).append(
        "<div class='thing color" + (i%2) + " diag" + (i%2) + "' " + newAppendingTo + " " +
        size + "></div>"
    );
    var tweenTarget = "[" + newAppendingTo + "]";
    
    TweenMax.to(tweenTarget,4,{rotation:360,repeat:-1,ease:Linear.easeNone});
    startSize = Math.round(startSize*factor);
}

