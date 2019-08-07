const usersControl = {}; 

usersControl.getUsers = (req, res) => res.send('GET - ruta de usuarios');
usersControl.getUser = (req, res) => res.send('GET - ruta de usuarios id: ' + req.params.id)
usersControl.postUsers = (req, res) => res.send('POST - ruta de usuarios');
usersControl.putUser = (req, res) => res.send('PUT - ruta de usuarios id: ' + req.params.id)
usersControl.deleteUser = (req, res) => res.send('DELETE - ruta de usuarios, id: '+ req.params.id )


module.exports = usersControl;