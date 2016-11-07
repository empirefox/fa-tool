import test = require('tape');
import { render } from '../src';

test('render test', t => {
  t.plan(6);

  t.equal(render('ban', true), '<i class="fa fa-ban"></i>');
  t.equal(render('square-o', true), '<i class="fa fa-square-o"></i>');
  t.equal(render('ban--danger', true), '<i class="fa fa-ban text-danger"></i>');
  t.equal(render('ban--danger--unknown--3x', true), '<i class="fa fa-3x fa-ban text-danger"></i>');

  t.equal(render('ban---camera--lg-----', true), `<span class="fa-lg fa-stack">
  <i class="fa fa-ban fa-stack-2x"></i>
  <i class="fa fa-camera fa-stack-1x"></i>
</span>`);

  t.equal(render('ban----camera--5x-------x', true), `<span class="fa-5x fa-stack">
  <i class="fa fa-camera fa-stack-1x"></i>
  <i class="fa fa-ban fa-stack-2x"></i>
</span>`);

});