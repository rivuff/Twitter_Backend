import {TweetRepository ,LikeRepository } from "../repository/index.js"
import Tweet from "../models/tweet.js";

class LikeService{
    constructor(){
        this.likeRepository = new LikeRepository();
        this.tweetRepository = new TweetRepository();
    }

    async toggleLike(modelId, modelType, userId){
        if(modelType=='Tweet'){
            var likeable = await this.tweetRepository.find(modelId);
            
        }else if(modelType=='comment'){
            //Todo
        }
        else{
            console.log("unknown model type");
        }


        const exists = await this.likeRepository.findByUserAndLikeable({
            user: userId,
            onModel: modelType,
            likeable: modelId
        });
       
        console.log('exists', exists);
        if(exists){

            likeable.Like.pull(exists.id);
            await likeable.save();
            await exists.remove()

            var isAdded = false
        } else{
            const newLike = await this.likeRepository.create({
                user:userId,
                onModel: modelType,
                likeable:modelId
            });
            
            console.log(newLike);
            likeable.Like.push(newLike)
            await likeable.save()

            isAdded = true
        }
        return isAdded
    }
}

export default LikeService