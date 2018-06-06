/* eslint-disable no-undef */
import Utils from './utils';

class CoconutCalendar {
  constructor(path, params = {}, width = '100%', height = '580px') {
    this.path = path;
    this.width = width;
    this.height = height;
    this.params = Utils.parameterize(params);
    this.iframe = document.createElement('iframe');

    this.iframe.setAttribute('seamless', true);
    this.iframe.setAttribute('frameborder', 0);
    this.iframe.setAttribute('allow', 'geolocation');
    this.iframe.setAttribute('width', this.width);
    this.iframe.setAttribute('height', this.height);

    const url = Utils.isFullUrl(this.path) ? `${this.path}/embed` : `https://${this.path}.coconutcalendar.com/embed`;
    this.iframe.setAttribute('src', `${url}${this.params}`);
  }

  embed(id) {
    const div = document.getElementById(id);

    div.appendChild(this.iframe);
  }
}

module.exports = CoconutCalendar;
