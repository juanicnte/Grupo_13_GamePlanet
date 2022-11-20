const model = function(sequelize, DataTypes){
    let alias = 'user'
    let cols = {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        fullName: {
            type: DataTypes.STRING
        },
        user: {
            type: DataTypes.STRING
        },
        email:{
            type: DataTypes.STRING
        },
        password: {
            type: DataTypes.STRING
        },
        perfil: {
            type: DataTypes.STRING,
            defaultValue: 'User'
        },
        birthDay: {
            type: DataTypes.DATEONLY
        },
        image: {
            type: DataTypes.STRING,
            defaultValue: 'default.png'
        },
       
    }
    let config = {
        tableName: 'users',
        timestamps: false

    }
    const user = sequelize.define(alias, cols, config)
    /* versión 2
    user.associate = function(models){
        user.hasMany(models.shoppingCart,{
            as: 'shoppingCart',
            foreingKey: 'userId'
        }),
        user.hasMany(models.shopping,{
            as: 'shopping',
            foreingKey: 'userId'
        })
    }*/
    return user
}

module.exports = model