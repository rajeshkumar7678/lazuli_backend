import express, { Request, Response } from "express";
import { getCategory, postCategory } from "../controller/category";

const router = express.Router();

router.get("/", getCategory);
router.post("/", postCategory);

export default router;
