import express from "express";
const port = 5000
const app = express();
// import errorhandler from "./middleware/errorHandler";
// import logger from "./middleware/logger";
import userRoutes from "./routes/userRoutes";
// import { BASE_URL, PORT } from "./config/appConfig";
// import authRoutes from "./routes/authRoutes";
// import authMiddleware from "./middleware/authMiddleware";
// import cors from "cors";

// Middleware
// app.use(cors({ origin: "*" }));
// app.use(json());

// app.use(urlencoded({ extended: true }));
// app.use(logger);
// app.use("/api/auth", authRoutes);

// HANYA USER YANG LOGIN BISA CRUD data users
// app.use(authMiddleware);
app.use("/api/users", userRoutes);

// error handler execute at the end
app.use("/*", (req, res) =>
  res.status(404).json({
    error: "ERR NOT FOUND",
  })
);
// app.use(errorhandler);

app.listen(port, () => console.log(`Server is running on ${port}`));