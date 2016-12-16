
# Sublime Text Notes

## Settings
+ access main settings by **command** + `,`
+ settings are set in a JSON file
+ 

## Bookmarking
+ you can bookmark a certain section of a long file to come back to it easily
+ add a bookmark with **command** + `fn + F2`
+ to browse forward through them, hit `fn + F2`
+ to browse backwards hit **shift** + `fn + F2`
+ to select you find GoTo in the menu, the Bookmarks, then Select All
	* This will put multiple cursors on each line to alter them all at the same time
+ to clear them all press **shift** + **command** + `fn + F2`

## Command Palette
+ use **command** **shift** `P` to open command palette
+ easy access to snippets, changing file syntax, build tasks, etc.
+ easy to manipulate files, rename, duplicate, etc., w/out having to close and reopen file
+ for packages, many come with quick settings options, where you can change option right from the command palette

### GoTo Anything
+ hit **command** + `P` then type in the file you are looking for
+ if there are multiple matches, you can scroll through them till you find the file you want
+ to find a line number within the current file, hit `:130` or whatever line number you want
+ to find specific symbols (classes, functions, headings, etc.) in a large file, hit `@name` using the name of the symbol. You can also add further space separated names if there are many items with the same first name `@warning btn`
+ You can also use GoTo Symbol in Project from the menu to type in any symbol that you want to find in the current project, this will not only open that file, but goes to the line number the symbol is found on

## Auto File Name
+ package that suggests file names when adding links, images, etc.
+ hit tab to use the current selection

## Code Folding
+ with `fade_fold_buttons` set to false, nested sections of code will be able to be hidden, with a ... symbol in it's place. Press the caret again to show the hidden code.
+ To hide a selected amount of code, hit **command** **option** `[` 
+ To un-hide this selection hit **command** **option** `]`
+ Instead of selecting the code you want to hide with a mouse, you can also put your cursor inside the block you want to hide, and use the same **command** **option** `[`
+ To unfold lots of folded blocks at once use **command** `K` **command** `J`
+ With html, if you want to hide a very long element use **command** `K` **command** `T`, it will keep the tag name, but hide the attribute details 

