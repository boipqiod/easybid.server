import express from "express";
import cors from 'cors'
import router from "./src/routes/data";
import authRouter from "./src/routes/auth";

const app = express();
const port = 3003;

app.use(express.json());
app.use(cors());


app.use('/data', router)
app.use('/auth', authRouter)

app.use('/', (req, res) => {
    res.send("TEST!")
})
app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});