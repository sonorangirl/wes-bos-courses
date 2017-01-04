
# ES6 for Everyone Notes

## Module 1

### let/const vs var
+ let is block scoped (between {}), while var is function scoped, meaning that vars can accidentally be global if they're declared in a non function block (if, while, for loops, etc.)
+ temporal dead zone - with var, the variable is hoisted, so you can potentially use a variable before it was declared, but it will be undefined. While with let/const using them before they're declared will result in an error (the temporal dead zone)
+ there are some that say var shouldn't be used any more, WB is only using const and let, and mainly const for most variables. I think I'll use var for globals, unless it's not going to be changed, then use const, and use let within non function blocks.


