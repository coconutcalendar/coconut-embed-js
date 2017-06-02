class CoconutCalendar {
  constructor(subdomain, width = '100%', height = '580px') {
    this.width = width;
    this.height = height;
    this.subdomain = subdomain;
    this.iframe = document.createElement('iframe');

    this.iframe.setAttribute('seamless', true);
    this.iframe.setAttribute('frameborder', 0);
    this.iframe.setAttribute('width', this.width);
    this.iframe.setAttribute('height', this.height);
    this.iframe.setAttribute('src', `https://${this.subdomain}.coconutcalendar.com/embed`);
  }

  embed(id) {
    const div = document.getElementById(id);

    div.appendChild(this.iframe);
  }
}

module.exports = CoconutCalendar;