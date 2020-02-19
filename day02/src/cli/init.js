/**
 * 목표: project.json 을 만든다
 *
 * 1. 내용은 config/project.json 을 카피해옴
 * 2. src 하위에 project.json 생성
 * 3. 내용 복제
 */

const path = require("path");
const { file } = require("../util");

const CONFIG_FOLDER_NAME = "config";
const CONFIG_FILE_NAME = "config.json";
const FILE_NAME = "project.json";

async function init() {
  const rootPath = path.resolve(__dirname, "..");
  const configJsonPath = path.resolve(
    rootPath,
    CONFIG_FOLDER_NAME,
    CONFIG_FILE_NAME
  );

  const content = file.readFile(configJsonPath);
  await file.createFile(rootPath, FILE_NAME, content);
}

init();

/**
 * root 경로, container 경로 등을 지정해 두는. 경로풀!!
 * path 를 한군데 모아놓고 경로관련된 것들은 한 파일에서 관리할 수 있게 하면 좋다
 */
