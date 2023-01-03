
// call,apply and bind 

const person1 = {
    firstName: "Sourabh",
    lastName: "Bharamkar"
  }

  const fullName= function(city,state) {
    console.log(this.firstName + " " + this.lastName+" "+ city + " "+ state)
}

// call method 
fullName.call(person1,"Kolhapur","Maharashtra")

// apply method 
fullName.apply(person1,["Kolhapur","Maharashtra"])

///Bind Method
const func=fullName.bind(person1)
func("Kolhapur","Maharashtra")


//Q. Create a new object called Student with age 20 , write a function which prints the age of the student from the student object.

const Student={
    age:"20"
}

const printAge=function(){
    console.log(this.age)
}

const age=printAge.bind(Student)
age();

