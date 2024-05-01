module.exports = (sequelize, DataTypes) => {
    const Uploads = sequelize.define("Uploads", {
        title: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        postText: {
            type: DataTypes.TEXT,
            allowNull: false,
        },
        username: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        likeCounter: {
            type: DataTypes.INTEGER,
            defaultValue: 0,
        },
        createdAt: {
            type: DataTypes.DATE,
            defaultValue: DataTypes.NOW, // Default value is the current timestamp
            allowNull: false,
        },
    });

    return Uploads;
};