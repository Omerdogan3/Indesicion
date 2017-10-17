// argument orjects no longer bound

const add = (a,b) => {
    return a+b;
};

console.log(add(4,5));

//this keyword - no longer bound

const user = {
    name : "Omer",
    cities: ["istanbul", 'izmir', 'antalya'],
    
    printPlacesLived(){
        const cityMessages = this.cities.map((city)=>{
            return this.name + ' has live in ' + city + '!';
        });
        return cityMessages;


        this.cities.forEach((city) => {
            console.log(this.name + 'has lived in ' + city)
        });
    }
};

console.log(user.printPlacesLived());


//challenge area

const multiplier = {
    // numbers - array of numbers
    // multiplyBy - single number 

    numbers: [20,30,10],
    multiplyBy:3,
    multiply(){
        return this.numbers.map((number) => number * this.multiplyBy);
    }
};


console.log(multiplier.multiply());