import express from "express";
import {
  registerAstrologer,
  astrologersList,
  editAstrologer,
} from "../controllers/controller";

const router = express.Router();

router.post("/api/astrologers/register", registerAstrologer);

router.get("/api/astrologers", astrologersList);

router.put("/api/astrologers/:id", editAstrologer);

export default router;
