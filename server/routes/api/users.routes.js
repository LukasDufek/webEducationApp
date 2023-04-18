const express = require('express');
const userRouter = express.Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const passport = require('passport');
const key = require('../../config/keys').secret;
const User = require('../../models/User');


/**
 * @route POST api/users/register
 * @desc Register the User
 * @access Public
 */
userRouter.post('/register',  (req, res) => {
    let {
        first_name,
        last_name,
        email,
        password,
        confirm_password,
        role,
        year,
        money,
        exp,
        abilities,
        inventory,
        helm_equip,
        weapon_equip,
        armor_equip,
        total_count_of_excercies,
        success_rate,
        daily_limit_excercies,
        defeated_oponents,
        completed_word_tasks,
        date_of_last_calculating
    } = req.body;

    if (password !== confirm_password) {


        return res.status(400).json({
            msg: "Hesla se neshodují."
        });

    }else if(first_name==="" || last_name==="" || email==="" || password==="" || role==="" || (role==="student" && year==="0") ) {

        return res.status(400).json({
            msg: "Nebyly vyplněná všechna pole."
        });

    }else{

        // Check for the Unique Email
        User.findOne({
            email: email
        }).then( async user => {
            if (user) {

                return res.status(400).json({
                    msg: "Tento mail je již používán."
                });

            } else {

                let newUser = new User({
                    first_name,
                    last_name,
                    email,
                    password,
                    role,
                    year,
                    money,
                    exp,
                    abilities,
                    inventory,
                    helm_equip,
                    weapon_equip,
                    armor_equip,
                    total_count_of_excercies,
                    success_rate,
                    daily_limit_excercies,
                    defeated_oponents,
                    completed_word_tasks,
                    date_of_last_calculating

                });


                try {
                    const salt = await bcrypt.genSalt(10);
                    // The data is valid and new we can register the user

                    newUser.password = await bcrypt.hash(newUser.password, salt);

                    await newUser.save().then(() => {
                        return res.status(201).json({
                            success: true,
                            msg: "Uživatel úspěšně registrován"
                        });
                    });


                } catch (err) {
                    console.log(err);
                }


            }

        });
    }


});

/**
 * @route POST api/users/login
 * @desc Signing in the User
 * @access Public
 */
userRouter.post('/login',  (req, res) => {

    User.findOne({
        email: req.body.email
    }).then(user => {
        if (!user) {
            return res.status(404).json({
                msg: "Nesprávný email",
                success: false
            });
        }else {

            // If there is user we are now going to compare the password
            bcrypt.compare(req.body.password, user.password).then(isMatch => {
                if (isMatch) {
                    // User's password is correct and we need to send the JSON Token for that user
                    const payload = {
                        _id: user._id,
                        first_name: user.first_name,
                        last_name: user.last_name,
                        email: user.email,
                        role: user.role
                        //year: user.year
                    }
                    jwt.sign(payload, key, {
                        expiresIn: 172800
                    }, (err, token) => {
                        res.status(200).json({
                            success: true,
                            token: `Bearer ${token}`,
                            user: user,
                            msg: "Uživatel úspěšně přihlášen"
                        });
                    })
                } else {
                    return res.status(404).json({
                        msg: "Nesprávné heslo",
                        success: false
                    });
                }
            })
        }
    });

});

/**
 * @route POST api/users/profile
 * @desc Return the User's Data
 * @access Private
 */
userRouter.get('/profile', passport.authenticate('jwt', {

    session: false
}), (req, res) => {


    return res.json({
        user: req.user
    });
});


//update users atributes
userRouter.put('/:id', async (req, res) => {

    const { id } = req.params

    try {
        const response = await User.findByIdAndUpdate(id, req.body)
        if (!response) throw Error('Something went wrong ')
        const updated = { ...response._doc, ...req.body }
        res.status(200).json(updated)
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
})

//get all users
userRouter.get('/', async (req, res) => {

    try {
        const Users = await User.find();
        if (!Users) throw new Error('No Users')
        res.status(200).json(Users)
    } catch (error) {
        res.status(500).json({ message: error.message })
    }

})

module.exports = userRouter;
