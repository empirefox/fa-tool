import test = require('tape');
import { format } from '../src';

test('format test', t => {
  t.plan(6);

  t.equal(format('ban', true), 'ban');
  t.equal(format('square-o', true), 'square-o');
  t.equal(format('ban--danger', true), 'ban--danger');
  t.equal(format('ban--danger--unknown--3x', true), 'ban--3x--danger');

  t.equal(format('ban---camera--lg-----', true), `ban---camera--lg`);

  t.equal(format('ban--success--xxx----camera--5x-------x', true), `ban--success---camera--5x---x`);

});