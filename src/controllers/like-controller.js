import LikeService from "../service/like-service.js";

const likeService = new LikeService();

export const toggleLike = async (req,res)=>{
    try {
        const responsse = await likeService.toggleLike(req.query.modelId, req.query.modelType, req.body.userId);

        res.status(200).json({
            success: true,
            data: responsse,
            err: {},
            message: 'Successfully toggled likes'
        })
    } catch (error) {
        res.status(500).json({
            success: false,
            data: {},
            message: 'Something went wrong',
            err: error
        })
    }
}