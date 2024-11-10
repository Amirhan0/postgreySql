const { DataTypes } = require("sequelize");
const sequelize = require('../database');
const User = require("./User");

const Post = sequelize.define('Post', {
    title: {
        type: DataTypes.STRING,
        allowNull: false
    },
    content: {
        type: DataTypes.STRING,
        allowNull: false
    },
    author: {
        type: DataTypes.STRING,
        allowNull: false
    }
})

User.hasMany(Post, {foreignKey: 'userId', onDelete: "CASCADE"})
Post.belongsTo(User, {foreignKey: 'userId'})

module.exports = Post