//SET METHOD
// const fruits=new Map();
// fruits.set("apple",100);
// fruits.set("banana",200);
// fruits.set("orange",300);
// console.log(fruits);

// GET ,METHOD
// const fruits=new Map();
// fruits.set("apple",100);
// fruits.set("banana",200);
// fruits.set("orange",300);
// console.log(fruits.get("apple"));
// console.log(fruits.get("banana"));
// console.log(fruits.get("orange"));   


// NEW Map

// const fruits=new Map([["apple",100],["banana",200],["orange",300]]);
// console.log(fruits);    

// MAP SIZE
// const fruits=new Map([["apple",100],["banana",200],["orange",300]]);
// console.log(fruits.size);

// MAP DELETE
// const fruits=new Map([["apple",100],["banana",200],["orange",300]]);
// fruits.delete("apple");
// console.log(fruits);

// MAP CLEAR
// const fruits=new Map([["apple",100],["banana",200],["orange",300]]);
// fruits.clear();
// console.log(fruits);

// MAP Has

// const fruits=new Map([["apple",100],["banana",200],["orange",300]]);  
// console.log(fruits.has("apple"));    

// MAP FOR EACH
// let text="";
// fruits.forEach(fucntion(value,key){
//     text+=key+" is "+value;
    
// }) 
// console.log(text);


// sum of values
// let total=0;
// for(const value of fruits.values()){
//     total+=value;
// }
// console.log(total);



//object as keys
// const apples={name:'Apples'};
// const bananas={name:'Bananas'};
// const oranges={name:'Oranges'};
// const fruits=new Map([[apples,100],[bananas,200],[oranges,300]]);
// console.log(fruits);



//                     JAVA SCRIPT DESTRUCTURING
// const person={
//     firstName:"John",
//     lastName:"Doe",
//     age:50  
// };
// let{firstName,lastName}=person; 
// console.log(firstName);     
// console.log(lastName); 
// THE ODER OF PROPERTIES DOES'NT MATTER 
// const person={
//     firstName:"John",
//     lastName:"Doe",
//     age:50  
// };
// let{lastName,firstName}=person; 
// console.log(firstName);     
// console.log(lastName); 
// DETRUCTING DOEST CHANGE THE OBJECT
// IT CREAT NEW OBJECT AND CHANGE THE VALUES


// OBJECT DEFAULT VALUES

// const person={
//     firstName:"John",
//     lastName:"Doe",
//     age:50  
// };
// let{lastName:gupta}=person;
// console.log(lastName);