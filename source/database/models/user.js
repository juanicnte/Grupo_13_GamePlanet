const model = function(sequelize, DataTypes){
    let alias = 'user'
    let cols = {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        fullName: {
            type: DataTypes.VARCHAR
        },
        user: {
            type: DataTypes.VARCHAR
        },
        password: {
            type: DataTypes.VARCHAR
        },
        perfil: {
            type: DataTypes.VARCHAR
        },
        birthDay: {
            type: DataTypes.DATE
        },
        image: {
            type: DataTypes.VARCHAR,
            defaultValue: 'defaultUser.png'
        },
        createdAt: {
            type: DataTypes.DATE
        },
        updatedAt: {
            type: DataTypes.DATE
        }
    }
    let config = {
        tableName: 'users',
        timestamps: true

    }
    const user = sequelize.define(alias, cols, config)
    return user
}

module.exports = model