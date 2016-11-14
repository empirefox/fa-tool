import test = require('tape');
import { format } from '../src';

test('format test', t => {
  t.plan(6);

  t.equal(format('ban'), 'ban');
  t.equal(format('square-o'), 'square-o');
  t.equal(format('ban--danger'), 'ban--danger');
  t.equal(format('ban--danger--unknown--3x'), 'ban--3x--danger');

  t.equal(format('ban---camera--lg-----'), `ban---camera--lg`);

  t.equal(format('ban--success--xxx--2x----camera--5x--spin-------x'), `ban--success---camera--5x--spin---x`);

});