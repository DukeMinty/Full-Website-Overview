module.exports = (sequelize, DataTypes) => {

    const Posts = sequelize.define("Posts",{
        recipeTitle:{
            type: DataTypes.STRING,
            allowNull: false,
        },
        recipeDesc:{
            type: DataTypes.STRING,
            allowNull: false,
        },
        userName:{
            type: DataTypes.STRING,
            allowNull: false,
        },
    });

    return Posts;
}