import { Router } from "express";
import * as userController from "../controllers/users.controller";

const router = Router();

// C POST
router.post('/userAuth/', /*userController.isValidToken,*/ userController.createUserAuth);
router.post('/userReg/', /*userController.isValidToken,*/ userController.createUserDb);

// R GET
router.get('/getUsers/', /*userController.isValidToken,*/ userController.getUsers);
router.get('/getUser/:id', /*userController.isValidToken,*/ userController.getUser);

// U PUT
router.put('/updateUser/:id', /*userController.isValidToken,*/ userController.updateUser);
router.put('/addDog/', /*userController.isValidToken,*/ userController.addDog);

// D Delete
router.delete('/deleteUser/:id', /*userController.isValidToken,*/ userController.deleteUser);

export default router;