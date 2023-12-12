"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.registerAstrologer = void 0;
const astrolegerSchema_1 = require("../model/astrolegerSchema");
const registerAstrologer = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        console.log("inside dthe register");
        // Extract astrologer data from the request body
        const { name, gender, email, languages, specialties } = req.body;
        // Create a new astrologer instance
        const newAstrologer = new astrolegerSchema_1.AstrologerModel({
            name,
            gender,
            email,
            languages,
            specialties,
        });
        // Save the astrologer to the database
        const savedAstrologer = yield newAstrologer.save();
        // Respond with the registered astrologer's details
        res.status(201).json(savedAstrologer);
    }
    catch (error) {
        console.log(error);
    }
});
exports.registerAstrologer = registerAstrologer;
//# sourceMappingURL=controller.js.map