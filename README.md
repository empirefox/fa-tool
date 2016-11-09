# fa-tool

basic usage

1. 
```js
var fa = require('fa-tool');
fa.render('ban');
```
output:
```html
<i class="fa fa-ban"></i>
```

2. 
```js
var fa = require('fa-tool');
fa.render('ban--danger---camera--success--lg');
```
output:
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
output:
```html
<span class="fa-stack">
  <i class="fa fa-camera fa-stack-1x"></i>
  <i class="fa fa-ban fa-stack-2x"></i>
</span>
```

4. for markdown-it

```js
var MarkdownIt = require('markdown-it');
var fa = require('fa-tool');
var md = MarkdownIt().use(fa.markdownItPlugin);
md.render(':fa-ban---camera--lg:')
```
output:
```html
<span class="fa-stack fa-lg">
  <i class="fa fa-ban fa-stack-2x"></i>
  <i class="fa fa-camera fa-stack-1x"></i>
</span>
```

5.

```js
var fa = require('fa-tool');
var stackFa = fa.parse('ban----camera-----x');
stackFa.render(); // same as fa.render('ban---camera---x')
stackFa.text():   // ban---camera---x
```