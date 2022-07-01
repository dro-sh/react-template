import Koa from "koa";
import Logger from "koa-logger";
import serve from "koa-static";
import fs from "fs";

const PORT = process.env.PORT || 8001;

const app = new Koa();

app.use(Logger());

app.use(serve("./public"));

app.use((ctx) => {
  ctx.type = "html";
  ctx.body = fs.readFileSync("./public/index.html");
  ctx.status = 200;
});

app.listen(PORT, function () {
  console.log(
    `==> 🌎  Listening on port ${PORT}. Visit http://localhost:${PORT}/`
  );
});
