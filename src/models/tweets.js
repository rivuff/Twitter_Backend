import mongoose from "mongoose";

const tweetSchema = new mongoose.Schema({
    content: {
        type: String,
        required: true,
        max: [250, 'Tweet can not be more than 250 characters']
    },
    hashtags: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Hashtag'
        }
    ]
    
},{timestamps: true});

// tweetSchema.virtual('contentWithEmail').get(function process(){
//     return `${this.content} \nCreated by: ${this.userEmail}`;
// })

// tweetSchema.pre('save', function(next){
//     console.log("inside the hook");
//     this.content = this.content + "...."
//     next();
// })

const Tweet = mongoose.model('Tweet', tweetSchema);

export default Tweet;