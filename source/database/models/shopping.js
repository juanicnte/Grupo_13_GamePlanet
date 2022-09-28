
const model = function(sequelize, DataTypes){
    let alias = 'shopping'
    let cols = {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        bill: {
            type: DataTypes.VARCHAR
        },
        userId: {
            type: DataTypes.INTEGER
        },
        units: {
            type: DataTypes.INTEGER
        },
        createdAt: {
            type: DataTypes.DATE
        }
    }
    let config = {
        tableName: 'shopping',
        timestamps: true,
        updateAt: false,
        deleteAt: false

    }
    const shopping = sequelize.define(alias, cols, config)
    shopping.associate = function(models){
        shopping.belongTo(models.user,{
            as: 'user',
            foreingKey: 'userId'
        }),
        shopping.hasMany(models.shoppingDetail,{
            as: 'shoppingDetail',
            foreingKey: 'shoppingId'
        })
    }
    return shopping
}

module.exports = model