# ES6 for Everyone Notes

## Module 3

### Template Strings
+ Use backticks to allow variables to be dropped into strings using `${variable}`
+ you can also run simple computations inside the `{}`, such as `${var * 2}`, or `${total + num}`
+ Template strings also allow you to create multi line strings without adding a slash on the end
+ You can loop inside a template string as well using .map →
	```javascript
	const markup = `
		<ul class="doglist">
			${dogs.map(dog => 
				`<li>
					${dog.name} 
					is 
					${dog.age * 7} 
					years old
				</li>`
			).join('')}
		</ul>
	`;
	```
+ you can also use if statements in template strings using the ternary operator
+ and you can run functions right inside the template tags as well
+ 