module.exports = function(sequelize, Sequelize) {
    var BookSchema = sequelize.define('Book', {
        title: Sequelize.STRING,
        author: Sequelize.STRING,
        category: Sequelize.STRING
    },{
        timestamps: false
    });
    return BookSchema;
}