const express = require('express');
const connect = require('./config/database')
const app = express();
const Tweet = require('./models/tweets')
const TweetRepository = require('./repository/tweet-repository')
const Comment = require('./models/comment');

app.listen(3000, async ()=>{

    console.log("Server started at PORT 3000");
    await connect();

    console.log("Mongodb connected");

    // const tweet = await Tweet.create({
    //     content: 'second tweet'
    // })

    const tweetRepo = new TweetRepository();
    // const tweet = await tweetRepo.create({content: "My first tweet"})
    // console.log(tweet);
    // const comment = await Comment.create({content: "new comment"})

    // tweet.comments.push(comment);
    // await tweet.save();
    const tweet = await tweetRepo.getWithComments('63d4b8a37de627fd07a7a731')

    console.log(tweet);
})