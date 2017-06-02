import test from 'ava';
import BrowserEnv from 'browser-env';
import CoconutCalendar from '../src/index';

BrowserEnv(['document']);

test('Inserts proper iframe into DOM', t => {
  const div = document.createElement('div');
  div.id = 'test';
  document.body.appendChild(div);

  const coconut = new CoconutCalendar('bell');
  coconut.embed('test');

  const iframe = document.querySelector('iframe');
  t.truthy(iframe);
  t.true(iframe.getAttribute('src').includes('bell'));
});