const router = require('express').Router();
let User = require('../models/user.model');

//1st route / end point
router.route('/').get((req, res)=>{
    User.find() //mongoose method return in json format 
     .then(users => res.json(users))
     .catch(err => res.status(400).json('Error: ' + err));
});

//handle http post request 
router.route('/add').post((req, res) => {
    const username = req.body.username;

    const newUser = new User({username});

    newUser.save() // save the new user to database
        .then(()=> res.json('User added!'))// confirmation msg
        .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;