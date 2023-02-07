import express from 'express';
import {connect} from './config/database.js'
import apiRoutes from './routes/index.js'
import bodyParser from 'body-parser';


const app = express();

import TweetService from './service/tweet-service.js';
import {UserRepository, TweetRepository} from './repository/index.js';
import LikeService from './service/like-service.js';

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}))

app.use('/api', apiRoutes)
app.listen(3000, async ()=>{

    console.log("Server started at PORT 3000");
    await connect();

    console.log("Mongodb connected");
    
    const userRepo = new UserRepository();
    const tweetRepo = new TweetRepository();

    const tweets = await tweetRepo.getAll(0,10);
    const users = await userRepo.getAll();
    // const user = userRepo.create({
    //     email: 'rivunaskar0@gmail.com',
    //     password: 'abcdef',
    //     name:'Rivu Naskar'
    // })
    //console.log(users);
    const likeService = new LikeService();
    await likeService.toggleLike(tweets[1].id,'Tweet',users[0].id);

})