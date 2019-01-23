/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. 
* 2. 
* 3. 
* 4. 
*
*write out a code example of each explanation above
*/

// Principle 1

// code example for Window Binding
//this.alert("I called this using this") //calls the alert function from the window object 
// Principle 2

// code example for Implicit Binding

const dog = {
    name: "Spook",
    speak: function(){
        console.log(`My name is ${this.name}. This was said using implicit binding`);
    }
};
dog.speak();
// Principle 3

// code example for New Binding
const Man = function(obj){
    this.name = obj.name;
}
const connor = new Man({name:"connor"});
console.log(connor, "was created with new bindings");
// Principle 4

// code example for Explicit Binding