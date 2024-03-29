const express = require('express')

const path = require('path')

const app = express()

const PORT = process.env.PORT || 3001

const root = require('path').join(__dirname, '/public')
app.use(express.static(root));
app.get("*", (req, res) => {
    res.sendFile('index.html', { root });
})
app.listen(PORT)
