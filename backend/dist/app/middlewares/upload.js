"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.uploadFilesMiddleware = void 0;
const multer_1 = __importDefault(require("multer"));
const util_1 = __importDefault(require("util"));
const basePath = "src/public/";
const storage = multer_1.default.diskStorage({
    destination: basePath,
    filename: function (req, file, cb) {
        cb(null, file.originalname);
    },
});
const upload = (0, multer_1.default)({ storage: storage }).single("file");
exports.uploadFilesMiddleware = util_1.default.promisify(upload);
