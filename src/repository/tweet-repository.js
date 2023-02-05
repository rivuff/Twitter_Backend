import Tweet from "../models/tweets.js";
import CrudRepository from "./crud-repository.js";
class TweetRepository{
    constructor(){
        super(Tweet)
    }

    async create(data){
        try {
            const tweet = await Tweet.create(data);
            return tweet;
        } catch (error) {
            console.log(error);
            return error;
        }
       
    }

    async getWithComments(id){
        try {
            const tweet = await Tweet.findById(id).populate({path: 'comments'}).lean();
            return tweet;
        } catch (error) {
            console.log(error);
            return error;
        } 
        
    }

    async getAll(offset,limit){
        try {
            const tweet = await Tweet.find().skip(offset).limit(limit);
            return tweet;
        } catch (error) {
            console.log(error);
            return error;
        }
        
    }
}

export default TweetRepository;