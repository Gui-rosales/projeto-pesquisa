import multer from "multer";
import fs from "fs";
import util from "util";

const basePath = "src/public/";

const storage = multer.diskStorage({
  destination: basePath,
  filename: function (req, file, cb) {
    cb(null, file.originalname);
  },
});

const upload = multer({ storage: storage }).single("file");
export const uploadFilesMiddleware = util.promisify(upload);
