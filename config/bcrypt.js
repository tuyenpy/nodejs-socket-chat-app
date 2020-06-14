const bcrypt = require('bcryptjs');
const salt = bcrypt.genSaltSync(parseInt(process.env.SALT_BCRYPT));

const hash = function(password) {
    return bcrypt.hashSync(password, salt);
}

const comparePassword = function(password, hash) {
    return bcrypt.compareSync(password, hash);
}

module.exports = {hash, comparePassword};