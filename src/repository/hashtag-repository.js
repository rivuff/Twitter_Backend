const Hashtag = require('../models/hashtag')

class HashtagRepository{
    async create(data){
        try {
            const tag = await Hashtag.create(data);
            return tag;
        } catch (error) {
            console.log(error);
            throw error;
        }
        
    }

    async bulkCreate(data){
        try {
            const tags = await Hashtag.insertMany(data)
            return tags
        } catch (error) {
            console.log(error);
            throw error
        }
        
    }

    async get(id){
        try {
            const tag = await Hashtag.findById(id);
            return tag;
        } catch (error) {
            console.log(error);
            throw error
        }
        
    }

    async destroy(id){
        try {
            const tag = await Hashtag.findByIdAndDelete(id);
            return tag;
        } catch (error) {
            console.log(error);
            throw error
        }
       
    }

   async findByName(titleList){
        try {
            const tags = await Hashtag.find({
                title: titleList
            })
            return tags;
        } catch (error) {
            console.log(error);
            throw error
        }
   }
}

module.exports = HashtagRepository;