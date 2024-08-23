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
// router.patch('/update/:id', verifyToken, updateUser);  // not working on deployed server
// router.delete('/delete/:id', verifyToken, deleteUser); // not working on deployed server
router.patch('/update/:id', updateUser);
router.delete('/delete/:id', deleteUser);

export default router;
