const sequelize = require('sequelize');
const db = require('../config/database');

const Video = db.define('Video', {

    idVideo:{type:sequelize.INTEGER, required:true, autoIncrement:true, allowNull:false, primaryKey:true},
    idUsers:{type:sequelize.INTEGER, autoIncrement:true, allowNull:false, referencies:{model:'Users', key:'idVideo'}},
    nom:{type:sequelize.STRING, required:true, allowNull:false},
    description:{type:sequelize.STRING},
    url:{type:sequelize.STRING, required:true, allowNull:false},
    createdAt:{type:sequelize.STRING},
    updateAt:{type:sequelize.STRING},

});

Video.sync().then(() => {
    console.log('tableau crée !');
  });
  module.exports = sequelise.model('Video', Video);
