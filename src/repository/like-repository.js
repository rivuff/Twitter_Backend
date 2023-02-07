import Like from '../models/like.js';
import CrudRepository from './crud-repository.js';

class LikeRespository extends CrudRepository {
    constructor() {
        super(Like);
    }

    async create(data) {
        try {
            console.log(data);
            const result = await Like.create(data);
            return result;
        } catch (error) {
            console.log("Something went wrong in like repo");
            throw error;
        }
    }


    async findByUserAndLikeable(data) {
        try {
            const like = await Like.findOne(data);
            return like;
        } catch(error) {
            throw error;
        }
    }
}

export default LikeRespository;