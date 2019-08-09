const notesControl = {}; 

notesControl.getNotes = (req, res) => res.send('GET - ruta de Notas');
notesControl.getNote = (req, res) => res.send('GET - ruta de Notas id: ' + req.params.id)
notesControl.postNotes = (req, res) => res.send('POST - ruta de Notas');
notesControl.putNote = (req, res) => res.send('PUT - ruta de Notas id: ' + req.params.id)
notesControl.deleteNote = (req, res) => res.send('DELETE - ruta de Notas, id: '+ req.params.id )


module.exports = notesControl;