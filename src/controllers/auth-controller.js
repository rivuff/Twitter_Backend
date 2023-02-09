import UserService from "../service/user-service.js";

const userService = new UserService();

export const signUp = async (req,res)=>{
    try {
        const response =await userService.signUp({
            email: req.body.email,
            password: req.body.password,
            name: req.body.name
        });
        return res.status(200).json({
            success: true,
            message:'Successfully created new user',
            data: response,
            err: {}
        })
    } catch (error) {
        return res.status(500).json({
            success: true,
            message:'Something went wrong',
            data: {},
            err: error
        })
    }
}

