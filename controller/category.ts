import Category from "../models/Category";
import { Request, Response } from "express";

export const getCategory = async (req: Request, res: Response) => {
  try {
    let categories = await Category.find();
    res.status(200).json(categories);
  } catch (error) {
    res.status(500).json({ message: "Internal server error" });
  }
};

export const postCategory = async (req: Request, res: Response) => {
  try {
    let category = await Category.create(req.body);
    res.status(200).json(category);
  } catch (error) {
    res.status(500).json({ message: "Internal server error" });
  }
};
