import express from 'express';
import {connect} from './config/database.js'
import apiRoutes from './routes/index.js'
import bodyParser from 'body-parser';


const app = express();

import TweetService from './service/tweet-service.js';

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}))

app.use('/api', apiRoutes)
app.listen(3000, async ()=>{

    console.log("Server started at PORT 3000");
    await connect();

    console.log("Mongodb connected");
    
    // let service = new TweetService();

    // await service.create({content: "is the  #JOshh"})
})