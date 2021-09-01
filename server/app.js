import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';

import postRoutes from './routes/posts.js';


const app = express();
const port = 3333;

app.use(cors());

app.use('/posts', postRoutes)

app.use(express.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));


const connectionURL = "mongodb+srv://eversouz:123@cluster0.jb2ww.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";

mongoose.connect(connectionURL, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => app.listen(port, () => console.log('server rubnning')))
    .catch((error) => console.log(error.message));

mongoose.set('useFindAndModify', false);