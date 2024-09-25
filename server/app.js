import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import ErrorHandler from "./utils/errorHandler.js";
import bookRoutes from './routes/bookRoutes.js';
import characterRoutes from './routes/characterRoutes.js';
import houseRoutes from './routes/houseRoutes.js';
import { fetchBooks } from "./controllers/bookController.js";
import { fetchCharacters } from "./controllers/characterController.js";
import { fetchHouses } from "./controllers/houseController.js";

dotenv.config();

const app = express();

app.use(express.json()); 
app.use(express.urlencoded({ extended: true })); 

app.use(
  cors({
    origin: "*",
    methods: ["GET", "POST", "DELETE", "UPDATE", "PUT", "PATCH"],
    credentials: true,
  })
);


app.get("/", (req, res) => {
  res.json({ message: "Welcome to server" });
});

fetchBooks();
fetchCharacters();
fetchHouses();
app.use('/api/books', bookRoutes);
app.use('/api/characters', characterRoutes);
app.use('/api/houses', houseRoutes);


app.all("*", (req, res, next) => {
  return next(
    new ErrorHandler(
      "Not Found. Kindly check the API path as well as request type",
      404
    )
  );
});


app.use((err, req, res, next) => {
  res.status(err.statusCode || 500).json({
    success: false,
    message: err.message || "Internal Server Error",
  });
});

export default app;
