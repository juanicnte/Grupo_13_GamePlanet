
const model = function(sequelize, DataTypes){
    let alias = 'shopping'
    let cols = {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        bill: {
            type: DataTypes.VARCHAR
        },
        userId: {
            type: DataTypes.INTEGER
        },
        units: {
            type: DataTypes.INTEGER
        },
        createdAt: {
            type: DataTypes.DATE
        }
    }
    let config = {
        tableName: 'shopping',
        timestamps: true,
        updateAd: false

    }
    const shopping = sequelize.define(alias, cols, config)
    return shopping
}

module.exports = model