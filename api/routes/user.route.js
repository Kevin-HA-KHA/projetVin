import express from 'express';
import {
  test,
  updateUser,
  deleteUser,
  // getUserDataById,
} from '../controllers/user.controller.js';
import { verifyToken } from '../utils/verifyUser.js';

const router = express.Router();

router.get('/', test);
// router.get('/:id', getUserDataById);
router.patch('/update/:id', verifyToken, updateUser);
router.delete('/delete/:id', verifyToken, deleteUser);

export default router;
