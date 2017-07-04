
# Sublime Text Notes

## Settings
+ access main settings by **command** + `,`
+ settings are set in a JSON file
+ you can set language specific settings by creating a new settings file
	* `/Packages/User/Markdown.sublime-settings`
	* or `/Packages/User/CSS.sublime-settings`
+ In order to have your settings available to add to multiple computers, save your /Users folder to a cloud app like DropBox so you can then access it from another machine and add the /User settings
+ You can also change the font with` "font-face":` and the font size with `"font-size":` or directly with **command** and `+/-`
+ To show open file folders in the sidebar use **command** + `K + B`

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
+ to quickly set the syntax use `ssx` then css, javascript, or whatever you want to find the right syntax to select for the file.
+ for packages, many come with quick settings options, where you can change option right from the command palette
+ To change snippets/files from other sources that are made using spaces instead of tabs, you can change the whole file to tabs by opening the command palette and typing `tabs`
+ Also, to automatically correctly indent pasted code, press `command shift v` instead of just `command v`, this will also automatically convert it to tabs if that's what you are already using in the file
+ 

### GoTo Anything
+ hit **command** + `P` then type in the file you are looking for
+ if there are multiple matches, you can scroll through them till you find the file you want
+ to find a line number within the current file, hit `:130` or whatever line number you want
+ to find specific symbols (classes, functions, headings, etc.) in a large file, hit `@name` using the name of the symbol. You can also add further space separated names if there are many items with the same first name `@warning btn`
+ You can also use GoTo Symbol in Project from the menu to type in any symbol that you want to find in the current project, this will not only open that file, but goes to the line number the symbol is found on
+ You can get out of GoTo by pressing **esc**
+ Combining commands - to find a symbol within a file you know of chain them -> partial filename@partial function name -> function named combine within main.js -> main@comb
+ You can also exclude certain folder from your search by setting the `"binary_file_patterns":` with an array of files/folders you'd like to exclude from your search

## Auto File Name
+ package that suggests file names when adding links, images, etc.
+ hit tab to use the current selection

## Sublime Code Intel
+ this package adds intelligent code completions for most languages
+ it doesn't read JS files by default, need to copy all the settings to the user settings file, then change the javascript `"scan_files_in_project"` to true
+ might take awhile for the scanning to process the file, but will work from then on

## Code Folding
+ with `fade_fold_buttons` set to false, nested sections of code will be able to be hidden, with a ... symbol in it's place. Press the caret again to show the hidden code.
+ To hide a selected amount of code, hit **command** **option** `[` 
+ To un-hide this selection hit **command** **option** `]`
+ Instead of selecting the code you want to hide with a mouse, you can also put your cursor inside the block you want to hide, and use the same **command** **option** `[`
+ To unfold lots of folded blocks at once use **command** `K` **command** `J`
+ With html, if you want to hide a very long element use **command** `K` **command** `T`, it will keep the tag name, but hide the attribute details 

## Snippets
+ To find your snippets go to **Tools**, then select **Snippets** or open the command palette and type `snippet`
+ Snippets are short strings that when you press tab after, open up into a larger piece of code
+ Sublime has some already installed, you can download packages with more snippets or create them yourself
+ To create a new snippet go to **Tools**, then **Developer**, then **New Snippet**
+ This will open a new file w/ boilerplate XML code for the snippet
+ In the new file, only delete the `Hello, this is a snippet line`, and paste in what you want your snippet result to be.
+ Then set your tab trigger below in the settings by replacing hello
+ Also set your source to the file types your snippet pertains to (source.html, source.js, source.css, etc.)
+ You can also add a description after the source using <description></description>
+ Make sure it saves in your /User folder in sublime text and save it as a .sublime-snippet
+ Good idea to create a folder within /User called snippets to save them all in one place
+ Often another package such as Emmet will try to interpret tour tab trigger and will provide other code than what you intended, so to get around this, it's a good idea to put a . in front of your tab triggers and use .yourTabTrigger to implement it
+ You can search for specific snippets that others have created by going to GitHub search, entering the topic your looking for, then filtering only files that end with .sublime-snippets
+ I should come up with some snippets for making header comments, section comments, jQuery ready, html5 boilerplate with and without bootstrap, media queries, scss boilerplate like getting rid of button outlining, common classes I use, etc.

## Terminal Integration
+ Use `subl` to open any directory or file with Sublime Text.
+ You can use `subl` then the `path/to/directory`, `subl` then the `filename.js` or use `subl` then `.` to open the current directory in sublime
+ You can also specify a line number `subl weather.js:50`
+ Or even the exact column if you are trying to fix a bug `subl routes.js:34:20`
+ You can use arguments with the subl command as well
	* `subl -n filename` will open the file in a completly new window, instead of in the current project
	* `subl --project my-project.sublime-project` will load a previous project
	* `subl -b` filename or directory will open it in the background 
+ Terminal Package
	* Allows you to open the current file's directory in the terminal
	* Use **command** **shift** `t` to open the file's parent folder
	* Use **command** **alt** **shift** `t` to open the file's whole project folder
	* In the user settings, set `terminal: "iTerm2-v3.sh"` to open with iTerm2 instead of the basic terminal

## Moving and Jumping
+ hold down the **option** (alt) key to jump forward/backward by word
+ hold down the **command** key to jump to the front or back of a line
+ If your line is wrapping, you can jump to the end of the actual line instead of just the on-screen line by pressing the arrow twice
+ To get to the top of the file use **command** + up arrow
+ And to get to the bottom its **command** + down arrow

## Selecting and Inserting
+ To select word by word use **option** **shift** and forward/backwards arrows
+ To select by line use command shift forwards/backwards arrow
+ To select to the end of file, or to the top use **command** **shift** up/down arrows
+ To select multiple lines use command + `l`, which will go to the end of the actual line, not the visual end on screen
+ To select the whole file use **command** + `a`
+ To insert a new line after the line you are currently in and go to it, use **command** **enter**
+ To insert a line above the one you're currently in use **command** **shift** **enter**

## Finding, Selecting, and Replacing
+ Use command f to search for the word you want
	* the first option allows you to use RegEx in the search - off by default
	* the second option toggles case sensitivity - off by default
	* the third option toggles whether it's looking for a whole word, or will match with partials - partials by default
	* the fourth option toggles whether you want to look for matches wrapped around to the top (whole file) or just from the current point on - wrapped by default
	* the fifth option will toggle whether you want to search through the whole file or just a selection you highlight - whole file by default
	* the last option toggles whether you want the matches highlighted - highlighted by default
+ To cycle through the matches till you find the one you want use **command** + `g`, keep pressing `g` till you find the match you want. Then, hit **esc** to select the match and you can then change it
+ To go backwards through the matches, use **command** **shift** `g`
+ You can also double click the word you want to highlight all the other instances of the word
+ Multiple cursors
	* Incremental selection - use **command** `d` to incrementally select the matches, hitting `d` until you have selected all the matches you want
	* When you hit **esc**, you will have multiple cursors at each selected match, so you can change multiple instances at once
	* To skip over unwanted matches use **command** `k`, then you can continue on with `d` while holding down **command**
	* To quickly change all the instances of a word, select the word you want, then use **command** **control** `g`, when you **esc** you will have multiple cursors at all the instances

## Emmet






