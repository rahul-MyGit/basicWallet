
import { Router } from "express";
import { getWallet } from "../controller/walletController";

const router = Router();

router.get("/getwallet", getWallet);


export default router;
