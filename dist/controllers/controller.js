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
exports.editAstrologer = exports.astrologersList = exports.registerAstrologer = void 0;
const astrolegerSchema_1 = require("../model/astrolegerSchema");
// POST API to Register Astrologer:
const registerAstrologer = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { name, gender, email, languages, specialties } = req.body;
        const newAstrologer = new astrolegerSchema_1.AstrologerModel({
            name,
            gender,
            email,
            languages,
            specialties,
        });
        const savedAstrologer = yield newAstrologer.save();
        res.status(201).json(savedAstrologer);
    }
    catch (error) {
        res.status(500).json({ error: "Internal Server Error" });
        // console.log(error);
    }
});
exports.registerAstrologer = registerAstrologer;
// GET API to List All Astrologers:
const astrologersList = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const astrologers = yield astrolegerSchema_1.AstrologerModel.find();
        console.log(astrologers);
        res.status(200).json(astrologers);
    }
    catch (error) {
        res.status(500).json({ error: "Internal Server Error" });
    }
});
exports.astrologersList = astrologersList;
// PUT API to Edit Astrologer Data:
const editAstrologer = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const astrologerId = req.params.id;
        const { name, gender, email, languages, specialties } = req.body;
        const existingAstrologer = yield astrolegerSchema_1.AstrologerModel.findById(astrologerId);
        if (!existingAstrologer) {
            return res.status(404).json({ error: "Astrologer not found" });
        }
        existingAstrologer.name = name;
        existingAstrologer.gender = gender;
        existingAstrologer.email = email;
        existingAstrologer.languages = languages;
        existingAstrologer.specialties = specialties;
        const updatedAstrologer = yield existingAstrologer.save();
        res.status(200).json(updatedAstrologer);
    }
    catch (error) {
        res.status(500).json({ error: "Internal Server Error" });
    }
});
exports.editAstrologer = editAstrologer;
//# sourceMappingURL=controller.js.map