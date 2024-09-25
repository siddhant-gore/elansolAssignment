import { Router } from "express";
import { deleteBookById, getBookById, getBooks } from "../controllers/bookController.js";


const router = Router();


router.get('/get-all-books',getBooks);
router.get('/get-book/:id',getBookById);
router.delete('/delete-book/:id',deleteBookById);



export default router;