const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');
const bcrypt = require('bcryptjs');

class User extends Model{
    checkPassword(loginPw) {
        return bcrypt.compareSync(loginPw, this.password);
    }
}

User.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        username: {
            type: DataTypes.STRING, 
            allowNull: false,
            unique: true 
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [4]
            }
        }
    },
    {
        hooks: {
            
        //set up beforeCreate lifecycle "hook" functionality
        async beforeCreate(newUserData) {
            newUserData.password = await bcrypt.hash(newUserData.password, 10);
            return newUserData;
        },
        //set up beforeUpdate lifecycle "hook" functionality
        async beforeUpdate(updatedUserData){
             updatedUserData.password = await bcrypt.hash(updatedUserData.password, 10);
             return updatedUserData;
        }
      },
      // pass in sequelize connection
      sequelize,
      //dont automatically create createdAt/updatedAt timestamp fields 
      timestamps: false,
      // don't pluralize name of databse table
      freezeTableName: true,
      // use underscores instead of camel-casing
      underscored: true,
      // make it so our model name stays lowercase in the database 
      modelName: 'user'
    } 
);

module.exports = User;