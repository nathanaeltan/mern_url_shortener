import mongoose from 'mongoose';
import app from "./app";
import swaggerDocs from './utils/swagger';

const PORT = process.env.PORT || 5001;
const MONGO_USERNAME = process.env.MONGO_INITDB_ROOT_USERNAME || 'your_username';
const MONGO_PASSWORD = process.env.MONGO_INITDB_ROOT_PASSWORD || 'your_password';
const MONGO_URI = process.env.MONGO_URI || `mongodb://${MONGO_USERNAME}:${MONGO_PASSWORD}@localhost:27017/test_db`;
mongoose.connect(MONGO_URI).then(() => {
  console.log(MONGO_URI, "URI")
  console.log("Mongoose Connected")
  app.listen(PORT, () => {
    console.log(`Server Running on PORT ${PORT}`);
    swaggerDocs(app);
  });

}).catch(err => {
  console.log(err, "Error While connecting to MongoDB")
})
