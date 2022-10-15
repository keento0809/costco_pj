"use strict";
exports.__esModule = true;
var express_1 = require("express");
var dotenv = require("dotenv");
dotenv.config();
var app = (0, express_1["default"])();
var port = process.env.PORT || 5000;
app.use(express_1["default"].json());
app.use(express_1["default"].urlencoded({ extended: true }));
app.get("/", function (req, res) {
    res.send("Home");
});
app.listen(port, function () {
    console.log("[server] server is running on port ".concat(port, "."));
});
