const router = require('express').Router();
const listRouter = require('./listRoutes');
const taskRouter = require('./taskRoutes');
const userRouter = require('./userRoutes');

router.use('/v1/lists', listRouter);
router.use('/v1/tasks', taskRouter);
router.use('/v1/users', userRouter);

module.exports = router;