import test from 'ava';
import __name__ from '../dist/__name__';

test('Madanai', async t => {
  const result = await __name__();
  t.is(result, 'Madanai');
});
