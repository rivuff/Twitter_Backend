import express from 'express';
import {connect} from './config/database.js'

const app = express();

import TweetService from './service/tweet-service.js';

app.listen(3000, async ()=>{

    console.log("Server started at PORT 3000");
    await connect();

    console.log("Mongodb connected");
    
    let service = new TweetService();

    await service.create({content: "is the  #JOshh"})
})