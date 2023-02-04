import Tweet from "../models/tweets.js";

class TweetRepository{
    async create(data){
        const tweet = await Tweet.create(data);
        return tweet;
    }

    async get(id){
        const tweet = await Tweet.findById(id);
        return tweet;
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

    async update(tweetId,data){
        const tweet = await Tweet.findByIdAndUpdate(tweetId,data);
        return tweet;
    }

    async destroy(id){
        const tweet = await Tweet.findByIdAndDelete(id);
        return tweet;
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