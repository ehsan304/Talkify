import jwt from "jsonwebtoken";
import User from "../models/User.js";


export const protectRoute = async (req, res, next) => {
    try {
        const token = req.cookies.jwt

        if (!token) {
            return res.status(401).json({ message: "Unauthorized - no token provided" })
        }


        const decoded = jwt.verify(token, process.env.JWT_SECRET)
        if (!decoded) {
            res.status(401).json({ message: "Unauthorized - token invalid" })
        }

        const user = await User.findById(decoded.userId).select("-password")
        if (!user) {
            return res.status(401).json({ message: "Unauthorized - user not found" })
        }
        // We attach the user to the req object so that we can access the user in other middlewares and in the controllers.
        // This is a common practice in Express when we need to access some data in multiple places.
        // The user is attached to the req object with the name 'user'.
        // This way we can access the user in other middlewares and controllers like this: req.user.
        req.user = user;
        next();

    } catch (error) {
        console.log("Error in protectRoute middleware: ", error)
        res.status(500).json({ message: "Internal server error" })
    }
}