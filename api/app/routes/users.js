import { Router } from "express";
import * as userController from "../controllers/users.controller";

const router = Router();

// C POST
router.post('/userAuth/', userController.createUserAuth);
router.post('/userReg/', userController.createUserDb);

// R GET
router.get('/getUsers/', userController.getUsers);
router.get('/getUser/', userController.getUser);

// U PUT
router.put('/updateUser/', userController.updateUser);

// D Delete
router.delete('/deleteUser/', userController.deleteUser);

export default router;