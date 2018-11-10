const express = require('express')
const app = express()
const port = 3000

app.use(express.static('public'))

app.listen(port, () => {
  console.log(`All Star Restaurant Review web server started on port ${port}`)
})
