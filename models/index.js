const User = require('./User');
const FoodInfo = require('./FoodInfo');

User.hasMany(FoodInfo, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE'
});

FoodInfo.belongsTo(User, {
    foreignKey: 'user_id'
});

module.exports = { User, FoodInfo };
