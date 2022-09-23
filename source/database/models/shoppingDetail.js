
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
    const shoppingDetail = sequelize.define(alias, cols, config)
    return shoppingDetail
}

module.exports = model