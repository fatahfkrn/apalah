/* eslint-disable no-unused-vars */
import express, { Router } from "express";
const app = express();
const router = Router();
import { getAllUsers, createNewUser, updateUserById, deleteUserById, getUserById } from "../controllers/userController";
import { checkSchema } from "express-validator";
import createUserValidation from "../validations/createUserValidation";
import updateUserValidation from "../validations/updateUserValidation";

// METHOD GET MENDAPATKAN SEMUA DATA USER
router.get("/", getAllUsers);

// METHOD POST MENAMBAHKAN DATA USER BARU
router.post(
  "/",
  checkSchema(createUserValidation),
  createNewUser
);

// PUT METHOD Mengupdate data user sesuai dengan ID-nya
router.put("/:id", updateUserById);

// METHOD DELETE untuk menghapus user
router.delete(
  "/:id",
  checkSchema(updateUserValidation),
  deleteUserById
);

// METHOD GET dengan paramter id
router.get("/:id", getUserById);

export default router;