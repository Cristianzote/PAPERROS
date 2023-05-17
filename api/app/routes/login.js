import { Router } from 'express';

const loginRouter = Router();

loginRouter.get("/google", (req, res) => res.send("qbo mundo"));

export { loginRouter };