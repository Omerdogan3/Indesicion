//Car class
//make , model , vin
//getDescription
class Person {
    constructor(name = 'Anonymous', age = 0){
		this.name = name;
		this.age = age;
	 }
	 getGreeting(){
		 //return 'Hi I am ' + this.name + '!';
		 return `Hi I am ${this.name}`;
	 }
	 getDescription(){
		 return `${this.name} is ${this.age} years old.`;
	 }
}

class Student extends Person {
	constructor(name, age, major){
		super(name,age);
		this.major = major;
	}
	hasMajor(){
		return !!this.major;
	}
	getDescription(){
		let description = super	.getDescription();
		
		if(this.hasMajor()){
			description += `Their major is ${this.major}`;
		}
		return description;
	}
}

class Traveller extends Person{
	constructor(name,age,homeLocation){
		super(name,age);
		this.homeLocation = homeLocation;
	}
	getGreeting(){
		let greeting = super.getGreeting();
		if(this.homeLocation){
			greeting += ` I am visiting from ${this.homeLocation}.`;
		}
		return greeting;
	}
}


//Traveller -> person
//Add support for homeLocation
//Override getGreeting


const tra1 = new Traveller('Omer Dogan',23,'Istanbul');
console.log(tra1.getGreeting());
//const me = new Person('Omer Dogan');
//const stu1 = new Student('OD',22,'Information Systems');
//console.log(stu1.getDescription());

//const od = new Person();
//console.log(od);