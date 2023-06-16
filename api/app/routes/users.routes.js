import { Router } from "express";
import * as userController from "../controllers/users.controller";

const router = Router();

// C POST
router.post('/users/', /*userController.isValidToken,*/ userController.createUserAuth);
router.post('/users/', /*userController.isValidToken,*/ userController.createUserDb);

// R GET
router.get('/users/', /*userController.isValidToken,*/ userController.getUsers);
router.get('/users/:id', /*userController.isValidToken,*/ userController.getUser);

// U PUT
router.put('/users/', /*userController.isValidToken,*/ userController.updateUser);
router.put('/users/', /*userController.isValidToken,*/ userController.addDog);

// D Delete
router.delete('/users/:id', /*userController.isValidToken,*/ userController.deleteUser);

export default router;