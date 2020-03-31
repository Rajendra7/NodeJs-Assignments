function greet(){       //function
    console.log('hi');
}
greet();


function greetingLog(fn){
    fn();
}

greetingLog(greet);         //first class function



var greetMe = function(){           //fly function
    console.log('Hi Raj!');
}
greetMe();

greetingLog(greetMe);


greetingLog(function(){
    console.log('Hello Raj!');
})