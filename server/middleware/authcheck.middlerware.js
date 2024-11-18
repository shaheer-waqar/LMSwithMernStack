import jwt from "jsonwebtoken"

export const CheckAuth = (req,res,next) => {
    const auth = req.headers.authorization;
    if(!auth){
        return res.status(401).json({msg: "Not authorized, token is required"});
    }

    const token = auth.split(' ')[1];

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.user = decoded;
        next();
    } catch (error) {
        res.status(401).json({msg: "Token is not valid"});
    }
}