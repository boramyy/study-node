const express = require("express");
const app = express();
// console.log(app);

// app.set("server-port", 3001);
// 이런식으로 데이터를 셋하고

// app.get("server-port")
// 겟으로 가져와서 사용할 수 있음

const SERVER_PORT = 3001;
let userCount = 0;

app.use((req, res, next) => {
  userCount += 1;
  console.log("userCount", userCount);
  /**
   * 왜 나는 userCount 가 2씩 올라가지?
   * - 브라우저에서 favicon.ico 요청도 이 함수를 한번 타기 때문
   * - 콘솔에 req.url 찍어보면 확인가능
   *
   * 그럼 1씩 올라갔던 것은?
   * - 파비콘 캐싱 관련된 이유라고 추정
   */
  req.__data = userCount;
  next();
});

// 첫번째 인자(패스)가 없으면 모든 동작에 대해서 실행됨
// 순차적으로!! req에 데이터를 담아서 넘길 수 있다

// get, post, put ...

app.get("/", (req, res) => {
  req.connection.setTimeout(1000 * 60 * 10);
  const isTarget = !!(req.__data % 4);
  res.json({
    msg: isTarget ? `hi target ${req.__data}` : `hello world ${req.__data}`
  });
});

app.use("*", (req, res) => res.json({ msg: "not found" }));

app.listen(SERVER_PORT, () =>
  console.log(
    "\x1b[35m%s\x1b[0m",
    `server listening on part ${SERVER_PORT}, http://localhost:${SERVER_PORT}`
  )
);
