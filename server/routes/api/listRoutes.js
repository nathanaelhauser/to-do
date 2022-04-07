const router = require('express').Router();
const { List } = require('../../models');

router.get('/', function (req, res) {
  try {
    const lists = List.findAll();
    res.status(200).json(lists);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

router.get('/:id', function (req, res) {
  try {
    const list = List.findById(req.params.id);
    res.status(200).json(list);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

router.post('/', function (req, res) {
  try {
    const list = List.create(req.body);
    res.status(201).json(list);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

router.put('/:id', function (req, res) {
  try {
    const list = List.update(req.params.id, req.body);
    res.status(200).json(list);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

router.delete('/:id', function (req, res) {
  try {
    const list = List.delete(req.params.id);
    res.status(200);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;