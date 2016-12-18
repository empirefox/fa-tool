import test = require('tape');
import { render } from '../src/render';

test('render test', t => {
  t.plan(7);

  t.equal(render('ban'), '<i class="fa fa-ban"></i>');
  t.equal(render('square-o'), '<i class="fa fa-square-o"></i>');
  t.equal(render('ban--danger'), '<i class="fa fa-ban text-danger"></i>');
  t.equal(
    render('ban--danger--unknown--3x--left--90--v'),
    '<i class="fa fa-3x fa-ban fa-flip-vertical fa-pull-left fa-rotate-90 text-danger"></i>',
  );

  t.equal(render('ban----camera--5x-------x'), `<span class="fa-5x fa-stack">
  <i class="fa fa-camera fa-stack-1x"></i>
  <i class="fa fa-ban fa-stack-2x"></i>
</span>`);

  t.equal(
    render('ban--3x--right--90--v--danger-----camera--lg--left--180--h--success'),
    `<span class="fa-lg fa-pull-left fa-stack">
  <i class="fa fa-ban fa-flip-vertical fa-rotate-90 fa-stack-2x text-danger"></i>
  <i class="fa fa-camera fa-flip-horizontal fa-rotate-180 fa-stack-1x text-success"></i>
</span>`,
  );

  t.equal(
    render('ban--3x--right--90--v--danger-----camera--lg--left--180--h--success-----x'),
    `<span class="fa-lg fa-pull-left fa-stack">
  <i class="fa fa-camera fa-flip-horizontal fa-rotate-180 fa-stack-1x text-success"></i>
  <i class="fa fa-ban fa-flip-vertical fa-rotate-90 fa-stack-2x text-danger"></i>
</span>`,
  );

});