# ES6 for Everyone Notes

## Module 3

### New String Methods
+ Some new methods to reduce the amount of RegEx needed
+ `.startsWith()` takes in a string and checks whether the string you're checking starts with that string exactly (case sensitive)
	* you can also include an amount of characters to skip and start checking after them → `string.startsWith('abc', 3)` will check after 3 chars
+ `.endsWith()` works the same, but checks if the string ends with certain chars, you can also add an amount of chars to check, ignoring the rest
+ `.includes()` will check if a char or string is contained anywhere in the string
+ .repeat() will repeat a string a certain amount of times
	* Example left-pad func
	```javascript
	const cat1 = 'color';
	const cat2 = 'year made';
	const cat3 = 'materials used';
	
	function leftPad(str, length = 20) {
		return `→ ${str.repeat(length - str.length())}`;
	}

	console.log(leftPad(cat1)); // →               color
	console.log(leftPad(cat2)); // →           year made
	console.log(leftPad(cat2)); // →      materials used
	```
+ 
