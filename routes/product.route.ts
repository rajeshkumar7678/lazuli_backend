import express from "express";
import { getProduct, postProduct } from "../controller/product";

const router = express.Router();

router.get("/", getProduct);
router.post("/", postProduct);

export default router;
