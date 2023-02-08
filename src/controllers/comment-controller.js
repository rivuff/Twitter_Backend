import CommentService from "../service/comment-service.js";

const commentService = new CommentService();

export const createComment = async (req,res)=>{
    try {
        const responsse = await commentService.create(req.query.modelId, req.query.modelType, req.body.userId, req.body.content);

        res.status(200).json({
            success: true,
            data: responsse,
            err: {},
            message: 'Successfully created a new comment'
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