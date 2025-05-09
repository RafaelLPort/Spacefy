import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import userRouter from "./routes/userRoutes";
import spaceRouter from "./routes/spaceRoutes";
import authRoutes from "./routes/authRoutes";
import paymentRoutes from "./routes/paymentRoutes";
import viewHistoryRouter from "./routes/viewhistoryRoutes";
import cors from "cors";


dotenv.config();

const app = express();

app.use(cors());
app.use(express.json()); // Middleware para JSON
app.use("/users", userRouter); // Rotas de usuários
app.use("/spaces", spaceRouter); // Rotas de espaços
app.use("/auth", authRoutes); // Rotas de autenticação
app.use("/payments", paymentRoutes);// Rotas de Pagamento Seguro
app.use("/view-history", viewHistoryRouter);

const PORT = process.env.PORT || 3000;
const MONGO_URI = process.env.MONGO_URI;

if (!MONGO_URI) {
  throw new Error("MONGO_URI não definida no arquivo .env");
}

app.listen(PORT, async () => {
  try {
    await mongoose.connect(MONGO_URI);
    console.log("Banco de dados conectado!");
  } catch (error) {
    console.error("Erro ao conectar no banco de dados:", error);
  }
  console.log(`Servidor rodando na porta ${PORT}`);
});
