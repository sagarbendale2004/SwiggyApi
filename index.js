import express from "express";
import fs from "fs";
import path from "path";
import cors from "cors";
import { fileURLToPath } from "url";

// Define __dirname manually
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const port = process.env.PORT || 8000;

// Middleware to parse JSON bodies
app.use(express.json());
app.use(cors());
app.use(express.static("public"));

// Endpoint to get data from category.json
app.get("/categories", (req, res) => {
  const filePath = path.join(__dirname, "Data/category.json");

  // Read the file
  fs.readFile(filePath, "utf8", (err, data) => {
    if (err) {
      console.error("Error reading file:", err);
      res.status(500).send("Internal Server Error");
      return;
    }

    // Parse JSON data
    try {
      const categories = JSON.parse(data);
      res.json(categories);
    } catch (error) {
      console.error("Error parsing JSON:", error);
      res.status(500).send("Internal Server Error");
    }
  });
});

app.get("/top-restaurant-chains", (req, res) => {
  const filePath = path.join(__dirname, "Data/restaurantChains.json");

  // Read the file
  fs.readFile(filePath, "utf8", (err, data) => {
    if (err) {
      console.error("Error reading file:", err);
      res.status(500).send("Internal Server Error");
      return;
    }

    // Parse JSON data
    try {
      const restaurantChains = JSON.parse(data);
      res.json(restaurantChains);
    } catch (error) {
      console.error("Error parsing JSON:", error);
      res.status(500).send("Internal Server Error");
    }
  });
});

// Endpoint to get data from recommended.json
app.get("/recommended", (req, res) => {
  const filePath = path.join(__dirname, "Data/recommended.json");

  // Read the file
  fs.readFile(filePath, "utf8", (err, data) => {
    if (err) {
      console.error("Error reading file:", err);
      res.status(500).send("Internal Server Error");
      return;
    }

    // Parse JSON data
    try {
      const recommended = JSON.parse(data);
      res.json(recommended);
    } catch (error) {
      console.error("Error parsing JSON:", error);
      res.status(500).send("Internal Server Error");
    }
  });
});

// Start the server
app.listen(port, () => {
  console.log(`Server is listening at http://localhost:${port}`);
});
