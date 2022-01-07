const { Post } = require('../models');

const postData = [{
        title: 'Meta debutes the Web 3.5',
        content: 'Lorem ipsum',
        user_id: 1
    },
    {
        title: 'Apple launches into the EV space with "The Pear"!',
        content: 'Lorem Ipsum',
        user_id: 2
    },
    {
        title: 'Roommates discover $200,000 in a secret room off their apartment: Cops investigating',
        content: 'Lorem ipsum',
        user_id: 3
    }

];

const seedPosts = () => Post.bulkCreate(postData);

module.exports = seedPosts;