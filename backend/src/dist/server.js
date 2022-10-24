"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const morgan_1 = __importDefault(require("morgan"));
const db_1 = __importDefault(require("./config/db"));
const cors_1 = __importDefault(require("cors"));
const AuthRouter_1 = __importDefault(require("./routes/AuthRouter"));
const error_handlers_1 = __importDefault(require("./errors/error_handlers"));
dotenv_1.default.config();
(0, db_1.default)();
const app = (0, express_1.default)();
const port = process.env.PORT || 5000;
app.use((0, morgan_1.default)('tiny'));
app.use((0, cors_1.default)());
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: true }));
app.use("/user", AuthRouter_1.default);
app.get("/", (req, res) => {
    res.send("Home");
});
app.all("*", (req, res, next) => {
    next(new Error);
});
app.use(error_handlers_1.default);
app.listen(port, () => {
    console.log(`[server] server is running on port ${port}.`);
});
