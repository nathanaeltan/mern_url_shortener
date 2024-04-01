import express from "express";
import cors from 'cors';
import urlRoutes from './routes/url';
const app = express();

app.use(cors());
app.use(express.json());

app.use("/url", urlRoutes);

export default app;