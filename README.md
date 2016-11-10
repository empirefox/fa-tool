# fa-tool

text format:

* `front`
* `back---front`
* `back---front---x`

explaination:

* size, pull on back will be ignored.
* size, pull on front will apply to the whole stack.
* `---`, `------` are the same, but must have length more than 3.
* back/front icon always starts with its name.
* back/front icon always join its attributes using `--`.
* `---x` will xchange back/front position.

accepted icon attributes:

```js
size: ['lg', '1x', '2x', '3x', '4x', '5x'];
color: ['muted', 'primary', 'success', 'info', 'warning', 'danger'];
pull: ['left', 'right'];
direction: [90, 180, 270];
flip: ['h', 'v'];
```

basic usage

1.
```js
var fa = require('fa-tool');
fa.render('ban');
```
```html
<i class="fa fa-ban"></i>
```

2.
```js
var fa = require('fa-tool');
fa.render('ban--danger---camera--success--lg');
```
```html
<span class="fa-stack fa-lg">
  <i class="fa fa-ban text-danger fa-stack-2x"></i>
  <i class="fa fa-camera text-success fa-stack-1x"></i>
</span>
```

3.
```js
var fa = require('fa-tool');
fa.render('ban---camera---x');
```
```html
<span class="fa-stack">
  <i class="fa fa-camera fa-stack-1x"></i>
  <i class="fa fa-ban fa-stack-2x"></i>
</span>
```

4.

```js
var fa = require('fa-tool');
fa.render('ban--90--v--danger-----camera--lg--left--180--h--success-----x');
```
```html
<span class="fa-lg fa-pull-left fa-stack">
  <i class="fa fa-camera fa-flip-horizontal fa-rotate-180 fa-stack-1x text-success"></i>
  <i class="fa fa-ban fa-flip-vertical fa-rotate-90 fa-stack-2x text-danger"></i>
</span>
```

5.for markdown-it

```js
var MarkdownIt = require('markdown-it');
var fa = require('fa-tool');
var md = MarkdownIt().use(fa.markdownItPlugin);
md.render(':fa-ban---camera--lg:')
```
```html
<span class="fa-stack fa-lg">
  <i class="fa fa-ban fa-stack-2x"></i>
  <i class="fa fa-camera fa-stack-1x"></i>
</span>
```

6.

```js
var fa = require('fa-tool');
var stackFa = fa.parse('ban----camera-----x');
stackFa.render(); // same as fa.render('ban---camera---x')
stackFa.text():   // ban---camera---x
```