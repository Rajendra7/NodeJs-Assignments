var person = {
    firstname : 'Rajendra',
    lastname : 'Kappala',
    greet : function(){
        console.log('Hello' + this.firstname + '' + this.lastname);

    }
};

person.greet();

console.log(person['firstname']);