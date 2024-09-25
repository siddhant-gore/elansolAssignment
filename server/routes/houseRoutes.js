import { Router } from "express";
import { deleteHouseById, getHouseById, getHouses } from "../controllers/houseController.js";


const router = Router();


router.get('/get-all-houses',getHouses);
router.get('/get-house/:id',getHouseById);
router.delete('/delete-house/:id',deleteHouseById);



export default router;