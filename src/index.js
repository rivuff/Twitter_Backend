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
    // const tweet = await tweetRepo.create({content: "My fourth tweet"})
    // // tweet.userEmail ="a@cmail.com"

    // // console.log(tweet);
    // // const comment = await Comment.create({content: "new comment fourth"})

    // // tweet.comments.push(comment);
    // // await tweet.save();
    // // const tweet = await tweetRepo.getWithComments('63d4b8a37de627fd07a7a731')
    
    // const tweet =await tweetRepo.create({content: "demo tweet"})
    // console.log(tweet);

    // const tweet = await tweetRepo.getAll();
    // tweet[9].userEmail = "sd@g.com"
    // console.log(tweet[9]);
})