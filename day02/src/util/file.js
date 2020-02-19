const fs = require("fs");
const path = require("path");
const ENCODE_TYPE_UTF8 = "utf-8";

const readFile = filePath =>
  fs.existsSync(filePath) && fs.readFileSync(filePath, ENCODE_TYPE_UTF8);

const createDir = dirPath => !fs.existsSync(dirPath) && fs.mkdirSync(dirPath);

const createFile = (dirPath, fileName, fileContent) => {
  const filePath = path.resolve(dirPath, fileName);
  if (fs.existsSync(filePath)) return false;
  fs.writeFileSync(filePath, fileContent, ENCODE_TYPE_UTF8);
};

module.exports = {
  readFile,
  createDir,
  createFile
};
