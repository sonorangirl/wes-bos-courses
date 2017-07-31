# ES6 for Everyone Notes

## Module 5

### Destructuring
+ allows you to extract data from objects, maps, and sets into their own variable
+ to use create a variable with {} and put the variable names that match what you want inside
	* Example from an object
	```javascript
	const person {
		first: 'Erin',
		last: 'Manahan',
		state: 'AZ'
	};

	const { first , last } = person;
	```
	* creates the variables `first` and `last` and assigns their respective values
+ can also be done with deeply nested objects by referencing the nested object they're inside
+ if you want to rename the variable to be different than the property name, use a colon → `const { first: name, state: location } = person;`
+ Using arrays is similar, except use `[]` instead of `{}` and it relies on order →
	```javascript
	const details = ['Erin', 123, 'AZ'];
	const [ name, id, location ] = details;
	```
+ you can also take a string and seperate it using .split directly into a destructered array
+ also you can use the rest operator to place all remaining items in an array in the last variable created →
	```javascript
	const names = ['Harry', 'Hermione', 'Ron', 'Ginny', 'Luna', 'Neville'];
	const [chosenOne, brains, bff, ...friends];
	```
+ Also makes swapping values much easier →
	```javascript
	let on = 'red light';
	let off = 'green light';
	
	setTimeout(function() {
		if (on = 'red light') {
			[on, off] = [off, on];
		}
	}, 5000);
	```
+ And you can destructure variables inside of functions by wrapping parameters in `{}` →
	```javascript
	function calculateTotal({total, tax = .09, tip = .18} = {}) {
		return total + (total * tax) + (total * tip);
	}

	calculateTotal({tip: .20, total: 100});
	```
	* this way, the order in which you add the parameters no longer matters, and you can leave out any parameters you just want the default values for

