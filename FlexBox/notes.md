
# Wes Bos's What The FlexBox Course notes

## Basics
+ must have a container element with `display: flex` or `inline-flex`
+ this makes any children become flex-items
+ 100vh will make an element take up 100% of the height of a screen

## Flex Direction
+ the deafult is `flex-direction: row` - the flex items are put side by side (horizontally)
+ the main-axis when flex-direction is set to row is left to right
+ and the cross-axis is from top to bottom
+ you can also set `flex-direction: column` - this will stack flex items on top of one another in a column (vertically)
+ the main-axis when set to column is top to bottom
+ and the cross-axis is from left to right
+ another option is `flex-direction: row-reverse` which will reverse the flex items, but stay horizontally aligned -> the main axis will be from right to left
+ and `flex-direction: column-reverse` will reverse the flex items vertically so that the first item is at the bottom, the last item at the top -> the main axis will be from bottom to top

## Flex Wrap
+ Flexbox will try to evenly distribute width between the flex items
+ flex-wrap goes on the containing element of your flex items
+ default: `flex-wrap: nowrap` - doesn't wrap items
+ `flex-wrap: wrap` - will try to split the items to get your desired item width, and create as many rows as are needed, will also give your items a height that will make all the rows fill the height of the container
+ `flex-wrap: wrap-reverse` will change the cross-axis to go from bottom to top, but the main-axis will still be left to right

+ When `flex-direction` is set to `column`
+ the items will be set to the width you want and will scroll until the last one is reached, unless you set a height for the container, then it will put as many items in one column as possible, and then start another column

+ !! Because margin is not included in the box model, if you add margin, and don't account for it when you set the width of your items, it will break the flow.
+ A way to account for this is to use calc:
	+ `width: calc(33.3333% - 20px);` -> 20 to account for each side
	+ `margin: 10px;`

## Re-Ordering Items
+ ordering works on the flex items themselves
+ `order: 0` is the default for all the items
+ when you set `order` to anything > 0, it will move to the end of the items that are still set to a smaller number
+ `order` takes in positive and negative integers
+ especially helpful to re-order for different screen layouts
+ don't use it to re-order text, as when selecting text, it will keep the original order, even if that chuck of text has been moved to a different part of the page through re-ordering

## Alignment and Centering
+ This has to do with how items are aligned to the main-axis and the cross-axis, so if your container has switched the direction of these axis's, then the content will align to the new direction

### Justify content
+ Justify-content aligns items on the main-axis
+ `justify-content: flex-start` is the default, the items are aligned to the start of the flex container, or the left side of the container in default flex-direction
+ `justify-content: flex-end` will align items to the end of the container, or the right in default flex-direction
+ `justify-content: center` will align items to the middle of the container
+ `justify-content: space-between` will evenly align items from start to end and evenly divide the space between the items
+ `justify-content: space-around` will also evenly space out items, but also add space before the first item and after the last item

+ When your flex-direction is changed to `column`, you need to add a height to your container, otherwise `justify-content` will not work
+ So to vertically center something with flex-box when your `flex-direction: column` you have to have a height on the container, then set `justify-content: center`

### Align Items
+ Align-items aligns items on the cross-axis
+ If your container is only as large as the items, then it won't appear to work
+ You need the container to be larger than the items, in order to have the items within it aligned to one side, centered, etc.
+ `align-items: flex-stretch` is the default, the items start at the top of the container, and stretch to the bottom
+ `align-items: center` will align items in the center (vertically centered if flex-direction is default, horizontally centered if in column)
+ `align-items: flex-start` will align items to the top of the container
+ `align-items: flex-end` will align items to the bottom of the container
+ `align-items: baseline` will align items to the basline of the text inside the item, helpful for aligning different sized items like a title, a date, and author name

### Align Content
+ Needs some kind of wrapping to work
+ While justify content thinks about what to do with the extra space on the main-axis, align content thinks about what to do with the extra space on the cross-axis
+ can take the same parameters as justify-content
+ `align-content: stretch` is the default, items will take up space to fill container
+ `align-content: center` will vertically center content when the flex-direction is default
+ `align-content: flex-start` will align content to top
+ `align-content: flex-end` will align content to bottom
+ the items on the same line will become the same size as the largest member of that line, this will change if the screen size changes and the items are wrapped differently
+ `align-content: space-between` will evenly space out the rows of items
+ `align-content: space-around` will evenly space out and add space before and after the rows of items






