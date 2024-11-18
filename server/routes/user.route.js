import express from 'express';
import { LoginUser, registerUser ,} from "../controllers/user.contoller.js"
import { CheckAuth } from '../middleware/authcheck.middlerware.js';


const router = express.Router();


router.post("/register",registerUser);
router.post("/login",LoginUser);
router.get("/checkout",CheckAuth,(req,res)=>{
    const user  = req.user

    res.json({
        user,
        msg:"succes"
    })
})

export default router;