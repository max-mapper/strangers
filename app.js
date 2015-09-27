var path = require('path')
var app = require('app')
var bw = require('browser-window')

app.on('ready', function () {
  var atomScreen = require('screen')
  var size = atomScreen.getPrimaryDisplay().workAreaSize
  var win = new bw({ width: size.width, height: size.height, show: true })
  win.on('closed', function() {
    win = null
  })
  var dir = process.cwd()
  var url = 'file://' + path.join(dir, 'index.html')
  win.loadUrl(url)
  win.show()
})