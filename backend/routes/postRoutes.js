const express = require('express')
const router = express.Router()

const {generatePost, generateAllPosts} = require('../controllers/post-controller')

router.post('/add', generatePost)
router.get('/view', generateAllPosts)

module.exports = router