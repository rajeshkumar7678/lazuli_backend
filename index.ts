import { Request, Response } from "express";
import express from "express";
import { mongoDataBase } from "./utils/db";
import importDataToCollections from "./utils/importData";

const app = express();
app.use(express.json());
let port = process.env.port || 3000;

app.get("/", (req: Request, res: Response) => {
  importDataToCollections()
    .then(() => console.log("Import complete"))
    .catch((err: any) => console.error("Import failed:", err));
  res.send("welcome to lazuli backend");
});

app.listen(port, async () => {
  try {
    await mongoDataBase;
    console.log("connected to mongodb");
  } catch (error) {
    console.log(error);
  }
  console.log(`Server is running on port ${port}`);
});
