var express = require('express')
var router = express.Router()
var userCont = require('../controllers/userController')
var articleCont = require('../controllers/articleController')

router.post('/signup', userCont.signup)
router.post('/login', userCont.login)
router.post('/userdata', userCont.userData)

router.get('/api/articles', articleCont.get)
router.get('/api/articles/:id', articleCont.getOne)
router.post('/api/articles', userCont.userInfo, articleCont.create)
router.put('/api/articles/:id', userCont.userInfo, articleCont.update)
router.delete('/api/articles/:id', articleCont.remove)
router.get('/api/articles/:some/:search', articleCont.findBySomething)

module.exports = router
