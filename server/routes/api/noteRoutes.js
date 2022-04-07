const router = require('express').Router();
const { Note } = require('../../models');

router.get('/', function (req, res) {
  try {
    const notes = Note.findAll();
    res.status(200).json(notes);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

router.get('/:id', function (req, res) {
  try {
    const note = Note.findById(req.params.id);
    res.status(200).json(note);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

router.post('/', function (req, res) {
  try {
    const note = Note.create(req.body);
    res.status(201).json(note);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

router.put('/:id', function (req, res) {
  try {
    const note = Note.update(req.params.id, req.body);
    res.status(200).json(note);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

router.delete('/:id', function (req, res) {
  try {
    const note = Note.delete(req.params.id);
    res.status(200);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;