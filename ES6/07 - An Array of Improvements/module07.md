# ES6 for Everyone Notes

## Module 7

### Array Improvements

#### Array.from()
+ not on the prototype so can't be used directly with arrays, but can turn array-ish things like node lists into actual arrays
+ you can also include a second argument, a function to map over all the elements in the new array and return something for each item
+ Can also use this to turn the arguments array into a real array
+ Array.of() → makes a new array out of the arguments you provide it.

#### Array.find() 
+ loops through array like items and returns true or false when the criteria you're looking for matches →
	```javascript
	var code = '123';
	Array.find(post => post.code === code); //loops through post objects until it finds one with a code that matches the code provided and returns that post
	```

#### Array.findIndex()
+ useful when you know what item you want, but want to know where in the array like object it's located
+ it will return the index in the array-ish list of the item found →
	```javascript
	Array.findIndex(post => post.code === code); //returns the index of the post that matches that code
	```

#### Array.some(), Array.every()
+ will check an array and return true or false if either some of the items match criteria or if every item in the array matches the criteria
	```javascript
	var ages = [2, 12, 36, 19, 27, 64];
	//check if there are any adults?
	var includesAdults = ages.some(age => age >= 18); // true
	//check if all in list are able to drink?
	var allCanDrink = ages.every(age => age >= 21); // false
	```


