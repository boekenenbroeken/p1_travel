import express, { Application } from "express";
import http from "http";
import bodyParser from "body-parser";
import authAnonymousRoutes from "./routes/tickets/tickets";
import cors from "cors";

const app: Application = express();
app.use(cors());
const server = http.createServer(app);

// Setup
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// ANONYMOUS ROUTES
app.use("/tickets", authAnonymousRoutes);

server.listen(5001, () => {
    console.log("App listening on port 5001");
});

export default app;
