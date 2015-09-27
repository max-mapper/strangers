var render = require('./render.js')

module.exports = function () {
  var input = document.querySelector('input[type="text"]')
  var form = document.querySelector('form')

  input.focus()
  form.addEventListener('submit', function (ev) {
    ev.preventDefault()
    var message = input.value
    input.value = ""
    render.outgoing(message)
  })
}
