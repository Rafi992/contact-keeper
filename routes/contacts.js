const router = require('express').Router()

/**
 @route       GET api/contacts
 @desc        Get all user contacts
 @access      Private
 */
router.get('/', (req,res) => {
    res.send('Contacts')
})

/**
 @route       POST api/contacts
 @desc        Add new contact
 @access      Private
 */
router.post('/', (req,res) => {
    res.send('Contacts')
})

/**
 @route       PUT api/contacts/:id
 @desc        Get all user contacts
 @access      Private
 */
router.put('/:id', (req,res) => {
    res.send('Contacts')
})

/**
 @route       DELETE api/contacts
 @desc        Get all user contacts
 @access      Private
 */
router.delete('/:id', (req,res) => {
    res.send('Contacts')
})

module.exports = router