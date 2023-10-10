const fs = require("fs");
const path = require("path");
const util = require("util");

const PtoTest = "./test";
// "./"는 현재 directory내부에서의 탐색.

const getLS = util.promisify(fs.readdir); //array of filenames
const getFileStat = util.promisify(fs.stat); //stats of file such as size, 확장자

const searchDirectory = async (testDirectory) => {
  const files = await getLS(testDirectory);
  files.forEach(async (file) => {
    //path.join을 통해 PATH와 그 안의 파일을 합쳐 하나의 경로로 만듬.
    //console.log(file);
    const filePath = path.join(testDirectory, file);
    //fs.stat을 적용하려면 경로까지 적어줘야 하는 것 같음.
    //console.log(filePath);
    //fs.stat을 통해 filePath가 어떤 파일인지 알아냄.
    const fileStat = await getFileStat(filePath);
    //console.log(stat);
    //.isDirectory()를 통해 파일이 directory형식이면 루프를 돌아 파일 내부 또 탐색.
    if (fileStat.isDirectory()) await searchDirectory(filePath);
    //.extname()은 확장자 알려줌.
    else if (path.extname(filePath) === ".js") console.log(filePath);
  });
};

(async () => {
  try {
    await searchDirectory(PtoTest);
  } catch (err) {
    //console.error(err);
  }
})();
