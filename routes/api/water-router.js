import express from "express";

import waterController from "../../controllers/waters-controller.js";

import {
  isEmptyBody,
  isValidId,
  authenticate,
} from "../../middlewares/index.js";

import { validateBody } from "../../decorators/index.js";

import {
  waterAddSchema,
  waterUpdateFavoriteSchema,
  waterUpdateSchema,
} from "../../models/Water.js";

const watersRouter = express.Router();

watersRouter.use(authenticate);

watersRouter.get("/", waterController.getAll);

watersRouter.get("/:id", isValidId, waterController.getById);

watersRouter.post(
  "/",
  isEmptyBody,
  validateBody(waterAddSchema),
  waterController.add
);

watersRouter.put(
  "/:id",
  isValidId,
  isEmptyBody,
  validateBody(waterUpdateSchema),
  waterController.updateById
);
watersRouter.patch(
  "/:id/favorite",
  isValidId,
  isEmptyBody,
  validateBody(waterUpdateFavoriteSchema),
  waterController.updateById
);
watersRouter.delete("/:id", isValidId, waterController.deleteById);

export default watersRouter;
