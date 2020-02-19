/**
 * 목표: src/project.json 내부의 설정값을 토대로 폴더 세트를 만든다
 *
 * createUnit 하면 되어야하는 작업들
 *
 * 1. 설정값을 불러온다. project.json은 이값들이 있을거임
 *    - name: 'test1'
 *    - type: ['app', 'pc', 'mobile']
 *    - feature: ['socialShare', 'stamp', 'vote', ...]
 *
 * 2. 설정값에 맞는 파일을 templates 폴더에서 찾는다
 *    /templates
 *      /html
 *        - app.html
 *        - pc.html
 *        - mo.html
 *      /css
 *        - pc.css
 *        - mo.css
 *      /js
 *        /app
 *          - socialShare.js
 *          - stamp.js
 *          - vote.js
 *          - index.js
 *        /pc
 *          - socialShare.js
 *          - stamp.js
 *          - vote.js
 *          - index.js
 *        /mo
 *          - socialShare.js
 *          - stamp.js
 *          - vote.js
 *          - index.js
 *
 * 3. createUnit 실행
 */

/**
 * 상수는 import 보다 상단. 핵핵 최상단 컨벤션에 따라 다를 수 있음
 */
const DOWNLOAD_FOLDER_NAME = "container";
const TEMPLATE_FOLDER_NAME = "template";

const path = require("path");
const { file, date } = require("../util");
const project = require("../project.json");

/**
 * idx 같은 통용되는 줄임 표기 외에는 풀네임
 */
const getTemplateContent = (type, name, extention) => {
  const fileName = `${name}.${extention}`;
  const filePath = path.resolve(
    __dirname,
    "..",
    TEMPLATE_FOLDER_NAME,
    extention,
    extention === "js" ? type : "",
    fileName
  );
  return file.readFile(filePath);
};

const createJsContent = (type, featureList) => {
  if (!(featureList && featureList.length > 0)) return false;

  let content = "";

  featureList.forEach(feature => {
    content += getTemplateContent(type, feature, "js");
  });
  return `(function(){
${content}
// write your code
})()`;
};

const createFilesByType = async (dirPath, projectType, projectFeature) => {
  for (const type of projectType) {
    await file.createFile(
      dirPath,
      `${type}.html`,
      getTemplateContent(type, type, "html")
    );
    await file.createFile(
      dirPath,
      `${type}.css`,
      getTemplateContent(type, type, "css")
    );
    await file.createFile(
      dirPath,
      `${type}.js`,
      createJsContent(type, projectFeature)
    );
  }
};

const createUnit = async project => {
  const {
    name: projectName,
    type: projectType,
    feature: projectFeature
  } = project;

  const currentDateString = date.convertDateToStringYYMMDD(new Date());
  const randomDirName = `${currentDateString}_${projectName}`;
  const dirPath = path.resolve(
    __dirname,
    "..",
    DOWNLOAD_FOLDER_NAME,
    randomDirName
  );
  const imgDirPath = path.resolve(dirPath, "imgs");

  file.createDir(dirPath);

  // while (condition) {
  /**
   * while은 이터레이블 제공
   * => await 랑 같이 사용 가능
   * createFilesByType
   */
  // }
  await createFilesByType(dirPath, projectType, projectFeature);

  /**
   * 이방식으로도 해보긩
   * projectType[0]
   * type에 따라
   */

  for (const type of projectType) {
    await file.createFile(
      dirPath,
      `${type}.html`,
      getTemplateContent(type, type, "html")
    );
    await file.createFile(
      dirPath,
      `${type}.css`,
      getTemplateContent(type, type, "css")
    );
    await file.createFile(
      dirPath,
      `${type}.js`,
      createJsContent(type, projectFeature)
    );
  }

  file.createDir(imgDirPath);
  file.createFile(imgDirPath, "a.png", "");
  file.createFile(imgDirPath, "b.png", "");
};

createUnit(project);
