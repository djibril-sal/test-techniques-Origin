const sequelize = require('sequelize');
const db = require('../config/database');
require('sequelize-isunique-validator')(sequelize);

const user = db.define('User', {
  email: { type: sequelize.STRING, required: true, isunique: true, allowNull: false, validate: {isEmail: true, isUnique: sequelize.validateIsUnique('email')}},
  Password: { type: sequelize.STRING, required: true, isunique: true, allowNull: false }
});

userSchema.plugin(uniqueValidator);

module.exports = sequelize.model('User', user);