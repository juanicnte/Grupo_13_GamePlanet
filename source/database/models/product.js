const model = function(sequelize, DataTypes){
    let alias = 'product'
    let cols = {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        name: {
            type: DataTypes.STRING
        },
        description: {
            type: DataTypes.STRING
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
            type: DataTypes.STRING,
            defaultValue: 'default.png'
        },
        createdAt: {
            type: DataTypes.DATE,
            defaultValue: Date.now()
        },
        updatedAt: {
            type: DataTypes.DATE,
            AllowNull: true
        }
    }
    let config = {
        tableName: 'products',
        timestamps: true,
        deleteAt: false
    }
    const Product = sequelize.define(alias, cols, config)

    Product.associate = function(models){
        Product.belongsTo(models.category,{
            as: 'category',
            foreingKey: 'categoryId'
        })/* versión 2,
        Product.hasMany(models.shoppingCart,{
            as: 'shoppingCart',
            foreingKey: 'productId'
        }),
        Product.hasMany(models.shoppingDetail,{
            as: 'shoppingDetail',
            foreingKey: 'productId'
        })*/
    }

    return Product
}



module.exports = model