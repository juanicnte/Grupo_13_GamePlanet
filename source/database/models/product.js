const model = function(sequelize, DataTypes){
    let alias = 'product'
    let cols = {
        sku: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        name: {
            type: DataTypes.VARCHAR
        },
        description: {
            type: DataTypes.VARCHAR
        },
        price: {
            type: DataTypes.INTEGER
        },
        category: {
            type: DataTypes.VARCHAR
        },
        classification: {
            type: DataTypes.VARCHAR,
            defaultValue: 'Sin Clasificacion'
        },
        inOffer: {
            type: DataTypes.BOOLEAN,
            defaultValue: 0
        },
        image: {
            type: DataTypes.VARCHAR,
            defaultValue: 'default.png'
        },
        createdAt: {
            type: DataTypes.DATE
        },
        updatedAt: {
            type: DataTypes.DATE
        }
    }
    let config = {
        tableName: 'products',
        timestamps: true
    }
    const product = sequelize.define(alias, cols, config)
    return product
}

module.exports = model