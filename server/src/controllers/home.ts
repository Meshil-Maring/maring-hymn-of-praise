import { Request, Response } from "express";

export const Home = (req: Request, res: Response) => {
  res.send("Welcome to home page.");
};
