import express from "express";

import { createTweet, getTweet } from "../../controllers/tweet-controller.js";
import { toggleLike } from "../../controllers/like-controller.js";
import {createComment} from "../../controllers/comment-controller.js"
import { signUp } from "../../controllers/auth-controller.js";

const router = express.Router();

router.post('/tweets', createTweet)
router.post('/likes/toggle', toggleLike)
router.get('/tweets/:id', getTweet )

router.post('/comments', createComment)

router.post('/signup', signUp)

export default router