
const model = function(sequelize, DataTypes){
    let alias = 'shoppingDetail'
    let cols = {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        shoppingId: {
            type: DataTypes.INTEGER
        },
        productId: {
            type: DataTypes.INTEGER
        },
        units: {
            type: DataTypes.INTEGER
        }
    }
    let config = {
        tableName: 'shoppingDetail',
        timestamps: true,
        updateAd: false

    }
    const ShoppingDetail = sequelize.define(alias, cols, config)

    ShoppingDetail.associate = function(models){
        ShoppingDetail.belongsTo(models.product,{
            as: 'product',
            foreingKey: 'productId'
        }),
        ShoppingDetail.belongsTo(models.shopping,{
            as: 'shopping',
            foreingKey: 'shoppingId'
        })
    }
    
    return ShoppingDetail
}


module.exports = model