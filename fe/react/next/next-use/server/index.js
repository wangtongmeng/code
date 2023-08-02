let express = require("express");
let bodyParser = require("body-parser");
let cors = require("cors");
let session = require("express-session");
let MongoStore = require("connect-mongo")(session);

let config = require("./config");
let { UserModel } = require("./model");

let app = express();

app.use(
  cors({
    origin: ["http://localhost:3000"],
    credentials: true,
    allowedHeaders: "Content-Type,Authorization",
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS",
  })
);
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(
  session({
    secret: config.secret,
    resave: false,
    saveUninitialized: true,
    store: new MongoStore({
      url: config.dbUrl,
      mongoOptions: {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      },
    }),
  })
);

app.get("/api/users", async (req, res) => {
  let users = await UserModel.find();
  users = users.map((user) => user.toJSON());
  res.send({ code: 0, data: users });
});
app.get("/api/users/:id", async (req, res) => {
  let user = await UserModel.findById(req.params.id);
  res.send({ code: 0, data: user.toJSON() });
});
app.post("/api/register", async (req, res) => {
  let user = req.body;
  user = await UserModel.create(user);
  res.send({ code: 0, data: user.toJSON() });
});
app.post("/api/login", async (req, res) => {
  let user = req.body;
  let dbUser = await UserModel.findOne(user);
  if (dbUser) {
    req.session.currentUser = dbUser.toJSON();
    res.send({ code: 0, data: dbUser.toJSON() });
  } else {
    res.send({ code: 1, error: "登录失败" });
  }
});

app.get("/api/currentUser", async (req, res) => {
  let currentUser = req.session.currentUser;
  if (currentUser) {
    res.send({ code: 0, data: currentUser });
  } else {
    res.send({ code: 1, error: "当前用户未登录" });
  }
});
app.listen(4000, () => {
  console.log("服务器在4000端口启动!");
});
