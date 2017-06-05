import test from 'ava';
import Utils from '../src/utils';

test('Determines if full url', (t) => {
  const full = 'https://example.com';
  const subdomain = 'subdomain';

  t.true(Utils.isFullUrl(full));
  t.false(Utils.isFullUrl(subdomain));
});

test('Serializes object into query string', (t) => {
  const object = {
    param: 'value',
    other: 'thing',
    with: 1,
  };

  const query = Utils.parameterize(object);

  t.is(query, '?param=value&other=thing&with=1');
});

test('Returns an empty string for an empty object', (t) => {
  const object = {};

  const query = Utils.parameterize(object);

  t.is(query, '');
});
