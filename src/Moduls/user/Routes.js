import { Router } from 'express';
import userRegister from './userRegister';
import userGetAll from './userGetAll';
import userGetById from './userGetById';
import userUpdateById from './userUpdateById';
import userDeleteById from './userDeleteById';
import deleteAll from './deleteAll';

const router = Router();

router.post('/', userRegister); //localhost:5000/user/ POST
router.get('/', userGetAll); //localhost:5000/user/ GET
router.get('/:userId', userGetById); //localhost:5000/user/ GET
router.patch('/:userId', userUpdateById); //localhost:5000/user/ Patch
router.delete('/:userId', userDeleteById); //localhost:5000/user/ Delete
router.delete('/', deleteAll); //localhost:5000/user/ DeleteAll

export default router;
