/* eslint-disable no-undef */
import test from 'ava';
import BrowserEnv from 'browser-env';
import CoconutCalendar from '../src/index';

BrowserEnv(['document']);

test('Inserts proper iframe into DOM', (t) => {
  const div = document.createElement('div');
  div.id = 'test1';
  document.body.appendChild(div);

  const coconut = new CoconutCalendar('example');
  coconut.embed('test1');

  const iframe = document.querySelector('#test1 iframe');
  t.truthy(iframe);
  t.true(iframe.getAttribute('src').includes('example'));
});

test('Uses full url if one is provided', (t) => {
  const div = document.createElement('div');
  div.id = 'test2';
  document.body.appendChild(div);

  const coconut = new CoconutCalendar('https://example.com');
  coconut.embed('test2');

  const iframe = document.querySelector('#test2 iframe');
  t.true(iframe.getAttribute('src').includes('https://example.com'));
});

test('Includes query string if object provided', (t) => {
  const div = document.createElement('div');
  div.id = 'test3';
  document.body.appendChild(div);

  const coconut = new CoconutCalendar('example', {
    key: 'value',
  });
  coconut.embed('test3');

  const iframe = document.querySelector('#test3 iframe');
  t.true(iframe.getAttribute('src').includes('?key=value'));
});
