const sequelize = require('../config/connection');
const { User, Party } = require('../models');
// seed test data
const userData = require('./userData.json');
const partyData = require('./partyData.json');

const seedDatabase = async () => {
    await sequelize.sync({ force: true });

    const users = await User.bulkCreate(userData, {
        individualHooks: true,
        returning: true,
    });

    for (const party of partyData) {
        await Party.create({
            ...party,
            user_id: users[Math.floor(Math.random() * users.length)].id,
        });
    }
    process.exit(0);
};

seedDatabase();