"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const holderSchema = new mongoose_1.default.Schema({
    _id: {
        type: mongoose_1.default.Schema.Types.ObjectId,
        required: true,
    },
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
        select: false
    },
    avatar: {
        type: String,
        required: false,
    },
    socialMediaLinks: {
        type: {},
        required: true,
    },
    followers: {
        type: [],
        required: false,
    },
    nextSchedules: {
        type: [],
        required: false,
    },
    reviews: {
        type: [],
        required: false,
    },
    histories: {
        type: [],
        required: false,
    },
}, { timestamps: true });
exports.default = mongoose_1.default.model("Holder", holderSchema);
