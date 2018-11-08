const router        = require('express').Router();
const Characters    = require('./charactersModel');

router.get('/', (req, res) => {
    Characters.find({'player': res.locals.user._id}).populate('player', 'username').exec( (err, characters) => {
        console.log(characters)
        res.render('components/characters/pages/listCharacters', {characters, titlebarName: 'Characters'})
    })
})

function isLoggedIn(req, res, next) {
    if(req.isAuthenticated()) return next()
    else res.redirect('/auth/login')
}
module.exports = router;