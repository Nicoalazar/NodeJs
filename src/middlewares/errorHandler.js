//import {ApiResponse} from "../utils/response.js"; //TODO: completar ruta
//import { AppError } from "../utils/errorTypes.js"; //TODO: completar ruta

const errorHandler = (err, req, res, next) => {
    console.error('Error capturado:', {
        message: err.message,
        stack: err.stack,
        url: req.url,
        method: req.method,
        timestamp: new Date().toISOString()
    });
};

export default errorHandler;