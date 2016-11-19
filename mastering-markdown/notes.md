

# Mastering Markdown Notes

## Paragraphs
Paragraphs are separated by an by an empty line.
This sentence will appear in the same paragraph because it doesn't have an empty line between the two.

This sentence will appear in a new paragraph.

## Bold/Italic/Strikethrough
two asterisks -> **bold** or two underscores -> __bold__

one asterisk *italic* or one underscore _italic_

Good practice: **bold** -> use asterisks, _italic_ -> use underscore, so it's obvious.

To strike through text, wrap selected text in ~~double tildas~~ 

## Headings
Use hash's followed by a space to create headings

# h1 one hash
## h2 two hash's
### h3 three hash's
#### h4 four hash's...

Github will give all your headings Id's so you can link to certain parts of your markdown.

## Links
Add angle brackets -> <http://example.com>

Show as text, wrap text in [], link in () -> [Github](http://github.com)

Add quoted text in () after link to create title text when hovering over links -> [Some link](http://example.com "this link is amazing")

To save [space][1] and not interrupt the [flow][f] of text, or to add multiple places linked to the same [page][1], create a key by adding another pair of brackets [1] with a value after the bracketed text you want to be a link, then anywhere in the markdown that makes sense state the key again [1]: and then the link you want.

[1]: http://space.com
[f]: http://flow.com





