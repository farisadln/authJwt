module.exports = (sequelize, DataTypes) => {
    const User = sequelize.define("user",{
        name : {
            allowNull : false,
            type: DataTypes.STRING
        },
        email : {
            allowNull:  false,
            unique : true,
            type : DataTypes.STRING
        },
        password : {
            allowNull: false,
            type : DataTypes.STRING
        },
        createdAt : {
            type: DataTypes.DATEONLY,
        },
        updatedAt : {
            type: DataTypes.DATEONLY,

        }

    },{timestamps: true, tableName:"user"});

    return User;
};


