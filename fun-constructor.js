function Adress (city, street, buildingNumber) {
    this.city = city;
    this.street = street;
    this.buildingNumber = buildingNumber;
}
Adress.prototype.fullAdress = function (){
    return this.city + " " + this.street + " " + this.buildingNumber
}

function person (firstName, lastName){
   this.firstName = firstName;
   this.lastName = lastName;
}

person.prototype.fullName = function(){
    return this.firstName + " " + this.lastName
}

function customer (firstName, lastName, city, street, buildingNumber) {
    person.call (this, firstName, lastName)
    this.adress = new Adress (city, street, buildingNumber)
}

customer.prototype = object.create (person.prototype)

customer.prototype.customerDetails = 
function(){
    return (this.fullName() + " " + this.adress.city + " " + this.adress.street + " " + this.adress.buildingNumber)
}

const myCustomer = new customer ('Aziz edriss', 'Tel Aviv', 'Mayzel', 4)
console.log (myCustomer)
console.log (myCustomer.customerDetails())
