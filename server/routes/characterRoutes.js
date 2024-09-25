import { Router } from "express";
import { deleteCharacterById, getCharacterById, getCharacters } from "../controllers/characterController.js";


const router = Router();


router.get('/get-all-characters',getCharacters);
router.get('/get-character/:id',getCharacterById);
router.delete('/delete-character/:id',deleteCharacterById);



export default router;