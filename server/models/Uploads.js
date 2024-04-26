module.exports = (sequelize, DataTypes) => {

    const Uploads = sequelize.define("Uploads", {
        title: {
            type: DataTypes.STRING,
            allowNull : false,
        },
        postText: {
            type: DataTypes.TEXT,
            allowNull : false,
        },
        username: {
            type: DataTypes.STRING,
            allowNull : false,
        }
    });

    return Uploads;
}