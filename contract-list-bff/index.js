const express = require("express");
const session = require("express-session");
const uuid = require("uuid");
const agents = require("./Agents");
const { CONTRACT_TYPES, templates: defaultTemplates } = require("./Template");
const {} = require("./");

const app = express();

app.use(function (req, res, next) {
  res.setHeader("Access-Control-Allow-Origin", "http://localhost:3000");
  res.setHeader("Access-Control-Allow-Methods", "GET, POST");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "X-Requested-With,content-type"
  );
  res.setHeader("Access-Control-Allow-Credentials", true);
  next();
});

app.set("trust proxy", 1);
app.use(
  session({
    secret: "secret",
    resave: false,
    saveUninitialized: true,
    cookie: {
      maxAge: 1000 * 60 * 60,
    },
  })
);
app.use(express.json());

let sess;

app.get("/agents", function (req, res) {
  res.json(agents);
});

app.get("/templates", function (req, res) {
  sess = req.session;
  if (!sess.templates) {
    sess.templates = defaultTemplates;
  }

  return res.json(sess.templates);
});

app.post("/templates", function (req, res) {
  sess = req.session;
  if (!sess.templates) {
    sess.templates = defaultTemplates;
  }

  const newTemplate = {
    ...req.body,
    id: uuid.v4(),
  };

  sess.templates = sess.templates.concat(newTemplate);
  res.status(201).json(newTemplate);
});

app.get("/templates/:id", function (req, res) {
  sess = req.session;
  if (!sess.templates) {
    sess.templates = defaultTemplates;
  }

  const template = sess.templates.find((item) => item.id === req.params?.id);
  if (template) {
    return res.json(template);
  }
  return res.status(404).send();
});

app.get("/contracts", function (req, res) {
  sess = req.session;
  if (!sess.contracts) {
    sess.contracts = [
      {
        id: "1",
        description: "Conttract #1",
        type: CONTRACT_TYPES.BUY_RATE,
        createdAt: new Date().toISOString(),
      },
      {
        id: "2",
        description: "Conttract Profit #2",
        type: CONTRACT_TYPES.PROFIT_SPLIT,
        createdAt: new Date().toISOString(),
      },
    ];
  }

  res.json(sess.contracts);
});

app.post("/contracts", function (req, res) {
  sess = req.session;
  if (!sess.contracts) {
    sess.contracts = [];
  }

  const contract = {
    id: uuid.v4(),
    ...req.body,
  };

  sess.contracts = sess.contracts.concat(contract);

  res.status(201).json(contract);
});

app.listen(3001, function () {
  console.log("Example app listening on port 3001!");
});
