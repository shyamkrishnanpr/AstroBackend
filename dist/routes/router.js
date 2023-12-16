"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const controller_1 = require("../controllers/controller");
const router = express_1.default.Router();
router.post("/api/astrologers/register", controller_1.registerAstrologer);
router.get("/api/astrologers", controller_1.astrologersList);
router.put("/api/astrologers/:id", controller_1.editAstrologer);
exports.default = router;
//# sourceMappingURL=router.js.map