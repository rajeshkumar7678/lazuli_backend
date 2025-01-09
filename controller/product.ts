import Product from "../models/Product";
import { Request, Response } from "express";

export const getProduct = async (req: Request, res: Response) => {
  try {
    let products = await Product.find();
    res.status(200).json(products);
  } catch (error) {
    res.status(500).json({ message: "Internal server error" });
  }
};

export const postProduct = async (req: Request, res: Response) => {
  try {
    let product = await Product.create(req.body);
    res.status(200).json(product);
  } catch (error) {
    res.status(500).json({ message: "Internal server error" });
  }
};
