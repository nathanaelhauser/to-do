const router = require('express').Router();
const { User } = require('../../models');

router.get('/', function (req, res) {
  try {
    const users = User.findAll();
    res.status(200).json(users);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

router.get('/:id', function (req, res) {
  try {
    const user = User.findById(req.params.id);
    res.status(200).json(user);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

router.post('/', function (req, res) {
  try {
    const user = User.create(req.body);
    res.status(201).json(user);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

router.put('/:id', function (req, res) {
  try {
    const user = User.update(req.params.id, req.body);
    res.status(200).json(user);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

router.delete('/:id', function (req, res) {
  try {
    const user = User.delete(req.params.id);
    res.status(200);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;