import "express-async-errors";
import "dotenv/config";
import express, { NextFunction, Request, Response } from "express";
import mongoose from "mongoose";
import cors from "cors";
import path from "path";
import api from "./routers";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());
app.use("/api", api);

const PORT = process.env.PORT || 8080;
const DB_URI = process.env.DB_URI || "mongodb://localhost:27017";

if (process.env.NODE_ENV === "production") {
    app.use("/", express.static(path.join(__dirname, "client")));
    const indexPath = path.join(__dirname, "client", "index.html");
    app.get("*", (req, res) => {
        res.sendFile(indexPath);
    });
};

app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
    res.status(500).send({ message: err.message });
});

async function start() {
    await mongoose.connect(DB_URI);
    console.log("MongoDB connected.");
    app.listen(PORT, () => console.log("Server started"));
};

start();
