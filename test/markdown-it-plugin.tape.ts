import test = require('tape');
import markdownIt = require('markdown-it');
import plugin = require('../src/markdown-it-plugin');

declare global {
  interface String {
    workaround(): string;
  }
}

String.prototype.workaround = function (this : string) {
  var s = this;

  // See https://github.com/rlidwka/markdown-it-regexp/issues/4
  return `<p>${s}</p>\n`;
};

test('markdown-it plugin test', t => {

  const md = markdownIt();
  md.use(plugin);

  t.plan(3);
  t.equal(md.render(':fa-ban:'), 
`<i class="fa fa-ban"></i>`.workaround());
  
  t.equal(md.render(':fa-ban---camera--lg:'), 
`<span class="fa-lg fa-stack">
  <i class="fa fa-ban fa-stack-2x"></i>
  <i class="fa fa-camera fa-stack-1x"></i>
</span>`.workaround());

  t.equal(md.render(':fa-ban--90--v--danger-----camera--lg--left--180--h--success-----x:'), 
`<span class="fa-lg fa-pull-left fa-stack">
  <i class="fa fa-camera fa-flip-horizontal fa-rotate-180 fa-stack-1x text-success"></i>
  <i class="fa fa-ban fa-flip-vertical fa-rotate-90 fa-stack-2x text-danger"></i>
</span>`.workaround());
});