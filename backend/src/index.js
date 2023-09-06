const express = require("express");
const v1PostRouter = require("./v1/routes/postsRoutes");

const app = express();
const PORT = process.env.PORT || 3080;

var cors = require("cors");
app.use(express.json());
app.use(cors("*"));
app.use("/api/v1/posts", v1PostRouter);

app.listen(PORT, () => {
  console.log(`Server listening on PORT ${PORT}`);
});
