const { User } = require('../models');

const userData = [{
        username: 'Jason',
        password: 'password123'
    },
    {
        username: 'Lily',
        password: 'liky'
    },
    {
        username: 'Harry',
        password: 'harryp'
    }

];

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;