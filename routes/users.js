import express from 'express';
import { updateUser, deleteUser, getUser, getUsers } from '../controllers/user.js';
import { verifyUser, verifyToken, verifyAdmin } from '../utils/verifyToken.js';

const router = express.Router();

// router.get('/checkauthentication', verifyToken, (req, res, next) => {
//   res.send('hello u are logged in');
// });

// router.get('/checkuser/:id', verifyUser, (req, res, next) => {
//   res.send('hello u are logged in and you can delete your account');
// });

// router.get('/checkadmin/:id', verifyAdmin, (req, res, next) => {
//   res.send('hello admin, u are logged in and you can delete your account');
// });

// update
router.put('/:id', verifyUser, updateUser);

// delete
router.delete('/:id', verifyUser, deleteUser);

// get
router.get('/:id', verifyUser, getUser);

// get All
router.get('/', verifyAdmin, getUsers);

export default router;
