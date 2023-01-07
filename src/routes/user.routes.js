import { Router } from "express";
const router = Router();

import * as userCtrl from '../controllers/user.controller';
import {authJwt, verifySignup} from '../middlewares'


router.post(
  "/",
  [authJwt.verifyToken, authJwt.checkingRoles, verifySignup.checkRolesExisted],
  userCtrl.createUser
);

router.get("/", userCtrl.getUsers);

router.get("/:userId", userCtrl.getUserById);

router.put("/:userId",[ authJwt.verifyToken, verifySignup.checkRolesExisted], userCtrl.updateUserById);

router.patch("/:userId", [ authJwt.verifyToken, verifySignup.checkRolesExisted], userCtrl.deleteUsuario);

router.delete('/:userId', [ authJwt.verifyToken, authJwt.checkingRoles, verifySignup.checkRolesExisted], userCtrl.destroyUser);
 

export default router;
