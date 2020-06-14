const User = require('../../model/user.model');
const { hash } = require('../../config/bcrypt');

//get user
module.exports.getUser = async (req, res) => {
    let id = req.query.id;
    let user = await User.findById(id);
    res.json({user});
}
//create user
module.exports.signUp = async (req, res) => {
    let { name, phone, email } = req.body;

    //hash password by bcryptjs
    let password = hash(req.body.password);

    //create user
    let user = new User({ name, phone, email, password });

    user.save()
        .then()
        .catch(({ message }) => console.log(message));
        
    res.json({user});

}

//login
module.exports.login = async (req, res) => {
    let user = res.locals.user;
    res.json({user});
}