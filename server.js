const express = require('express')

const app = express()
const PORT = process.env.PORT || 5000

// Define routes
app.use('/api/users', require('./routes/users'))
app.use('/api/auth', require('./routes/auth'))
app.use('/api/contacts', require('./routes/contacts'))

app.listen(PORT, () => {
    console.log('App run on port 5000')
})