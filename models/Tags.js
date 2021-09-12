const sequelize = require('sequelize');
const db = require('../config/database');

const tags = db.define('Tag-Video',{

    idTags:{type:sequelize.INTEGER, required:true, autoIncrement:true, allowNull:false, primaryKey:true},
    valeur:{type:sequelize.NUMBER, required:true, allowNull:false,},
    

});


module.exports = sequelize.model('Tags', tags);