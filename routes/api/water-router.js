import express from "express";

import waterController from "../../controllers/waters-controller.js";

import { isEmptyBody } from "../../middlewares/index.js";

import { validateBody } from "../../decorators/index.js";
import { waterAddSchema } from "../../models/Water.js";

const watersRouter = express.Router();

watersRouter.get("/", waterController.getAll);

// watersRouter.get("/:id", waterController.getById);

watersRouter.post(
  "/",
  isEmptyBody,
  validateBody(waterAddSchema),
  waterController.add
);

// watersRouter.put("/:id", isEmptyBody, validateBody(movieUpdateSchema), waterController.updateById);

// watersRouter.delete("/:id", waterController.deleteById);

export default watersRouter;
