# ES6 for Everyone Notes

## Module 6

### New iteration and Loops
+ new `for of` loop
	* lets you get only the items in the array, not any methods, or anything thats been altered with the prototype
	* lets you use `break` and `continue` statements within the loop
	```javascript
	const colors = ['red', 'blue', 'turquoise', 'lightyellow', 'lime', 'pink'];
	for (const color of colors){
		console.log(color);
		if (color === 'lime') {
			break;
		}
	} //red, blue, turquoise, lightyellow
	```
+ this gets you the values of the array
+ to get both the values and their place in the array, loop over the iterator →
	```javascript
	for (const [i,color] of colors.entries()){
		console.log(`${color} is the ${i + 1} color in the array`);
	}
	```
+ can also be used to loop over the arguments without converting it to an array
+ also you can use the for of loop to iterate over nodeLists of elements without converting it to an array
+ It can also be made to work iterating over an object using Object.keys, but it's still easier to iterate over objects using a for in loop.

### New Object iteration
+ `Object.values` - will get you an array of an objects values, (where Object,keys resulted in an array of an objects keys)
+ And `Object.entries` - gets you an array of arrays of an objects key value pairs
