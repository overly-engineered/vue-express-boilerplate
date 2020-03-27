const express = require("express");
const session = require("express-session");
const http = require("http");
const app = express();
const server = http.createServer(app);

const _ = require("lodash");


/**
 * Standard server
 */
app.use("/dist", express.static(__dirname));

app.use(
  session({ secret: "superSecret", saveUninitialized: true, resave: true })
);

server.listen(3000, () => {
  console.log("listening on 3000");
});

app.get(
  "/",
  (req: { session: any }, res: { sendFile: (arg0: string) => void }) => {
    console.log(req.session);
    _.defaults(req.session, {
      user: {}
    });
    res.sendFile(__dirname + "/index.html");
  }
);


