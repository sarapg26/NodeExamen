import {Router} from  'express';
import {home} from "../controllers/controllers.js";


const router = Router();

router.get("/home", home);

export default router;
