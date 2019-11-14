module.exports = (client, message) => {
  var Sequelize = require('sequelize');

  var sequelize = new Sequelize('dmmi0dioj6mpk', 'sqknbmnacknhag', '0bcf997703be2c1aadb5bb882fa5d5ae2f46b23b710dfd6edc949bfcf9342908', {
  	host: 'ec2-54-228-252-67.eu-west-1.compute.amazonaws.com',
  	dialect: 'postgres',
  	logging: false,
  });


  var db = {};

  db.sequelize = sequelize;
  db.Sequelize = Sequelize;

  /*
   * equivalent to: CREATE TABLE tags(
   * name VARCHAR(255),
   * description TEXT,
   * username VARCHAR(255),
   * usage INT
   * );
   */
  const Tags = sequelize.define('tags', {
  	name: {
  		type: Sequelize.STRING,
  		unique: true,
  	},
  	description: Sequelize.TEXT,
  	username: Sequelize.STRING,
  	warns: {
  		type: Sequelize.INTEGER,
  		defaultValue: 0,
  		allowNull: false,
  	},
  });
};
