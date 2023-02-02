const express = require('express');
const connect = require('./config/database')
const app = express();
const Tweet = require('./models/tweets')
const TweetRepository = require('./repository/tweet-repository')
const Comment = require('./models/comment');
const HashtagRepository = require('./repository/hashtag-repository')
const TweetService = require('./service/tweet-service');
app.listen(3000, async ()=>{

    console.log("Server started at PORT 3000");
    await connect();

    console.log("Mongodb connected");

    const repo = new HashtagRepository();

    let service = new TweetService();
    const tweet =await service.create({
        content: 'I #love my #life'
    });

    console.log(tweet);
   
})