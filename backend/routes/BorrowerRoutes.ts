import express, { Express, Request, Response } from "express";
const router = express.Router();

router.get("/home", (req: Request, res: Response) => {});
router.get("/profile", (req: Request, res: Response) => {});
router.get("/profile/edit", (req: Request, res: Response) => {});
router.get("/profile/history", (req: Request, res: Response) => {});
router.get("/detail", (req: Request, res: Response) => {});
router.get("/checkout/selectDate", (req: Request, res: Response) => {});
router.get("/checkout/payment", (req: Request, res: Response) => {});
router.get("/checkout/completion", (req: Request, res: Response) => {});

// update borrower profile
router.post("/profile", (req: Request, res: Response) => {});
// confirm appointment
router.post("/checkout/submit", (req: Request, res: Response) => {});
// I need to add post route for stripe later

export default router;
