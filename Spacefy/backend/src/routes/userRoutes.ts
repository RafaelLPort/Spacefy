import express from "express";
import {
  getAllUsers,
  createUser,
  updateUser,
  deleteUser,
  toggleFavoriteSpace,
} from "../controllers/userController";

import { validateAndGetTokenData } from "../middlewares/token";

const userRouter = express.Router();

// Rota para listar usuários
userRouter.get("/getAllUsers", validateAndGetTokenData, getAllUsers);

// Rota para criar um novo usuário
userRouter.post("/createUser", createUser);

//Rota para atualizar o usuario pelo ID
userRouter.put("/updateUser/:id", updateUser);

//Rota para deletar o usuario pelo ID
userRouter.delete("/deleteUser/:id", validateAndGetTokenData, deleteUser);

//Rota para favoritar ou desfavoritar um espaço
userRouter.post("/:userId/favorites", validateAndGetTokenData, toggleFavoriteSpace);

export default userRouter;
