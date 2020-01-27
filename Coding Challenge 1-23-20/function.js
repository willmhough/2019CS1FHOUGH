//Challenge 1
function noVowels() {
    var vowels='aeiou';
    var noVowelsString="";
    
    
    for(var i=message.length-1; i>=0; i--){
        var currLetter=message.charAt(i);
        if(vowels.indexOf(currLetter)<0)
            noVowelsString += currLetter;
    }

    return noVowelsString;

}

message="Hello how are you?";
console.log(noVowels(message));

function everyOther(message){
    var string="";

    for(var i=0; i<message.length; i+=4){
        var fourthLetter=message.charAt(i);
    }
    return string
}

message="Hello, how are you?"
console.log(everyOther(message));