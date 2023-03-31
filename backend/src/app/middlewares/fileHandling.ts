import { NextFunction, Request, Response } from "express";
import { uploadFilesMiddleware } from "./upload";

export async function fileHandling(
  req: Request,
  res: Response,
  next: NextFunction
) {
  try {
    await uploadFilesMiddleware(req, res);
    res.json(req.file?.filename);
  } catch (error) {
    res.send({ msg: error });
  }
}
