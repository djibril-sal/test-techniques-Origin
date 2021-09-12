const sequelize = require('sequelize');

const tags_video = db.define('Tags',{

    id:{type:sequelize.INTEGER, required:true, autoIncrement:true, allowNull:false, primaryKey:true},
    idVideo:{type:sequelize.INTEGER, autoIncrement:true, allowNull:false, referencies:{model:'Users', key:'id'}},
    idTags:{type:sequelize.INTEGER, autoIncrement:true, allowNull:false, referencies:{model:'Users', key:'id'}},
    
});


module.exports = sequelize.model('Tag-Video', tags_video);