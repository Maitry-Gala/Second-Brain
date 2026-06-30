import { Router } from "express";
import passport from "passport";
import type { Request, Response } from "express";
import jwt from "jsonwebtoken";

const authRouter: Router = Router();

authRouter.get("/google",
  passport.authenticate("google", { scope: ["profile", "email"] })
);

authRouter.get("/google/callback",
  passport.authenticate("google", { failureRedirect: `${process.env.FRONTEND_URL}/auth?error=google` }),
  (req: Request, res: Response) => {
    const user = req.user as any;
    const token = jwt.sign({ userId: user._id.toString() }, process.env.JWT_SECRET!, { expiresIn: "7d" });
    // redirect to frontend with token in query param
    res.redirect(`${process.env.FRONTEND_URL}/auth/callback?token=${token}`);
  }
);

export default authRouter;