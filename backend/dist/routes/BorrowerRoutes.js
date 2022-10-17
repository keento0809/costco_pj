"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const router = express_1.default.Router();
router.get("/home", (req, res) => { });
router.get("/profile", (req, res) => { });
router.get("/profile/edit", (req, res) => { });
router.get("/profile/history", (req, res) => { });
router.get("/detail", (req, res) => { });
router.get("/checkout/selectDate", (req, res) => { });
router.get("/checkout/payment", (req, res) => { });
router.get("/checkout/completion", (req, res) => { });
// update borrower profile
router.post("/profile", (req, res) => { });
// confirm appointment
router.post("/checkout/submit", (req, res) => { });
// I need to add post route for stripe later
exports.default = router;
