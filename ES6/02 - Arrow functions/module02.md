
# ES6 for Everyone Notes

## Module 2

### Arrow Functions
+ First you can replace the word function in a function with a fat arrow `=>`
	```javascript
	var double = function(a) {
		return a * 2;
	}
	```
	becomes
	```javascript
	var double = (a) => {
		return a * 2;
	}
	```
+ For single parameters, you don't even need to include the parenthesis
+ You can also have an implicit return if what your function is returning is simple and can be done in one line, just leave off both the `{}` and the `return` statement
+ if you don't have any parameters, then you need to have an empty set of `()`
+ If you want to implicitly return an object, wrap `()` around the `{}` denoting you want an object returned
+ You can also use comparisons directly in arrow functions for ex
	```javascript
	const ages = [23, 75, 11, 21, 89, 86, 61, 2];
	let old = ages.filter( age => age >= 60 ); // [75, 89, 86, 61]
	```
+ 


### this and Arrow Functions
+ `this` when used in arrow functions does not get rebound, so it will depend on the parent scope of what it's blocked to, instead of depending on where it's invoked like it normally does
+ This is good if you just want `this` to reference it's parent, and not rebind to the scope where it's called, but you'll need to be careful where you use them so that you don't use them when you need `this` to function normally, like listening for click events
+ So if you use an arrow function inside a normal function, it will inherit the current value of `this`

### when not to use Arrow functions
+ when you need to use the normal `this` like with eventListeners
+ when you need a method to bind to an object
+ when you need to add a prototype method
+ when you need to use the arguments object

### Default function arguments
+ instead of declaring in the function block what you would like default values to be for certain parameters, you can declare them directly in the arguments list
	```javascript
	const calculateBill = function(total, tax = .08, tip = .18) {
		return total + (total* tax) + (total * tip);
	}
	```
+ then if you want to leave out the default arguments, it will still work, and to add in only one of the default arguments, just use `undefined` where the default you aren't changing is → `function(100, undefined, .20)`


