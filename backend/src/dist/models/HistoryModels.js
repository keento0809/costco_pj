"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const historySchema = new mongoose_1.default.Schema({
    _id: {
        type: mongoose_1.default.Schema.Types.ObjectId,
        required: true,
    },
    schedule_id: {
        type: mongoose_1.default.Schema.Types.ObjectId,
        required: true,
    },
    review_id: {
        type: mongoose_1.default.Schema.Types.ObjectId,
        required: false,
    },
}, { timestamps: true });
exports.default = mongoose_1.default.model("History", historySchema);
