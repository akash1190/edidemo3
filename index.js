const express = require('express')

const path = require('path')

const app = express()

const PORT = process.env.PORT || 3001

app.use(express.static(path.join(__dirname + "/public")))
app.get('*', function(_, res) {
  res.sendFile(path.join(__dirname, '/public/index.html'), function(err) {
    if (err) {
      res.status(500).send(err)
    }
  })
})

app.listen(PORT)
