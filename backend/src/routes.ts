import { Router } from "express";
import { fileHandling } from "./app/middlewares/fileHandling";
import { generateGraphJsonObject } from "./app/middlewares/convertFileToJson";

const router = Router();

router.post("/upload", fileHandling, generateGraphJsonObject);
router.get("/getGraph/:fileName", generateGraphJsonObject);

export default router;
