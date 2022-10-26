const User = require('./User');
const Party = require('./Party');

User.hasMany(Party, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE'
});

Party.belongsTo(User, {
    foreignKey: 'user_id'
});

module.exports = { User, Party };