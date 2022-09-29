
const model = function(sequelize, DataTypes){
    let alias = 'shoppingCart'
    let cols = {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        userId: {
            type: DataTypes.INTEGER
        },
        productId: {
            type: DataTypes.INTEGER
        },
        units: {
            type: DataTypes.INTEGER
        },
        createdAt: {
            type: DataTypes.DATE
        },
        updatedAt: {
            type: DataTypes.DATE
        }
    }
    let config = {
        tableName: 'shoppingCart',
        timestamps: true

    }
    const ShoppingCart = sequelize.define(alias, cols, config)

    ShoppingCart.associate = function(models){
        ShoppingCart.belongsTo(models.user,{
            as: 'user',
            foreingKey: 'userId'
        }),
        ShoppingCart.belongsTo(models.product,{
            as: 'product',
            foreingKey: 'productId'
        })
    }

    return ShoppingCart
}

module.exports = model