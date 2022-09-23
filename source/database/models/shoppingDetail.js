
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
        sku: {
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
        ShoppingDetail.belongTo(models.product,{
            as: 'product',
            foreingKey: 'sku'
        })
    }
    
    return ShoppingDetail
}


module.exports = model