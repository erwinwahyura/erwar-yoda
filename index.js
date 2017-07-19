var unirest = require('unirest');

module.exports = function erwarYoda (sentence) {
  unirest.get(`https://yoda.p.mashape.com/yoda?sentence=${sentence}`)
  .header("X-Mashape-Key", "QGOXQtQCgkmshQZ216bcDj8RaRX4p1yguhIjsn88GLh3e3Iybw")
  .header("Accept", "text/plain")
  .end(function (result) {
    // console.log(result.status, result.headers, result.body);
    return result.body
  });
}
