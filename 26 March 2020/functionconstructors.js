function Person(firstname, lastname) {
    this.firstname = firstname;
    this.lastname = lastname;
}

Person.prototype.greet = function(){
    console.log('Hello!', + this.firstname + ' '+ this.lastname );
};

var raj = new Person('Rajendra', 'Kappala');
raj.greet();