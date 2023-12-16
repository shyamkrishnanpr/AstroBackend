import { Request, Response } from "express";
import { AstrologerModel } from "../model/astrolegerSchema";

// POST API to Register Astrologer:

export const registerAstrologer = async (req: Request, res: Response) => {
  try {
    const { name, gender, email, languages, specialties } = req.body;
    const newAstrologer = new AstrologerModel({
      name,
      gender,
      email,
      languages,
      specialties,
    });
    const savedAstrologer = await newAstrologer.save();
    res.status(201).json(savedAstrologer);
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
    // console.log(error);
  }
};

// GET API to List All Astrologers:

export const astrologersList = async (req: Request, res: Response) => {
  try {
    const astrologers = await AstrologerModel.find();
    res.status(200).json(astrologers);
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
};

// PUT API to Edit Astrologer Data:

export const editAstrologer = async (req: Request, res: Response) => {
  try {
    const astrologerId = req.params.id;

    const { name, gender, email, languages, specialties } = req.body;

    const existingAstrologer = await AstrologerModel.findById(astrologerId);

    if (!existingAstrologer) {
      return res.status(404).json({ error: "Astrologer not found" });
    }

    existingAstrologer.name = name;
    existingAstrologer.gender = gender;
    existingAstrologer.email = email;
    existingAstrologer.languages = languages;
    existingAstrologer.specialties = specialties;

    const updatedAstrologer = await existingAstrologer.save();

    res.status(200).json(updatedAstrologer);
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
};
