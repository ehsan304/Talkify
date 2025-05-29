import express from 'express';
import { protectRoute } from '../middleware/auth.middleware.js';
import { acceptFriendRequest, getFriendRequest, getMyFriends, getOutgoingFriendReqs, getRecommendedUsers, sendFriendRequest } from '../controllers/user.controller.js';

const router = express.Router();


// apply protect route middlware to every route
router.use(protectRoute)

router.get("/", getRecommendedUsers);
router.get("/friends", getMyFriends);

router.post("/friend-request/:id", sendFriendRequest)
router.put("/friend-request/:id/accept", acceptFriendRequest)

router.get("/friend-requests", getFriendRequest)
router.get("/outoing-friend-request", getOutgoingFriendReqs)
export default router
