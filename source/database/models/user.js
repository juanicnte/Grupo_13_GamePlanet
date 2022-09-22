const model = function(sequelize, DataTypes){
    let alias = 'user'
    let cols = {

    }
    let config = {
        tableName: 'users'

    }
    const user = sequelize.define(alias, cols, config)
    return user
}

module.exports = model