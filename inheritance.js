//                                            Inheritance

// class vehicle{
//     constructor(color, currentSpeed, maxSpeed){
//         this.color = color;
//         this.currentSpeed = currentSpeed;
//         this.maxSpeed = maxSpeed;
//     }
//     move(){
//         console.log("Moving at: ",this.currentSpeed);
//     }
//     accelerate(amount){
//         if(this.currentSpeed < this.maxSpeed){
//             this.currentSpeed += amount;
//         }
//     }
// }
// class motorCycle extends vehicle{
//     constructor(color, currentSpeed, maxSpeed,fuel){
//         super(color, currentSpeed, maxSpeed);
//         this.fuel = fuel;
//     }
//     doWheelie(){
//         console.log("I'm doing a wheelie!");
//     }
// }
// let motorCycle1 = new motorCycle("red", 0, 100, "petrol");
// motorCycle1.move();
// motorCycle1.accelerate(50);
// motorCycle1.move();
// motorCycle1.doWheelie();


//                                           Prototypes

// class Person{
//     constructor(firstName, lastName){
//         this.firstName = firstName;
//         this.lastName = lastName;
//     }
//     greet(){
//         console.log("Hi there! I'm", this.firstName);
//     }
// }
// Person.prototype.introduce = function(){
//     console.log("Hi, I'm", this.firstName);
// }
// Person.prototype.favouriteColor = "blue";
// let person1 = new Person("John", "Doe");
// console.log(person1.favouriteColor);
// person1.introduce();