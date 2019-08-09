const { Router } = require('express');
const { getNote, getNotes, postNotes, putNote, deleteNote } = require('../controllers/notescontrol');
const router = Router();

router.route('/')
    .get(getNotes)
    .post(postNotes);

router.route('/:id')
    .get(getNote)
    .put(putNote)
    .delete(deleteNote);
    
module.exports = router;