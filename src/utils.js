export default {
  isFullUrl(url) {
    const pattern = new RegExp(/^(https?:\/\/)/);

    return pattern.test(url);
  },

  parameterize(object) {
    return Object.keys(object).reduce((value, key, i) => {
      const delimiter = (i === 0) ? '?' : '&';
      const val = encodeURIComponent(object[key]);
      key = encodeURIComponent(key);

      return [value, delimiter, key, '=', val].join('');
    }, '');
  },
};
