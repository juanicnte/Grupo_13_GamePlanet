const model = function(sequelize, DataTypes){
    let alias = 'product'
    let cols = {

    }
    let config = {
        tableName: 'products'
    }
    const product = sequelize.define(alias, cols, config)
    return product
}

module.exports = model