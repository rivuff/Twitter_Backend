import { UserRepository } from "../repository/index.js";

class UserService{
    constructor(){
        this.userRepository=new UserRepository();
    }

    async signUp(data){
        try {
            const user = await this.userRepository.create(data);
            return user;
        } catch(error) {
            throw error;
        }
    }

    async getuserByEmail(email){
        try {
            const response = await this.userRepository.findBy({email});
            return response;
        } catch (error) {
            console.log("Something went wrong in user repository");
            throw error
        }
    }
}

export default UserService