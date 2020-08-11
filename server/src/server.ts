import express from "express";
import routes from "./routes";
import cors from "cors";

const app = express();
const PORT = 3333;

app.use(express.json());
app.use(cors());
app.use(routes);

app.listen(PORT | 3333, () => {
  console.log("🚀 API started on port 3333 🚀");
});
