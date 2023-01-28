const Tweet = require('../models/tweets')

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
            const tweet = await Tweet.findById(id).populate({path: 'comments'});
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
}

module.exports = TweetRepository;