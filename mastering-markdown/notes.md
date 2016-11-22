

# Mastering Markdown Notes

## Paragraphs
Paragraphs are separated by an by an empty line.
This sentence will appear in the same paragraph because it doesn't have an empty line between the two.

This sentence will appear in a new paragraph.

## Bold/Italic/Strikethrough
two asterisks -> **bold** or two underscores -> __bold__

one asterisk *italic* or one underscore _italic_

Good practice: **bold** -> use asterisks, _italic_ -> use underscore, so it's obvious.

To strike through text, wrap ~~selected text~~ in double tildas ~~

## Headings
Use hash's followed by a space to create headings

# h1 one hash
## h2 two hash's
### h3 three hash's
#### h4 four hash's...

Github will give all your headings Id's so you can link to certain parts of your markdown.

## Links
Add angle brackets < > -> <http://example.com>

Or t show as text, wrap text in [], and put the link in () -> [Github](http://github.com)

Also, add quoted text in () after the link to create title text when hovering over links -> [Some link](http://example.com "this link is amazing")

To save [space][1] and not interrupt the [flow][f] of text, or to add multiple places linked to the same [page][1], create a key by adding another pair of brackets with a value after the bracketed text you want to be a link, then anywhere in the markdown that makes sense state the key again, followed by a colon: a space, and then the link you want.

[1]: http://space.com
[f]: http://flow.com

## Images
Very similar to links. Put a ! followed by [] and (), the ! specifies it's an image, you put the alt text in the [], and the path to the image in (). 
![nice picture](http://unsplash.it/500/500?random).

You can also add a tool tip by adding quoted text after the image in the () 
![succulents](http://unsplash.it/500/500?image=940 "Cool Succulents")

Also, just like links you can use an additional set of square brackets to refer to an image elsewhere in the document ![bulldog][dog] 

To have images link to places, put the whole img syntax in the [] of a link.

[dog]: http://unsplash.it/500/500?image=837

### Tip
If you can't do what you want in markdown, you can write out the html, and it will work.

## Lists
For unordered lists you place an *, -, or + and then a space in front of your list items

- apple
- banana
- orange

For ordered lists, use 1. and a space, no need to increase numbers, the browser will do that for you

1. First
1. Second
1. Third

To nest things inside, just indent, and remember to space with lines to avoid in-line formatting

1. Item 1
	* sub-item 1

	New paragraph on a new line

	[link on a new line](http://example.com)
1. Item 2
1. Item 3
	+ sub-item 3

## Line breaks, Horizontal Rules
If you don't want to make a space to get a new line, you can add a br tag <br>
This sentence is now on a new line.

You can create horizontal rules by making a line space then adding at least 3 --- or ===

-------

Don't accidentally forget to put a line space, otherwise it will turn the text into a heading

=========

* Seems like the github markdown doesn't allow ==== to be used as a horizontal rule anymore

## BlockQuotes
To add block-quotes add a > in front of text on a new line
> This is a quote
> 
> - *Unknown*

## Code Blocks
To make a code block you can just indent the code you've written

	var x = 10;

However, it's better to wrap it in 3 ```

```
var a = [];
var b = {};
```

And you can specify the language to get syntax highlighting -> ```js

```js
var num = 42;
var phrase = "Don't Panic";
let arr = [1,2,3];
console.log(num);
```

You can also add some in-line code by wrapping it in 1 set of back ticks -> `var y = 0;` .

To helpfully show changes you can use diff with your code block to get special highlighting of what was removed and what was added -> ```diff

```diff
let cloud = "white;
- let sky = "green";
+ let sky = "blue";
```

## Tables
Put pipes (|) around each column you want
Then put pipes around a colon and dashes :-----, left aligned, :------:, center aligned, -----:, right aligned. Then add your data with more pipes to indicate which column the data should be in

| Dogs | Cats | Birds |
|:-----|:----:|------:|
|30|23|11|

## Check-boxes

Add brackets with a space to designate a check box, put an x in the space to have the check box marked done

* [x] Ch. 1
* [x] Ch. 2
* [ ] Ch. 3
* [ ] Ch. 4


## Github treats
You can reference issue numbers when writing markdown on github by using a hashtag immediately followed by the issue number -> #87

You can also reference people using the @someone









