"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const upload_1 = require("./app/middlewares/upload");
const convertFileToJson_1 = require("./app/middlewares/convertFileToJson");
const app = (0, express_1.default)();
app.get("/", (req, res) => {
    res.send("Express + TypeScript Server");
});
app.post("/", upload_1.uploadFilesMiddleware, convertFileToJson_1.generateGraphJsonObject);
app.listen(3000, () => {
    console.log(`⚡️[server]: Server is running at http://localhost:3000`);
});
