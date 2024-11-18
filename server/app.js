import "dotenv/config"
import express from "express"
import cors from "cors"
import userRouter from "./routes/user.route.js"
import { DbConnection } from "./config/db.connection.js";


const app = express();
const PORT = process.env.PORT || 5000

// middleware
app.use(express .json());
app.use(express.urlencoded({extended: true}));
app.use(cors());

//db connection 

DbConnection();

app.get("/", (req, res) => {
  res.json({
    status:"success",
    message: "Hello, World!",
  });
});


//apis

app.use("/api/auth/",userRouter);


app.listen(PORT,()=>{
    console.log(`Server running on port ${PORT} /n Visit http://localhost:${PORT} to see the response. `);
});
