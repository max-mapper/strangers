var fs = require('fs')
var mustache = require('mustache')
var messageTemplate = fs.readFileSync('./message.html').toString()
var messages = document.querySelector('.posts')

module.exports.outgoing = function (message) {
  render(message)
}

module.exports.incoming = function (message) {
  render(message)
}

function render (message) {
  var html = mustache.render(messageTemplate, {message: message, user: 'a cat', date: 'just now'})
  messages.innerHTML += html
  window.scrollTo(0, document.body.scrollHeight)
}