import express from 'express';
import helmet from 'helmet';
import morgan from 'morgan';
import cors from 'cors';
import dotenv from 'dotenv';

dotenv.config();


const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json()); //middleware to parse JSON bodies
app.use(cors()); //middleware to enable CORS
app.use(helmet()); //helmet is a security middleware that helps to secure Express apps by setting various HTTP headers.
app.use(morgan('dev')); //logs the requests made to the server

app.get('/test', (req, res) => {
  res.send('Hello from the test route!');
});

app.listen(PORT, () => {
  console.log('Server is running on port ' + PORT);
});