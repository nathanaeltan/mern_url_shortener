import express from "express";
import urlRoutes from './routes/url';
const app = express();

app.use(express.json());

app.use("/api/url", urlRoutes);

export default app;