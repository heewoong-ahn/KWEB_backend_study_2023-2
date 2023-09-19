const http = require("http");
const hostname = "127.0.0.1";
const port = 3300;
const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader("Content-Type", "text/plain");
  res.end("heewoong ahn\n");
});
server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});

//git clone 주소로 git에 있는것 복제
//복제한 폴더 안에 변경사항 만들고
//git add . "."은 all을 의미
//git commit
//git push
