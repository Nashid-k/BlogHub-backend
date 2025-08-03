const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const connectDB = require('./config/db');


dotenv.config();

connectDB();

const app = express();

app.use(cors({
  origin: 'https://blog-hub-frontend-wj1y.vercel.app',
  credentials: true,
}));
app.use(express.json());


app.use('/api/auth', require('./routes/authRoute'));
app.use('/api/blogs', require('./routes/blogRoute'));
app.use('/api/users', require('./routes/userRoute'));

app.get('/', (req, res) =>{
    res.json({message: 'BlogHub API is running'});
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, ()=>{
    console.log(`server is running on ${PORT}`);
    
});