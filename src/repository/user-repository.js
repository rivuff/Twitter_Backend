import User from '../models/user.js';
import CrudRepository from './crud-repository.js';

class UserRepository extends CrudRepository {
    constructor() {
        super(User);
    }

    async create(data){
        try {
            const response = await User.create(data);
            return response;
        } catch (error) {
            console.log('Something went wrong in usr repo');
            throw error;
        }
    }

    async findBy(data) {
        try {
            const response = await User.findOne(data);
            return response;
        } catch(error) {
            throw error;
        }
    }
}

export default UserRepository;