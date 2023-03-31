import express, { Express, Request, Response } from "express";
import cors from "cors";
import router from "./routes";

const app: Express = express();
app.use(express.json());
app.use(cors());
app.use(router);

app.get("/", (req: Request, res: Response) => {
  res.send("Express + TypeScript Server");
});

app.listen(3000, () => {
  console.log(`⚡️[server]: Server is running at http://localhost:3000`);
});
