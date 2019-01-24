/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. GLOBAL THIS - by default this points at the global scope which is the window object
* 2. IMPLICIT BINDING - If a function is called as a method (object.method())  the object is now pointed at by this in that function.
* 3. NEW BINDING - When the constructor "New" is used it creates a new object with this pointing at it.
* 4. EXPLICIT BINDING - Some methods such as .call or .apply point this to a specified object.  
*
*write out a code example of each explanation above
*/

// Principle 1
//GLOBAL THIS
// code example for Window Binding
//this.alert("I called this using this") //calls the alert function from the window object 

// Principle 2
//IMPLICIT THIS
// code example for Implicit Binding

const dog = {
    name: "Spook",
    speak: function(){
        console.log(`My name is ${this.name}. This was said using implicit binding`);
    }
};
//dog.speak();
// Principle 3
//NEW BINDING
// code example for New Binding
const Man = function(obj){
    this.name = obj.name;
}
const connor = new Man({name:"connor"});
//console.log(connor, "was created with new bindings");
// Principle 4
//EXPLICIT BINDING
// code example for Explicit Binding
function logThis() {
    console.log(this);
}
const copy = logThis.bind({name:"Connor"});
//copy();