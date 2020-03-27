function change(b) {                //pass by value
    b=2;
}

var a=1;
change(a);
console.log(a);



//pass by reference

function changeObj(d) {
    d.prop1 = function() {};
    d.prop2 = {};
}

var c= {};
c.prop1 = {};
console.log(c);