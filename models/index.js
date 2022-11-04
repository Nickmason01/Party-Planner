const User = require('./User');
const Party = require('./Party');
// model logic for the database relationships of Party and User.
User.hasMany(Party, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE'
});

Party.belongsTo(User, {
    foreignKey: 'user_id'
});

module.exports = { User, Party };