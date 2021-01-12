class StrangerStrings {

    getHelloWorld(){
        return "Hello World";
    }

    concatenation(firstSegment, secondSegment){
        return firstSegment + secondSegment ;
    }

    getPrefix(input){
        return input.substr(0, 3);
    }

    getSuffix(input){
        var n = input.length - 3;
        return input.substr(n, 3);
    }

    getMiddleCharacter(input){
        var position;
        var length;

        if(input.length % 2 == 1) {
            position = input.length / 2;
            length = 1;
        } else {
            position = input.length / 2 - 1;
            length = 2;
        }

        return input.substring(position, position + length);
    }

    getFirstWord(input){
        var n = input.split(" ");
        return n[0];
    }
    
    getSecondWord(spaceDelimnatedInput){
        var n = spaceDelimnatedInput.split(" ");
        return n[1];
    }
    
    reverse(input){
        return input.split("").reverse().join("");
    }
}

module.exports = StrangerStrings;