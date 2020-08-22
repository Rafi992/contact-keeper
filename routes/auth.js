const router = require('express').Router()

/**
 @route       GET api/auth
 @desc        Get logged in users
 @access      Private
 */
router.get('/', (req,res) => {
    res.send('Logged in')
})

/**
 @route       POST api/auth
 @desc        Auth - Login
 @access      Public
 */
router.post('/', (req,res) => {
    res.send('Login')
})

module.exports = router