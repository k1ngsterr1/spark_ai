import "module-alias/register";

// Libraries
const dotenv = require("dotenv").config({ path: ".env" });
const express = require("express");
const bcryptjs = require("bcryptjs");

const swaggerUi = require("swagger-ui-express");
const swaggerDocument = require("./swagger-output.json");

// Routes
import authRoutes from "@api/routes/authRoutes";

// Models
const User = require("@models/userModel");

// Database
const { Pool } = require("pg");

const app = express();
const port = process.env.PORT;

app.use(express.json());

// Routes:
app.use("/api/auth", authRoutes);
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.get("/", (req: any, res: any) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
