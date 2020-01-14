import config from "dotenv";
import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import edibleRoutes from "./server/routes/EdibleRoutes";
import ingredientRoutes from "./server/routes/IngredientRoutes";
import foodLabelRoutes from "./server/routes/FoodLabelRoutes";
import userRoutes from "./server/routes/UserRoutes";

config.config();

const app = express();

const corsOptions = {
  origin: "http://localhost:8080",
  optionsSuccessStatus: 200
};

app.use(cors(corsOptions));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const port = process.env.PORT || 3000;

app.use("/api/v1/edibles", edibleRoutes);
app.use("/api/v1/ingredients", ingredientRoutes);
app.use("/api/v1/foodlabels", foodLabelRoutes);
app.use("/api/v1/users", userRoutes);

// when a random route is inputed
app.get("*", (req, res) =>
  res.status(200).send({
    message: "Welcome to this API."
  })
);

app.listen(port, () => {
  console.log(`Server is running on PORT ${port}`);
});

export default app;
