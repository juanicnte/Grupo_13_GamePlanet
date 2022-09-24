const model = function(sequelize, DataTypes){
    let alias = 'product'
    let cols = {
        id: {
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
        categoryId: {
            type: DataTypes.INTEGER
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
    const Product = sequelize.define(alias, cols, config)

    Product.associate = function(models){
        Product.hasMany(models.shoppingCart,{
            as: 'shoppingCart',
            foreingKey: 'productId'
        }),
        Product.hasMany(models.shoppingDetail,{
            as: 'shoppingDetail',
            foreingKey: 'productId'
        })
    }

    return Product
}



module.exports = model