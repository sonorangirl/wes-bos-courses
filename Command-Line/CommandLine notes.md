
# Wes Bos Command Line Tutorial

## Terminal Basics
+ Get the directory you are in: `pwd`
+ Change directory: `cd`
+ Make a directory: `mkdir` + new folder name
+ Clear screen: `command + K` 
+ List whats in the directory: `ls` or `ls -l` for long form
+ create a file `touch`
+ remove a file `rm` (try not to use this, instead use trash utility)
+ search files for the occurrence of a string of characters that matches a specified pattern `grep`

## Terminal programs
+ Use iTerm2 for Mac :white_check_mark:
+ Use Cygwin for Windows to do unix based commands

## ZSH
### Customizing ZSH
+ to open preferences hit **command** + `,`
+ in the profile tab you can create a new theme, set colors, choose a preset scheme, or import a new theme
+ you can also change the font
+ you can find themes for the prompt at oh-my-zsh's github repo in their wiki
+ . files like ./zshrc store your settings
+ they live in your home directory
+ most computers hide . files by default
+ ZSH_THEME= will hold the theme you are currently running
+ to add a theme from github, place it in the oh-my-zsh/themes folder, then update ZSH_THEME to be your new theme
+ to get the symbols/special characters in your prompt, you have to install a powerline font
+ when making changes, if you want to see them in your current tab, use `source` then `~/` and your path

### Cool ZSH features
+ quickly jump to your home directory with `~`
+ quickly jump back to your previous location with **-**
+ to open a file in sublime use `subl ~/` then the file you want to open
+ hit **tab** to auto-complete folder/file names
+ if there are multiple options for completion, hit tab again, until you select the version you want to select, then hit enter
+ you can also use up/down/left/right to pick the one you want
+ to quickly jump up one directory level just use `..`, no need to prefix cd
+ if you want to go up three directory levels, you can just use `...`
+ if there is a link you want to go to, just hold down **command** and then click the link to open in a browser
+ to create a directory and at the same time move into it use `take`
- to open your current path in finder, use `open` and then `.`
+ to keep your history, but take it off the screen, hit **command** + `r`


### Advanced history
+ if you want to use a command you previously entered and you know what it starts with, enter the start (ex git) and then use your up arrow to cycle through previous commands that begin the same
+ Also, to search through previous commands for a specific word, press **control** + `r`

### Plugins
+ find plugins on the oh-my-zsh wiki
+ to enable a plugin go to the settings file (subl ~/.zshrc)
+ add the plugin you want to the plugins=() list
1. Extract
	+ allows you to unzip files into the folder you are in -> extract zip-filename then optionally, -r to remove the zip file
1. CloudApp
	+ will shorten urls, upload files to share to CloudApp
1. Git
	+ provides auto-complete for git commands
	+ also provides aliases for git commands
		+ ga -> git add
		+ gb -> git branch
		+ gbr -> git branch --remote
		+ gcb -> git checkout -b
		+ gcm -> git checkout master
		+ gcmsg -> git commit -m
		+ gco -> git checkout
		+ gp -> git push
		+ gst -> git status
1. OSX
	+ to open the current directory in a new tab in the terminal type -> `tab`
	+ split the current terminal tab horizontally -> `split_tab`
	+ split vertically -> `vsplit_tab`
	+ open the current directory in a Finder window -> `ofd`
	+ returns the path of the front most Finder window -> `pfd`
	+ returns the current Finder selection -> `pfs`
	+ cd to the current Finder directory -> `cdf`
	+ Show hidden files -> `showfiles`
	+ Hide the hidden files -> `hidefiles`

## Z
+ Allows you to jump to a recent directory
+ type `z` then a part of the folder you want to be in that you've frequently or recently used
+ use the `-c` flag to restrict searches to sub-directories of current directory
+ use the `-l` flag to display possible matches, will also show you the ranks it gives those possible matches
+ you can also chain strings to first find the best match to the first string, then find the best match within that directory -> `z wes command` -> wes-bos-courses/commandLine

## Trash
+ Instead of using `rm` which is permanent, use `trash` to delete items, which will then go to the trash
+ So if you accidentally deleted something you can restore it


