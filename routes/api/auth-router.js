import express from "express";

import authController from "../../controllers/auth-controller.js";

import {
  isEmptyBody,
  authenticate,
  passport,
} from "../../middlewares/index.js";

import { validateBody } from "../../decorators/index.js";

import {
  userSignupSchema,
  userSigninSchema,
  userRefreshTokenSchema,
} from "../../models/User.js";

const authRouter = express.Router();

authRouter.get(
  "/google",
  passport.authenticate("google", { scope: ["email", "profile"] })
);
authRouter.get(
  "/google/callback",
  passport.authenticate("google", { session: false }),
  authController.googleAuth
);

authRouter.post(
  "/signup",
  isEmptyBody,
  validateBody(userSignupSchema),
  authController.signup
);

authRouter.post(
  "/signin",
  isEmptyBody,
  validateBody(userSigninSchema),
  authController.signin
);

authRouter.get("/current", authenticate, authController.getCurrent);

authRouter.post("/signout", authenticate, authController.signout);

authRouter.post(
  "/refresh",
  validateBody(userRefreshTokenSchema),
  authController.refresh
);

export default authRouter;
