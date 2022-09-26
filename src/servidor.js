import express, { json, urlencoded } from "express";
import router from "./routes/routes.js";
import swaggerUI from 'swagger-ui-express';
import swaggerJSDoc from "swagger-jsdoc";
import path from 'path';
import { fileURLToPath } from 'url';
const __filename = fileURLToPath(import.meta.url);

// 👇️ "/home/john/Desktop/javascript"
const __dirname = path.dirname(__filename);
const swaggerSpec = {
    definition: {
        openapi: "3.0.0",
        info: {
            title: "API-AMOBA",
            version: "1.0.0"
        },
        servers: [
            {
                url: "http://localhost:8589"
            }
        ]
    },
    apis: [`${path.join(__dirname, "./routes/*.js")}`]
}
class Servidor {
    constructor() {
        this.app = express();
        this.port = 8589;
        this.middlewares();
        this.routes();
        this.documentacion();
    }
    middlewares() {
        this.app.use(json());
        this.app.use(urlencoded({ extended: true }));

    }
    documentacion() {
        this.app.use('/documentacion', swaggerUI.serve, swaggerUI.setup(swaggerJSDoc(swaggerSpec)))
    }
    routes() {
        this.app.use('/api', router)
    }
    listen() {
        this.app.listen(this.port, () => {
            console.log("EL PUERTO ESTA CORRIENDO ", this.port);
        });
    }
}
export default Servidor;