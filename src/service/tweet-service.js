const {TweetRepository} = require('../repository/index')
const {HashtagRepository} = require('../repository/index');
class TweetService{
    constructor(){
        this.tweetRepository = new TweetRepository();
        this.HashtagRepository = new HashtagRepository();
    }

    async create(data){
        const content = data.content;

        let tags = content.match(/#[a-zA-Z0-9_]+/g)
        tags = tags.map((tag)=> tag.substring(1));
        console.log(tags);

        const tweet =await this.tweetRepository.create(data);
        let alreadyPresentTags=await this.HashtagRepository.findByName(tags);
        console.log(alreadyPresentTags);

        let titleOfPresentTags = alreadyPresentTags.map(tags => tags.title)
        let newTags = tags.filter(tag => !titleOfPresentTags.includes(tag))

        newTags = newTags.map(tag => {
            return {title: tag, tweets: [tweet.id]}

        })

        const response = await this.HashtagRepository.bulkCreate(newTags);
        console.log(response); 

        alreadyPresentTags.forEach((tag)=>{
            tag.tweets.push(tweet.id);
            tag.save();
        })
        //to do create a hashtag and add here
        /**
         * bulk create in mongoose
         * create title of hashtags based on multiple tags
         * How to add tweet id inside all the hashtags
         */

    
        return tweet;
    }
}

module.exports =TweetService