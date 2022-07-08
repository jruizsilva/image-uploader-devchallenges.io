import { Router } from "express";
import imagesController from "../controllers/images.controller";

const router = Router();

router.post("/upload", imagesController.uploadImage);

export default router;
