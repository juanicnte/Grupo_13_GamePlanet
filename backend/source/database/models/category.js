const model = function(sequelize, DataTypes){
    let alias = 'category'
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
            type: DataTypes.STRING,
            allownNull: true
        }
    }
    let config = {
        tableName: 'categories',
        timestamps: false

    }
    const category = sequelize.define(alias, cols, config)
    category.associate = function(models){
        category.hasMany(models.product,{
            as: 'product',
            foreingKey: 'categoryId'
        })
    }
    return category
}

module.exports = model