
const model = function(sequelize, DataTypes){
    let alias = 'shoppingCart'
    let cols = {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        sku: {
            type: DataTypes.INTEGER
        },
        userId: {
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
        ShoppingCart.belongTo(models.product,{
            as: 'product',
            foreingKey: 'sku'
        })
    }

    return ShoppingCart
}



module.exports = model