
import { Request, Response } from "express";

export const getWallet = (req: Request, res: Response) => {
    res.send("Hello World from controller");
}