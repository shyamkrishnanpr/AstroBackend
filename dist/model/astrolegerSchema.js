"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AstrologerModel = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const astrologerSchema = new mongoose_1.default.Schema({
    name: { type: String, required: true },
    gender: { type: String, required: true },
    email: { type: String, required: true },
    languages: { type: [String], required: true },
    specialties: { type: [String], required: true },
});
exports.AstrologerModel = mongoose_1.default.model('Astrologer', astrologerSchema);
//# sourceMappingURL=astrolegerSchema.js.map