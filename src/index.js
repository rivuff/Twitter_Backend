import express from 'express';
import {connect} from './config/database.js'
import apiRoutes from './routes/index.js'
import bodyParser from 'body-parser';
import passport from 'passport';

import { passportAuth } from './config/jwt-middleware.js';

const app = express();

import TweetService from './service/tweet-service.js';
import {UserRepository, TweetRepository} from './repository/index.js';
import LikeService from './service/like-service.js';
import CommentService from './service/comment-service.js';

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}))

app.use(passport.initialize())
passportAuth(passport);

app.use('/api', apiRoutes)


app.listen(3000, async ()=>{

    console.log("Server started at PORT 3000");
    await connect();
    console.log("Mongodb connected");
    
})