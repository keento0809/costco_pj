"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function errorHandler(err, req, res) {
    err.statusCode = err.statusCode || 500;
    err.status = err.status || 'error';
    res.status(err.statusCode).json({
        status: err.status,
        error: err,
        message: err.message,
        stack: err.stack
    });
}
exports.default = errorHandler;
